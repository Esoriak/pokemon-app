import React from 'react';
import Pokemonlist from './Screen/Pokemon-list';
// option possible  : import React,{ FunctionComponent } from 'react'; et modifier 'React.FC l5 par FunctionComponent



const App: React.FC = () => {
//  const name: String = 'React';
//  version hook => 
    // const [name, setName] = useState<String>('React');

    
 return (
  <>
    <h1 className="center"> Pokédex </h1>
      <Pokemonlist />
  </>
 )
}
  
export default App;
