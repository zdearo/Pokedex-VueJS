<script setup>
  const props = defineProps(['tag', 'search']);
</script>

<template>
  <span id="badge-dismiss-default" class="mx-1 inline-flex items-center py-1 px-2 text-sm text-white bg-blue-500 rounded-full">
    <button @click="search.splice(index, 1)" type="button" class="inline-flex items-center p-0.5 mr-1 text-sm text-white bg-transparent rounded-sm" aria-label="Remove">
      <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
      <span class="sr-only">Remove badge</span>
    </button>
    {{ tag }}
  </span>
</template>