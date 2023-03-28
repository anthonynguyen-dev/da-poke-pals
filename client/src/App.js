import './App.css';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import { Todos } from './utils/test'
import { PokemonContainer } from './containers/pokemonContainer';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import store from './app/store'
import { Provider } from 'react-redux'


function App() {
// adding url for pokeapi
  const client = new ApolloClient({
    uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
    cache: new InMemoryCache(),

  })

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Todos />,
    },
    
  ]);

  return (
   <ApolloProvider client={client}>
    <Provider store={store} >
     <RouterProvider router={router} />
    </Provider>

   </ApolloProvider>
  );
}

export default App;
