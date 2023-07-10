import PokemonList from "../component/PokemonList";
import Data from "../data/pokedex.json";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Home = () => {



    const Pokemonlist = Data.map((pokemon, index) => {


        return (
            <PokemonList
                key={pokemon.id}
                id={pokemon.id}
                nom={pokemon.name.french}
                type={pokemon.type.join(', ')}
                image={pokemon.image.hires}
            />
        );
    });


    return (
        <>
            <h1 style={{ width: "80%", margin: "auto" }}>Pokemon</h1>
            {Pokemonlist}
        </>
    );
};

export default Home;