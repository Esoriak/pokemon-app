import React, { FunctionComponent, useState, useEffect } from 'react'
import Pokémons from './models/mock-pokemons'
import Pokemon from './models/pokemon'

const Pokemonlist: FunctionComponent = () => {
  //  initialiser un state contenant un tableau de vide pouvant recueillir des pokémons grâce au typage des données
  const [Pokemons, setPokemons] = useState<Pokemon[]>([])
  const [Nbofpokemons] = useState<Number>(Pokémons.length)

  //  utiliser un hook d'effet pour charger le state d'un tableau de pokémons et ne le faire qu'une fois - cycle de vie
  useEffect(() => {
    setPokemons(Pokémons);
  }, [])

  return (
    <>
      <p className="center"> Il y a exactement {Nbofpokemons} pokémons dans le pokédex.</p>
      <div className="container">
        <div className="row">
          {Pokémons.map((pokemons =>
            <div key={pokemons.id} className="col s6 m4">
              <div className="card horizontal">
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
          ))}
          </div>
        </div>
    </>
  
  )}

export default Pokemonlist