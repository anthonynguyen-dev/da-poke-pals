import './App.css';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import { Todos } from './utils/test'
import { PokemonContainer } from './containers/pokemonContainer';


function App() {
// adding url for pokeapi
  const client = new ApolloClient({
    uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
    cache: new InMemoryCache(),

  })

  return (
   <ApolloProvider client={client}>
     <main>
       <Todos/>
       {/* <PokemonContainer> */}
     </main>

   </ApolloProvider>
  );
}

export default App;
