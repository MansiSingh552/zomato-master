import mongoose from "mongoose";


const FoodSchema = new mongoose.Schema({
    name: {type:String, requires: true},
    description: {type: String, required: true},
    isVeg: {type:Boolean, required:true},
    isContainsEgg: {type:Boolean, required:true},
    category: {type:String,required:true},
    photos: {
        type: mongoose.Types.ObjectId,
        ref: "Images"
    },
    price: {type: Number, default: 150,required: true},
    addOns: [
        {
        type: mongoose.Types.ObjectId,
        ref: "Foods"
        }
    ],

    restaurant: {
        type: mongoose.Types.ObjectId,
        ref: "Restaurant",
        required: true
    }

},{
    timestamps: true
}
);

export const FoodModel = mongoose.model("Food",FoodSchema);
