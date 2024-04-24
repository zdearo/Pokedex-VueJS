<script setup>
  import { ref } from 'vue';

  const search = defineModel();
  const tempSearch = ref('');

  const updateSearch = () => {
    search.value = tempSearch.value;
  };
</script>

<template>
  <div class="flex items-center justify-between p-2">
    <div>
      <label for="name">Nome</label>
      <input v-model="tempSearch" @keydown.enter="updateSearch" class="mx-2 p-1 rounded" type="text" name="name">
      <button class="px-2 py-1 text-white bg-blue-500 rounded-md" @click="updateSearch">Pesquisar</button>
    </div>
  </div>
</template>