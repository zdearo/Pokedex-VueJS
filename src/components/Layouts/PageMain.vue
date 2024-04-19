<script setup>
  import { ref, computed } from 'vue';
  import PokemonCard from '../PokemonList/PokemonCard.vue';
  import { usePokeApi } from '../../services/api.js';

  const baseUrl = 'https://pokeapi.co/api/v2/pokemon?limit='
  const limit = ref(20);
  const url = computed(() => baseUrl + limit.value);
  const search = ref();

  const { data, error } = usePokeApi(url);

  const pokemons = computed(() => {
  if(data.value && search.value){
    return data.value.results.filter(pokemon => {
      return pokemon.name.includes(search.value.toLowerCase());
    })
  }

  return data.value ? data.value.results : [];
})
</script>

<template>
  <main class="flex items-center flex-col w-9/12 mx-auto">
    <div class="p-2">
      <label for="limit">Limite</label>
      <input v-model="limit" class="mx-2 p-1 rounded" type="text" name="limit" :placeholder="limit">
    
      <label for="name">Nome</label>
      <input v-model="search" class="mx-2 p-1 rounded" type="text" name="name">
    </div>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <PokemonCard
        v-for="pokemon in pokemons"
        :name="pokemon.name"
        :pokemonCode="pokemon.url.split('/')[6]"/>
    </div>
  </main>
</template>