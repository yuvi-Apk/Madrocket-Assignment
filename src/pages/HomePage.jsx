import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loader from "../components/Loader";
import PokemonCard from "../components/PokemonCard";
import NavBar from "../components/NavBar";

const HomePage = () => {
  //hooks
  const [pokemon, setPokmon] = useState([]);
  const [loader, setLoader] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedTypes, setSelectedTypes] = useState("all");

  // console.log("search:",search,"\n seledtedValue",selectedTypes);

  // Fetching the data from the api of pokemon
  // const API = "https://pokeapi.co/api/v2/pokemon?offset=150&limit=150";

  const API = "https://pokeapi.co/api/v2/pokemon?limit=150";

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
      setLoader(false);
    } catch (error) {
      // Display Th Error
      console.log(error.message);
      toast.error(error.message);
      setLoader(false);
    }
  };

  // calling the getApi functions

  useEffect(() => {
    getApiData(API);
  }, []);

  //implemet the search functionality
  // console.log(pokemon)
  const searchedData = pokemon.filter((poke) => {
    // Get pokemon types
    const pokemonTypes = poke.types.map(type => type.type.name);
    
    // Check name match
    const nameMatch = poke.name.toLowerCase().includes(search.toLowerCase());
    
    // Check type match - if no type selected, return true
    const typeMatch = selectedTypes==="all" || pokemonTypes.includes(selectedTypes);
    
    // Return true only if both conditions are met
    return nameMatch && typeMatch;
  });

  //   implemet the loader MdFunctions
  if (loader) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div className="">
      <NavBar
        pokemon={pokemon}
        search={search}
        setSearch={setSearch}
        selectedTypes={selectedTypes}
        setSelectedTypes={setSelectedTypes}
      />

      {/* responsive card display  */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
      place-items-center sm:px-4! py-2.5! "
      >
        {searchedData.map((currPokemon) => {
          // console.log(currPokemon.id);
          return <PokemonCard key={currPokemon.id} pokemon={currPokemon} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
