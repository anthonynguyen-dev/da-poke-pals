const { Schema } = require("mongoose");

const pokemonSchema = new Schema({
  name: {
    type: String,
  },

  type: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  pokemonId: {
    type: String,
    required: true,
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
