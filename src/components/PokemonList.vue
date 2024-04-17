<script setup>
  defineProps(['name', 'imageCode'])
</script>

<template>
  <div class="bg-slate-500 my-2 px-2 py-1 rounded text-slate-200 hover:bg-slate-500/85 hover:cursor-pointer">
    <div class="capitalize text-center">{{ name }}</div>
    <div class="p-2">
      <img :src="imageCode" alt="">
    </div>
  </div>
</template>