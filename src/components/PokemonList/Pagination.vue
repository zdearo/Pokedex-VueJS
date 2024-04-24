<script setup>
  import { defineProps, defineEmits, computed } from 'vue';

  const props = defineProps([ 'offset', 'limit', 'data']);
  const emit = defineEmits(['update:offset']);

  const lastPage = computed(() => {
    if (props.data && props.data.count && props.limit !== 0) {
      return Math.ceil(props.data.count/props.limit);
    }
    return 0;
  });

  const activePage = computed(() => {
    return props.offset/props.limit + 1;
  });

  function nextPage(){
    if (activePage.value < lastPage.value) {
      emit('update:offset', props.offset + props.limit);
    }
  }

  function previousPage(){
    if (props.offset >= props.limit) {
      emit('update:offset', props.offset - props.limit);
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