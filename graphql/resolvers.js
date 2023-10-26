const restaurantModel = require("../model/restaurant");

module.exports = {
  Query: {
    // it takes 4 parameters
    // first is parent so here we donot have parent
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

      await createdRestaurant.save();

      return createdRestaurant;
    },

    async deleteRestaurant(_, { ID }) {
      const wasDeleted = (await restaurantModel.deleteOne({ _id: ID }))
        .deletedCount;
      return wasDeleted; //1 if something deleted and 0 if nothing deleted
    },

    async editRestaurant(
      _,
      { ID, RestaurantInput: { restaurantName, country, city, location } }
    ) {
      const wasEdited = (
        await restaurantModel.updateOne(
          { _id: ID },
          {
            restaurantName: restaurantName,
            country: country,
            city: city,
            location: location,
          }
        )
      ).modifiedCount;
      return wasEdited;
    },
  },
};
