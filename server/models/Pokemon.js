const { Schema } = require("mongoose");

const pokemonSchema = new Schema({
  name: {
    type: String,
  },

  types: [{ type: String }],
  description: {
    type: String,
  },
  pokemonId: {
    type: String,
  },
  image: {
    type: String,
  },
  moves: [
    {
      type: String,
    },
  ],
  abilites: [
    {
      type: String,
    },
  ],
  evolutions: [
    {
      type: String,
    },
  ],
});

module.exports = pokemonSchema;
