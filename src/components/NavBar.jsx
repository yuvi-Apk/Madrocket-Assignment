import React, { useEffect, useState } from "react";
// Fix the import path - StylishDropdown is in components folder
import StylishDropdown from "../assets/StylishDropdown"; 

const NavBar = ({
  pokemon,
  search,
  setSearch,
  selectedTypes,
  setSelectedTypes,
}) => {
  const [pokemonTypes, setPokemonTypes] = useState([]);

  // Get unique Pokemon types and format them for dropdown
  const getPokemonTypes = () => {
    // Get all types in a flat array
    const allTypes = pokemon.flatMap((pokemon) =>
      pokemon.types.map((type) => type.type.name)
    );

    // Get unique types
    const uniqueTypes = ["all", ...new Set(allTypes)];

    // Format for dropdown
    return uniqueTypes.map((type) => ({
      value: type,
      label: type.charAt(0).toUpperCase() + type.slice(1),
    }));
  };

  useEffect(() => {
    setPokemonTypes(getPokemonTypes());
  }, [pokemon]);

  // Handler for selection changes
  const handleChange = (option) => {
    setSelectedTypes(option.value);
  };

  return (
    <div className="w-full h-35  sm:h-16 bg-gray-900 flex flex-col sm:flex-row justify-between items-center px-7!">
      <div className="text-2xl text-white">Hello Pokiee</div>

      {/* 2nd div  */}
      <div className="flex mb-2! flex-col sm:flex-row gap-4 items-center">
        {/* search by name  */}
        <div className="">
          <input
            className="border-1 border-red-300 focus:outline-red-200 rounded-xl placeholder:text-amber-50 px-2.5! bg-gray-800 py-1! text-white"
            type="text"
            name="search"
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Pokemon by Name"
          />
        </div>

        {/* dropdown search  */}
        {/* StylishDropdown Implementation */}
        <StylishDropdown
          options={pokemonTypes}
          defaultValue={{ value: " ", label: "Select Types" }}
          onChange={handleChange}
          placeholder="Select Types"
        />
      </div>
    </div>
  );
};

export default NavBar;
