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
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';


function App() {
// adding url for pokeapi
  const client = new ApolloClient({
    uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
    cache: new InMemoryCache(),

  })

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    
  ]);

  return (
   <ApolloProvider client={client}>
    {/* <Provider store={store} > */}
      <Navbar />
     <RouterProvider router={router} />
    {/* </Provider> */}
    <PokemonContainer/>
   </ApolloProvider>
  );
}

export default App;
