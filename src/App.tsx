import React from 'react';
import Pokemonlist from './Screen/Pokemon-list';
// option possible  : import React,{ FunctionComponent } from 'react'; et modifier 'React.FC l5 par FunctionComponent
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import PokemonsDetail from './Screen/Pokemon-detail';
import PageNotFound from './Screen/Page-not-found';
import PokemonEdit from './Screen/Pokemon-edit';



const App: React.FC = () => {
//  const name: String = 'React'; avec un return "hello -name-" écrirait Hello React.
//  version hook => 
// const [name, setName] = useState<String>('React');

    
 return (
  <>
  <Router>
    <div>
      {/* La barre de navigation commune à toutes les pages  */}
      <nav className="nav-wrapper teal">
        <Link to='/' className="brand-logo center"> Pokédex </Link>
      </nav>
      {/* Le système de gestion des routes de notre application */}
      <Switch>
          <Route exact path='/' component={Pokemonlist} />
          <Route exact path='/pokemons' component={Pokemonlist} />
          <Route exact path='/pokemons/edit/:id' component={PokemonEdit} />
          <Route path='/pokemons/:id' component={PokemonsDetail} />
          <Route component={PageNotFound} />
      </Switch>
    </div>
  </Router>

    {/*
    Affichage de la liste des pokémons sans routes 
     <h1 className="center"> Pokédex </h1>
      <Pokemonlist /> */}
  </>
 )
}
  
export default App;
