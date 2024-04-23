<script setup>
  import { computed } from 'vue';
  import Badge from './Badge.vue';
  import { usePokeApi } from '../../services/api';

  const props = defineProps({
    name: String,
    pokemonCode: String,
  });

  const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  const url = computed(() => `${baseUrl}${props.pokemonCode}`);
  
  const pokemonImage = computed(() => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/02ed2f6ed8dabcb89037ec14cf0b2d61c56a7a74/sprites/pokemon/other/official-artwork/${props.pokemonCode}.png`;
  });
  
  const { data, error } = usePokeApi(url);
  const types = computed(() => {
    return data.value ? data.value.types.map(type => type.type.name) : [];
  });

  const typeToBgClass = {
    'fighting': 'bg-fighting',
    'flying': 'bg-flying',
    'poison': 'bg-poison',
    'ground': 'bg-ground',
    'rock': 'bg-rock',
    'bug': 'bg-bug',
    'ghost': 'bg-ghost',
    'steel': 'bg-steel',
    'fire': 'bg-fire',
    'water': 'bg-water',
    'grass': 'bg-grass',
    'electric': 'bg-electric',
    'psychic': 'bg-psychic',
    'ice': 'bg-ice',
    'dragon': 'bg-dragon',
    'dark': 'bg-dark',
    'fairy': 'bg-fairy',
    'unknown': 'bg-unknown'
  }

  const backgroundClass = computed(() => {
    const type = types.value[0];
    const bg = typeToBgClass[type];
    return bg ? bg : 'bg-normal';
  });

</script>

<template>
  <div class="rounded-3xl text-white flex justify-center h-48 transform transition-transform duration-200 hover:scale-105 hover:cursor-pointer shadow-lg"
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