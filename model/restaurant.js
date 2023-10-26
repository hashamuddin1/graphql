const mongoose=require("mongoose");

const RestaurantSchema = mongoose.Schema(
  {
    restaurantName: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const restaurantModel = mongoose.model("restaurant", RestaurantSchema);
module.exports= restaurantModel;
