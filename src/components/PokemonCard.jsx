import React from "react";
import DemoImage from "../../public/yuvi.jpeg";
import "../styles/TextEffect.scss";

const PokemonCard = ({ pokemon }) => {
  // console.log(pokemon);
  return (
    <div className="w-60 h-40 m-2! custom-shadow relative hover:scale-110 transition-all ease-linear overflow-hidden">
      {/* image of the pokemon  */}

      <div className='card-image' >
        <figure>
          <img  src={pokemon.sprites.other.showdown.front_shiny} alt={`pokemon image of the ${pokemon.name}`} />
        </figure>
      </div>

      {/* id of pokemon  */}
      <div className="absolute right-0 top-0 text-white bg-red-500 custom-border p-1!">
        {pokemon.id}
      </div>

      {/* name  */}
      <div className="pokemon-name yuvi-fancy--text absolute left-3 bottom-6 ">
        {pokemon.name}
      </div>
      {/* types  */}
      <div className="absolute bottom-0 left-0 bg-red-600 text-sm  yuvi-border text-white font-explora">
        {pokemon.types
          .map((currType) => {
            return currType.type.name;
          })
          .join(", ")}
      </div>
    </div>
  );
};

export default PokemonCard;
