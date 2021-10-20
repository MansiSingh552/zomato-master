/*import express from "express";
import AWS from "aws-sdk";
import multer from "multer";

//Database Model

import {ImageModel} from "../../database/allModels";

const Router = express.Router();

//Multer config
const storage = multer.memoryStorage();
const upload = multer({storage});


//AWS s# bucket config
const s3Bucket = new AWS.S3({
    accessKeyId: process.env.AWS_S3_ACCESS_KEY,
    secretAccessKey: process.env.AWS_S3_SECRET_KEY,
    region: "ap-south-1"
})

/*
Route            /
Des              Uploading given image to s3 bucket, and then saving
Params           None
Access           Public
Method           GET
*/
/*

Router.post("/",upload.single("file"),async(req,res)=> {
    try {
        const file = req.file;
//s3 bucket options
const bucketOptions = {
    Bucket: "shapeaijulybatch321",
    Key: file.originalname,
    Body: file.buffer,
    ContentType: file.mimetype,
    ACL: "public-read"
};

    } catch (error) {
        return res.status(500).json({error: error.message})
    }

})
*/