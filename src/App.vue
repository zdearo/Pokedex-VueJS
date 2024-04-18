<script setup>
  import { onMounted, ref, computed, watch } from 'vue';
  import api from './services/api';
  import PokemonCard from './components/PokemonList/PokemonCard.vue';

  let limit = ref(20);
  let search = ref();
  const pokemons = ref([]);

  async function fetchPokemons(){
    api.getPokemons(limit.value).then((res) => {
      pokemons.value = res.results;
    });
  }

  const pokemonsFiltered = computed(() => {
    if(pokemons.value && search.value){
      return pokemons.value.filter(pokemon => {
        return pokemon.name.includes(search.value.toLowerCase());
      })
    }

    return pokemons.value;
  })

  onMounted(() => {
    fetchPokemons();
  })

  watch(limit, () =>{
    fetchPokemons();
  })

</script>

<template>
  <Navbar/>

  <main class="flex items-center flex-col w-9/12">
    <div class="p-2">
      <label for="limit">Limite</label>
      <input v-model="limit" class="mx-2 p-1 rounded" type="text" name="limit" :placeholder="limit">
    
      <label for="name">Nome</label>
      <input v-model="search" class="mx-2 p-1 rounded" type="text" name="name">
    </div>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <PokemonCard
        v-for="pokemon in pokemonsFiltered"
        :name="pokemon.name"
        :pokemonCode="pokemon.url.split('/')[6]"/>
    </div>
  </main>
</template>

<style scoped>
</style>
