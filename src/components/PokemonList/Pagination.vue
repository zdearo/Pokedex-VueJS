<script setup>
  import { computed } from 'vue';

  const props = defineProps([ 'limit', 'count']);
  let offset = defineModel();

  const lastPage = computed(() => {
    if (props.count) {
      return Math.ceil(props.count/props.limit);
    }
    return 0;
  });

  const activePage = computed(() => {
    return offset.value/props.limit + 1;
  });

  function nextPage(){
    if (activePage.value < lastPage.value) {
      offset.value = offset.value + props.limit;
    }
  }

  function previousPage(){
    if (offset.value >= props.limit) {
      offset.value = offset.value - props.limit;
    }
  }
</script>

<template>
  <div class="flex justify-between w-full my-4">
    <button 
      @click="previousPage"
      :disabled="offset === 0"
      class="px-4 py-2 text-white bg-blue-500 rounded-md">
      Anterior
    </button>
    <span>Página {{ activePage }} de {{ lastPage }}</span>
    <button 
      @click="nextPage"
      :disabled="activePage >= (lastPage)"
      class="px-4 py-2 text-white bg-blue-500 rounded-md">
      Próximo
    </button>
  </div>
</template>