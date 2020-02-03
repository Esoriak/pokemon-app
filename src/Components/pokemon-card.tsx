import React, {FunctionComponent} from 'react'
import Pokemon from '../models/pokemon'

type Props = {
  pokemon : Pokemon
}

const PokemonCard : FunctionComponent<Props> = ({pokemon}) => {
  return (
    <div>
      Ce composnt est chargé d'afficher un pokémon : {pokemon.name} .
    </div>
  )
}

export default PokemonCard