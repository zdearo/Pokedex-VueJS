<script setup>
  import { ref, computed } from 'vue';
  import { usePokeApi } from '../../services/api.js';
  import Card from '../PokemonList/Card.vue';
  import ErrorMessage from '../App/ErrorMessage.vue';
  import Filters from '../PokemonList/Filters.vue';


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
    <Filters 
      :limit="limit"
      :search="search"
      @update:limit="limit = $event"
      @update:search="search = $event"/>

    <div class="my-4">
      <h1 class="text-2xl font-bold">Pokemons</h1>
    </div>

    <ErrorMessage 
      v-if="error"
      :message = "error"/>
    <p v-else-if="!data">Carregando...</p>
    <div v-else class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <Card
        v-for="pokemon in pokemons"
        :name="pokemon.name"
        :pokemonCode="pokemon.url.split('/')[6]"
        :id="pokemon.id"/>
    </div>
  </main>
</template>