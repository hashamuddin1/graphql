const restaurantModel = require("../model/restaurant");

module.exports = {
  Query: {
    // it takes 4 parameters
    // first is parent so here we dono have parent
    async restaurant(_, { ID }) {
      const data = await restaurantModel.findOne({ _id: ID });
      return data;
    },
    async getRestaurant(_, { amount }) {
      const data = await restaurantModel.find().limit(amount);
      return data;
    },
  },
  Mutation: {
    async createRestaurant(
      _,
      { RestaurantInput: { restaurantName, country, city, location } }
    ) {
      const createdRestaurant = new restaurantModel({
        restaurantName: restaurantName,
        country: country,
        city: city,
        location: location,
      });

      await createdRestaurant.save()

      return createdRestaurant;
    },
  },
};
