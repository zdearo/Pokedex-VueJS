<script setup>
  import { onMounted, ref, computed, watch } from 'vue';
  import api from './services/api';
  import PokemonList from './components/PokemonList.vue'

  let limit = ref(151);
  let search = ref();
  const svgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"
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
    <div class="grid grid-cols-8 gap-2">
      <PokemonList
        v-for="pokemon in pokemonsFiltered"
        :name="pokemon.name"
        :imageCode="svgUrl + pokemon.url.split('/')[6] + '.svg'"/>
    </div>
  </main>
</template>

<style scoped>
</style>
