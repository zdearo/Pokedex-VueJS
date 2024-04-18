<script setup>
  import { defineProps } from 'vue';
  
  defineProps(['type']);

</script>

<template>
  <span>
    <span class="capitalize rounded-full bg-white/35 px-5 font-bold w-min">{{ type }}</span>
  </span>
</template>