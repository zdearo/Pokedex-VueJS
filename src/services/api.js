const api = {
  async get(url){
    const response = await fetch("https://pokeapi.co/api/v2" + url);
    const data = await response.json();
    return data;
  },

  async getPokemons(limit) {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=" + limit);
    const data = await response.json();
    return data;
  },
};

export default api;