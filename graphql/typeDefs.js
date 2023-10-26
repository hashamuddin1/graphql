const { gql } = require("apollo-server");

// gql stands for Graph Query Language
// create schema
// ! mark means compulsory
module.exports = gql`
  type Restaurant {
    restaurantName: String
    country: String
    city: String
    location: String
  }

  input RestaurantInput {
    restaurantName: String
    country: String
    city: String
    location: String
  }

  type Query {
    restaurant(ID: ID!): Restaurant!
    getRestaurant(amount: Int): [Restaurant]
  }

  type Mutation {
    createRestaurant(RestaurantInput: RestaurantInput): Restaurant!
    deleteRestaurant(ID: ID!): Boolean
    editRestaurant(ID: ID!, RestaurantInput: RestaurantInput): Boolean
  }
`;
