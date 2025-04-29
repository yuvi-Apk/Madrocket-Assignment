import React, { useEffect, useState } from "react";

const HomePage = () => {
  //states
  const [pokemon, setPokmon] = useState([]);

  // Fetching the data from the api of pokemon
  const API = "https://pokeapi.co/api/v2/pokemon?offset=150&limit=150";

  //functions to fetch data from the api
  const getApiData = async (API) => {
    try {
      const res = await fetch(API);
      const data = await res.json();

      //AGAIN FETCHING TO GET ALL DATA OF EACH POKEMON
      const pokemonPromises = data.results.map(async (currentPokemon) => {
        const res2 = await fetch(currentPokemon.url);
        const data2 = await res2.json();
        return data2;
      });

      const pokemonData = await Promise.all(pokemonPromises);
      setPokmon(pokemonData);
    } catch (error) {
      console.log(error.message);
    }
  };

  // calling the getApi functions

  useEffect(() => {
    getApiData(API);
  }, []);

  console.log(pokemon);
  return <div>fuck of this the home page</div>;
};

export default HomePage;
