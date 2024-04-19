import { ref, toValue, watchEffect } from 'vue';

export function usePokeApi(url){
  const data = ref(null);
  const error = ref(null);

  watchEffect(async () => {
    data.value = null;
    error.value = null;
    
    fetch(toValue(url))
      .then(response => response.json())
      .then(json => data.value = json)
      .catch(err => error.value = err);
  })

  return { data, error };
}