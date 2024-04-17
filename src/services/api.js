const api = {
  async get(url){
    const response = await fetch("https://pokeapi.co/api/v2" + url);
    const data = await response.json();
    return data;
  },

  async getPokemons() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();
    return data;
  },
};

export default api;