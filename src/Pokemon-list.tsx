import React, {FunctionComponent, useState} from 'react'
import Pokémons from './models/mock-pokemons'

const Pokemonlist: FunctionComponent = () => {
  //  initialiser un state contenant un tableau de pokémon
  const [Pokemonlist] = useState<Object>(Pokémons)
  const [Nbofpokemons] = useState<Number>(Pokémons.length)

  return (
    <>
    <h3> Il y a exactement {Nbofpokemons} pokémons présents dans l'application.</h3>

    </>
  )

}

export default Pokemonlist