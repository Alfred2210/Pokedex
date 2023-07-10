import React from "react";
import { Link, useParams } from "react-router-dom";
import Data from "../data/pokedex.json";
import "../style/css/App.css";

const PokemonDetails = () => {
    console.table(Data);
    const { id } = useParams();
    const pokemon = Data.find((pokemon) => pokemon.id.toString() === id);

    if (!pokemon) {
        return <div>Pokemon introuvable</div>;
    }

    const attributes = [
        { label: "Attaque", value: pokemon.base.Attack },
        { label: "Défense", value: pokemon.base.Defense },
        { label: "Attaque Spéciale", value: pokemon.base.SpAttack },
        { label: "Défense Spéciale", value: pokemon.base.SpDefense },
        { label: "Vitesse", value: pokemon.base.Speed },
    ];

    return (
        <div className="pokemon-card">
            <img src={pokemon.image.hires} alt={pokemon.name.french} />
            <div className="pokemon-details">
                <h1>PV: {pokemon.base.HP}</h1>
                {attributes.map((attribute) => (
                    <div className="pokemon-attribute" key={attribute.label}>
                        <p>{attribute.label}:</p>
                        <div className="progress-bar">
                            <div
                                className="progress"
                                style={{
                                    width: `${attribute.value}%`,
                                }}

                            ></div>

                        </div>
                        <span>{attribute.value}</span>

                    </div>

                ))}
            </div>
            <Link to="/">Retour</Link>
        </div>
    );
};

export default PokemonDetails;
