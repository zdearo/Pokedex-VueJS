<script setup>
  import { ref } from 'vue';
  import api from './services/api';

  const limit = ref(25);
  const pokemons = ref([]);

  api.get("/pokemon?limit=" + limit.value).then((response) => {
    pokemons.value = response.results;
  });

</script>

<template>
  <Navbar/>

  <main class="flex items-center flex-col">
    <div class="p-2">
      <label for="limit">Limite</label>
      <input class="mx-2 p-1" type="text" name="limit" placeholder="limite">
    </div>
    <div v-for="pokemon in pokemons">
      {{ pokemon }}
    </div>
  </main>
</template>

<style scoped>
</style>
