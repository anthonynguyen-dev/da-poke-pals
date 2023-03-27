import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { GET_POKEMONS } from './queries'

const gqlVariables = {
    limit: 2,
    offset: 1,
  };
  
// checking server response 
// code here is from app documentation using apollo server section
export const Todos = () => {
    const { loading, error, data } = useQuery(GET_POKEMONS, {
      variables: gqlVariables,
    });
  
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
  
    console.log('Response from server', data);
    return 'Success!';
  };