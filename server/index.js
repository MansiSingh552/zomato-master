require("dotenv").config();

import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";


const zomato = express();

//config
import googleAuthConfig from "./config/google.config"

//Database connection
import ConnectDB from "./database/connection";

//API
import Auth from "./API/Auth"
import Restaurants from "./API/Restaurant";
import Food from "./API/Food";
import Menu from "./API/Menu";
import routeConfig from "./config/route.config";



zomato.use(helmet());
zomato.use(cors());
zomato.use(express.json());
zomato.use(express.urlencoded({extended:false}));
zomato.use(passport.initialize());
zomato.use(passport.session());


//passport configuration
googleAuthConfig(passport);
routeConfig(passport)

//localhost:4000/auth/signup

zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurants)
zomato.use("/food", Food);
//zomato.use("/menu", Menu);

zomato.get("/", (req,res) => res.json({message: "Setup success yay!"}));

zomato.listen(4000, ()=> 
ConnectDB().then(()=>console.log("Server is up and running"))
.catch(()=> console.log("DB connection failed")));

//UserModel.ourStatic()
//checkUserByEmail.ourMethods()