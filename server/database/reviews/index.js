import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    food: {type: mongoose.Types.ObjectId},
    restaurant: {type: mongoose.Types.ObjectId,ref: "Restaurants"},
    user: {type: mongoose.Types.ObjectId, ref: "Users"},
    rating: {type: Number, required:true},
    reviewText: {type: String,required:true},
    phots: [{
        type: mongoose.Types.ObjectId,
        ref: "Images"
    }]
},{
    timestamps: true
}
);

export const ReviewModel = mongoose.model("Review",ReviewSchema);
