<script setup>
  import { ref } from 'vue';
  import Tag from './Tag.vue';

  const search = defineModel();
  const tempSearch = ref('');

  function clearInput(){
    tempSearch.value = '';
  }

  const updateSearch = () => {
    if(tempSearch.value === '' || search.value.includes(tempSearch.value)){
      clearInput();
      return;
    }
    search.value.push(tempSearch.value);
    clearInput();
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
  <div id="tags">
    <Tag v-for="(tag, index) in search" :key="index" :search="search" :tag="tag"/>
  </div>
</template>