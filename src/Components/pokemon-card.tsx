import React, {FunctionComponent} from 'react'
import Pokemon from '../models/pokemon'

import './pokemon-card.css'

type Props = {
  pokemons : Pokemon,
  borderColor ?: string
}

const PokemonCard : FunctionComponent<Props> = ({pokemons, borderColor =" #009688"}) => {
  return (
    <div>
      <div key={pokemons.id} className="col s6 m4">
              <div className="card horizontal" style={{borderColor : borderColor}}>
                <div className="card-image">
                  <img src={pokemons.picture} alt={pokemons.name} />
                </div>
                <div className="card-stacked">
                <div className="card-content">
                  <h5>{pokemons.name}</h5>
                  <p>{pokemons.hp}</p>
                  <p>{pokemons.cp}</p>
                  <p>{pokemons.types.map((types =>types+" "))}</p>
                </div>
                </div>
              </div>
              </div>
    </div>
  )
}

export default PokemonCard