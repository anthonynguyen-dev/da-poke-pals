import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  ApolloLink,
} from "@apollo/client";
import { Todos } from "./utils/test";
import { PokemonContainer } from "./containers/pokemonContainer";
import { setContext } from "@apollo/client/link/context";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./app/store";
import { Provider } from "react-redux";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Signup from "./pages/signtest";
import Login from "./pages/logintest";
import { Pokedex } from "./containers/pokedex";

function App() {
  // adding url for pokeapi

  const httpLink1 = createHttpLink({
    uri: "http://localhost:3001/graphql",
  });

  const httpLink2 = createHttpLink({
    uri: "https://graphql-pokeapi.vercel.app/api/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("id_token");
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  // const client = new ApolloClient({
  //   uri: "https://graphql-pokeapi.vercel.app/api/graphql",
  //   cache: new InMemoryCache(),
  // });

  const client = new ApolloClient({
    link: ApolloLink.split(
      (operation) => operation.getContext().clientName === "pokemonApi",
      httpLink2,
      authLink.concat(httpLink1)
    ),
    cache: new InMemoryCache(),
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/pokedex",
      element: <Pokedex />,
    },
  ]);

  return (
    <ApolloProvider client={client}>
      {/* {// <Provider store={store} >} */}
      <Navbar />

      <RouterProvider router={router} />
      {/* {</Provider>} */}
    </ApolloProvider>
  );
}

export default App;
