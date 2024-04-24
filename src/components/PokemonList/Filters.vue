<script setup>
  import { ref, watch } from 'vue';
  const emit = defineEmits(['update:search']);

  const search = ref();

  watch(search, (newVal) => {
    emit('update:search', newVal);
  });
</script>

<template>
  <div class="flex items-center justify-between p-2">
    <div>
      <label for="name">Nome</label>
      <input v-model="search" class="mx-2 p-1 rounded" type="text" name="name">
    </div>
  </div>
</template>