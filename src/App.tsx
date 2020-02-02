import React, {useState }from 'react';
import Pokemonlist from './Pokemon-list';
// option possible  : import React,{ FunctionComponent } from 'react'; et modifier 'React.FC l5 par FunctionComponent



const App: React.FC = () => {
//  const name: String = 'React';
//  version hook => 
    const [name, setName] = useState<String>('React');

    
 return (
   <>
      <Pokemonlist />
  </>
 )
}
  
export default App;
