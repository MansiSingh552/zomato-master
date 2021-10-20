import express from "express";

import {RestaurantModel} from "../../database/AllModels";

const Router = express.Router();

/*
Route            /
Des              Get all Restaurants details
Params           None
Access           Public
Method           GET
*/

Router.get("/", async(req,res) => {
  try{
    const {city} = req.query;
    const restaurants = await RestaurantModel.find({city});
    return res.json({restaurants});
  } catch(error) {
    return res.status(500).json({error: error.message});
  }
});


/*
Route            /
Des              Get particular Restaurants details on id
Params           id
Access           Public
Method           GET
*/

Router.get("/:id",async(req,res) => {
    try{
        const {_id} = req.params;
        const restaurant = await RestaurantModel.findOne(_id);

        if(!restaurant) {
            return res.status(404).json({error: "Restaurant not found"});
        }

        return res.json({restaurant})
    } catch(error) {
        return res.status(500).json({error: error.message})
    }
})

/*
Route            /search
Des              Get Restaurant details search
Params           none
Access           Public
Method           GET
*/

//regex-searches for a required substring,we used $option: "i" so that it says that it does not depend on case it is case insensitive(means the strings we have searched for)

Router.get("/search",async(req,res) => {
  try {
    const {searchString} = req.body;

    const restaurants = await RestaurantModel.find({
      name: {$regex: searchString, $options: "i"}
    })

    return res.json({restaurants});
  } catch (error) {
    return res.status(500).json({error: error.message})
  } 
}
)
export default Router;
