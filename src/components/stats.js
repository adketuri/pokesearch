import React from "react"

export default ({pokemon}) => {
    if (!pokemon){
        return (<></>);
    }

    return(
    <div>
        <img src={`${pokemon.sprites.front_default}`} alt="pokemon sprite" />
        <br/>
        <b>Name:</b> {pokemon.name}
        <br/>
        <b>Height:</b> {pokemon.height / 10}m
        <br/>
        <b>Weight:</b> {pokemon.weight / 10}kg
        <br/>
        <b>Type(s):</b> {pokemon.types.map((type) => <span>{type.type.name}, </span>)}
    </div>
    );
}