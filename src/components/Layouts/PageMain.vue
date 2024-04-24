<script setup>
  import { ref, computed } from 'vue';
  import { usePokeApi } from '../../services/api.js';
  import ErrorMessage from '../App/ErrorMessage.vue';
  import { Card, Filters, Pagination } from '../PokemonList';


  const baseUrl = 'https://pokeapi.co/api/v2/pokemon'
  const limit = ref(20);
  const offset = ref(0);
  const url = computed(() => `${baseUrl}?limit=${limit.value}&offset=${offset.value}`);
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
    <Filters 
      v-model="search"/>

    <Pagination 
      v-model="offset"
      :limit
      :count="data ? data.count : 0"
      @update:offset="offset = $event"/>

    <ErrorMessage 
      v-if="error"
      :message = "error"/>
    <div v-else class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <Card
        v-for="pokemon in pokemons"
        :name="pokemon.name"
        :pokemonCode="pokemon.url.split('/')[6]"
        :id="pokemon.id"/>
    </div>
  </main>
</template>