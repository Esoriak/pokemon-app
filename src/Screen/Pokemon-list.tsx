import React, { FunctionComponent, useState, useEffect } from 'react'
import Pokémons from '../models/mock-pokemons'
import Pokemon from '../models/pokemon'
import PokemonCard from '../Components/pokemon-card'
import PokemonService from '../services/pokemon-service'

const Pokemonlist: FunctionComponent = () => {
  //  initialiser un state contenant un tableau vide pouvant recueillir des pokémons grâce au typage des données
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [Nbofpokemons] = useState<Number>(Pokémons.length)

  //  utiliser un hook d'effet pour charger le state d'un tableau de pokémons et ne le faire qu'une fois - cycle de vie
  // useEffect(() => {
  //   setPokemons(Pokémons);
  // }, [])


  // Hook d'effet avant la factorisation du service
  // useEffect( ()=> {
  //   fetch('http://localhost:3001/pokemons')
  //   .then(response => response.json())
  //   .then((pokemons) => {
  //     setPokemons(pokemons)
  //   });
  // }, [])


   useEffect( ()=> {
    PokemonService.getPokemons().then(pokemons => setPokemons(pokemons))
   }, [])

  return (
    <>
      <p className="center"> Il y a exactement {Nbofpokemons} pokémons dans le pokédex.</p>
      <div className="container">
        <div className="row">
          {Pokémons.map(pokemon =>(
            <PokemonCard key={pokemon.id} pokemons={pokemon} />
          ))}
          </div>
        </div>
    </>
  
  )}

export default Pokemonlist