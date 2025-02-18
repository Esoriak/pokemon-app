import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import Pokemon from '../models/pokemon';
// import POKEMONS from '../models/mock-pokemons';
import formatDate from '../Helpers/format-date';
import formatType from '../Helpers/format-type';
import PokemonService from '../services/pokemon-service'


type Params = { id: string };
  
const PokemonsDetail: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {
    
  const [pokemon, setPokemon] = useState<Pokemon|null>(null);
  
  // Hook initial avant l'utilisation de json-server pour simuler l'API REST
  // useEffect(() => {
  //   POKEMONS.forEach(pokemon => {
  //     if (match.params.id === pokemon.id.toString()) {
  //       setPokemon(pokemon);
  //     }
  //   })
  // }, [match.params.id]);

  // Hook avant l'utilisation du service Get
  // useEffect(() => {
  //   fetch(`http://localhost:3001/pokemons/${match.params.id}`)
  //   .then(response => response.json())
  //   .then((pokemon) => {
  //     if (pokemon.id) setPokemon(pokemon)
  //   });
  // },[match.params.id] )

  useEffect(() => {
    PokemonService.getPokemon(+match.params.id).then(pokemon => setPokemon(pokemon))
  },[match.params.id] )
    
  return (
    <div>
      { pokemon ? (
        <div className="row">
          <div className="col s12 m8 offset-m2"> 
            <h2 className="header center">{ pokemon.name }</h2>
            <div className="card hoverable"> 
              <div className="card-image">
                <img src={pokemon.picture} alt={pokemon.name} style={{width: '250px', margin: '0 auto'}}/>
                <Link to={`/pokemons/edit/${pokemon.id}`} className="btn btn-floating halfway-fab waves-effect waves-light">
                  <i className="material-icons">edit</i>
                </Link>
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <table className="bordered striped">
                    <tbody>
                      <tr> 
                        <td>Nom</td> 
                        <td><strong>{ pokemon.name }</strong></td> 
                      </tr>
                      <tr> 
                        <td>Points de vie</td> 
                        <td><strong>{ pokemon.hp }</strong></td> 
                      </tr> 
                      <tr> 
                        <td>Dégâts</td> 
                        <td><strong>{ pokemon.cp }</strong></td> 
                      </tr> 
                      <tr> 
                        <td>Types</td> 
                        <td>
                          {pokemon.types.map(type => (
                           <span key={type} className={formatType(type)}>{type}</span>
                          ))}</td> 
                      </tr> 
                      <tr> 
                        <td>Date de création</td> 
                        <td>{formatDate(pokemon.created)}</td> 
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="card-action">
                  <Link to="/">Retour</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h4 className="center">Aucun pokémon à afficher !</h4>
      )}
    </div>
  );
}
  
export default PokemonsDetail;
