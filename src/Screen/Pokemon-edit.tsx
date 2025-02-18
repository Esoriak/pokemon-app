import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import PokemonForm from '../Components/pokemon-form';
import Pokemon from '../models/pokemon';
// import POKEMONS from '../models/mock-pokemons';
import PokemonService from '../services/pokemon-service'
 
type Params = { id: string };
  
const PokemonEdit: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {
    
  const [pokemon, setPokemon] = useState<Pokemon|null>(null);
  
  // Hook de changement d'état avant l'utilisation de json-server
  // useEffect(() => {
  //   POKEMONS.forEach(pokemon => {
  //     if (match.params.id === pokemon.id.toString()) {
  //       setPokemon(pokemon);
  //     }
  //   })
  // }, [match.params.id]);


  useEffect(() => {
    PokemonService.getPokemon(+match.params.id).then(pokemon => setPokemon(pokemon))
  }, [match.params.id]);
    
  return (
    <div>
      { pokemon ? (
        <div className="row">
            <h2 className="header center">Éditer { pokemon.name }</h2>
            <PokemonForm pokemon={pokemon}></PokemonForm>
        </div>
      ) : (
        <h4 className="center">Aucun pokémon à afficher !</h4>
      )}
    </div>
  );
}
  
export default PokemonEdit;