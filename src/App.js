import './App.css';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import { Todos } from './Utils/test'

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
     </main>

   </ApolloProvider>
  );
}

export default App;
