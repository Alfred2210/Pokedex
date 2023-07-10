import React from "react";
import { useParams } from "react-router-dom";
import PokemonDetails from "../component/PokemonDetails";

const PokemonDetailsPages = () => {
    const { id } = useParams();

    return (
        <>
            <h1 style={{ width: "80%", margin: "auto" }}>Pokemon</h1>
            <PokemonDetails />
        </>
    );
};

export default PokemonDetailsPages;
