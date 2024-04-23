<script setup>
  import { ref, watch } from 'vue';
  const props = defineProps(['limit', 'search']);
  const emit = defineEmits(['update:limit', 'update:search']);

  const limit = ref(props.limit);
  const search = ref(props.search);

  watch(limit, (newVal) => {
    emit('update:limit', newVal);
  });

  watch(search, (newVal) => {
    emit('update:search', newVal);
  });
</script>

<template>
  <div class="flex items-center justify-between p-2">
    <div>
      <label for="limit">Limite</label>
      <input v-model="limit" class="mx-2 p-1 rounded" type="text" name="limit" :placeholder="props.limit">
    </div>
    <div>
      <label for="name">Nome</label>
      <input v-model="search" class="mx-2 p-1 rounded" type="text" name="name">
    </div>
  </div>
</template>