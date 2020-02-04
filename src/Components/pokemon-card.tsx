import React, {FunctionComponent, useState} from 'react'
import Pokemon from '../models/pokemon'

import './pokemon-card.css'

type Props = {
  pokemons : Pokemon,
  borderColor ?: string
}

const PokemonCard : FunctionComponent<Props> = ({pokemons, borderColor =" #009688"}) => {

  const [color, setColor] = useState<string>()

  const showBorder = () => {
    setColor(borderColor) // on colore la bordure en vert au hover
  }

  const hideBorder = () => {
    setColor('#f5f5f5') // on remet la bordure en gris
  }

  const formatDate = (date: Date) : string => {
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
  }

  return (
      <div key={pokemons.id} className="col s6 m4"  onMouseEnter={showBorder} onMouseLeave={hideBorder}>
              <div className="card horizontal" style={{ borderColor : color }}>
                <div className="card-image">
                  <img src={pokemons.picture} alt={pokemons.name} />
                </div>
                <div className="card-stacked">
                <div className="card-content">
                  <h5>{pokemons.name}</h5>
                  <p><small>{formatDate(pokemons.created)}</small></p>
                  <p>{pokemons.hp}</p>
                  <p>{pokemons.cp}</p>
                  <p>{pokemons.types.map((types =>types+" "))}</p>
                </div>
                </div>
              </div>
              </div>
  )
}

export default PokemonCard