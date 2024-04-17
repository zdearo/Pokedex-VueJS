<script setup>
  import { onMounted, onUpdated, ref } from 'vue';
  import api from './services/api';

  const limit = ref(20);
  const pokemons = ref([]);

  async function fetchPokemons(){
    api.get("/pokemon?limit=" + limit.value).then((response) => {
      pokemons.value = response.results;
    });
  }

  onMounted(() => {
    fetchPokemons();
  })

  onUpdated(() => {
    fetchPokemons();
  })

</script>

<template>
  <Navbar/>

  <main class="flex items-center flex-col">
    <div class="p-2">
      <label for="limit">Limite</label>
      <input v-model="limit" class="mx-2 p-1" type="text" name="limit" placeholder="limite">
    </div>
    <div v-for="(pokemon, key) in pokemons">
      <p><span>{{ key + 1 }} - </span>{{ pokemon.name }}</p>
    </div>
  </main>
</template>

<style scoped>
</style>
