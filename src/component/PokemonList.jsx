import React from 'react';
import { Link } from 'react-router-dom';

const PokemonList = ({ id, nom, type, image }) => {
    let backgroundColor;
    if (type.includes('Fire')) {
        backgroundColor = '#ffcccb';
    } else if (type.includes('Water')) {
        backgroundColor = '#add8e6';
    } else if (type.includes('Grass')) {
        backgroundColor = '#90ee90';
    } else if (type.includes('Poison')) {
        backgroundColor = 'rgba(136,46,136,0.75)';
    } else if (type.includes('Fairy')) {
        backgroundColor = '#f1a7f1';
    } else if (type.includes('Bug')) {
        backgroundColor = '#be7328';
    } else if (type.includes('Psychic')) {
        backgroundColor = '#53d2ec';
    } else if (type.includes('Electric')) {
        backgroundColor = '#93aba9';
    }
    else if (type.includes('Dragon')) {
        backgroundColor = '#ff6700';
    }
    else if (type.includes('Ground')) {
        backgroundColor = '#f4a460';
    }
    else if (type.includes('Fighting')) {
        backgroundColor = '#4c73da';
    }
    else
    {
        backgroundColor = '#f0f0f0';
    }

    return (
        <div
            style={{
                display: 'inline-block', // Affiche les blocs côte à côte
                borderRadius: '10px',
                padding: '10px',
                backgroundColor: backgroundColor,
                margin: '10px',
            }}
        >
            <img src={image} alt={nom} />
            <p className="text-2xl">{nom}</p>
            <p className="text-xl">{type}</p>
            <Link to={`/details/${id}`}>Details</Link>
        </div>
    );
};

export default PokemonList;
