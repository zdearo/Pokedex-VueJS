<script setup>
  import { computed, ref, onMounted, watch, defineProps } from 'vue';
  import Badge from './Badge.vue';
  import { usePokeApi } from '../../services/api';

  const props = defineProps({
    name: String,
    pokemonCode: String,
  });

  const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  const url = computed(() => `${baseUrl}${props.pokemonCode}`);
  
  const pokemonData = ref([]);
  const pokemonImage = computed(() => {
    return `node_modules/pokemon-sprites/sprites/pokemon/other/official-artwork/${props.pokemonCode}.png`;
  });
  
  const { data, error } = usePokeApi(url);
  const types = computed(() => {
    return data.value ? data.value.types.map(type => type.type.name) : [];
  });

  const bgClasses = [{
    type: 'normal',
    bg: 'bg-normal'
  }, {
    type: 'fighting',
    bg: 'bg-fighting'
  }, {
    type: 'flying',
    bg: 'bg-flying'
  }, {
    type: 'poison',
    bg: 'bg-poison'
  }, {
    type: 'ground',
    bg: 'bg-ground'
  }, {
    type: 'rock',
    bg: 'bg-rock'
  }, {
    type: 'bug',
    bg: 'bg-bug'
  }, {
    type: 'ghost',
    bg: 'bg-ghost'
  }, {
    type: 'steel',
    bg: 'bg-steel'
  }, {
    type: 'fire',
    bg: 'bg-fire'
  }, {
    type: 'water',
    bg: 'bg-water'
  }, {
    type: 'grass',
    bg: 'bg-grass'
  }, {
    type: 'electric',
    bg: 'bg-electric'
  }, {
    type: 'psychic',
    bg: 'bg-psychic'
  }, {
    type: 'ice',
    bg: 'bg-ice'
  }, {
    type: 'dragon',
    bg: 'bg-dragon'
  }, {
    type: 'dark',
    bg: 'bg-dark'
  }, {
    type: 'fairy',
    bg: 'bg-fairy'
  }, {
    type: 'unknown',
    bg: 'bg-unknown'
  }]

  const backgroundClass = computed(() => {
    const type = types.value[0];
    const bg = bgClasses.find(bg => bg.type === type);
    return bg ? bg.bg : 'bg-normal';
  });

</script>

<template>
  <div class="rounded-3xl text-white flex justify-center h-48"
        :class="backgroundClass">
    <div class="flex justify-center flex-col items-start gap-3 w-3/6 ml-4">
      <h1 class="z-10 justify-self-start capitalize rounded-t-md font-bold text-3xl">{{ name }}</h1>
      <div class="flex flex-col gap-2">
        <Badge 
          v-for="pokemonType in types"
          :type="pokemonType"/>
      </div>
    </div>
    <div class="bg-no-repeat bg-center bg-contain w-3/6 relative overflow-hidden flex">
      <img class="absolute -right-10 -bottom-8 w-full h-auto opacity-35" src="/img/pokeball-bg.png" alt="">
      <img class="relative object-contain max-h-full w-max" :src="pokemonImage" :alt="name">
    </div>
  </div>
</template>