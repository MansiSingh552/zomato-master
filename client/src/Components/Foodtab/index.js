import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BsHandbag} from "react-icons/bs";
import { GiMorgueFeet,GiBeerStein} from "react-icons/gi";

const MobileTab = () => {

        const [allTypes, setAllTypes] = useState([
            {
                id:"delivery",
                icon: <BsHandbag />,
                name: "Delivery",
                isActive: false
            },
            {
                id:"night",
                icon: <GiBeerStein />,
                name: "Night Life",
                isActive: false
            },
            {
                id:"dining",
                icon: <GiMorgueFeet />,
                name: "Dining Out",
                isActive: false
            }
        ]);


        const { type } = useParams();
      
   
  return (
    <>
      <div className=" flex justify-between bottom-0 z-10 fixed w-full bg-white mx-auto px-2 text-2xl md:justify-evenly"> 
          {
            allTypes.map((items) =>(
              <Link to={`/${items.id}`}>
                <div className={type === items.id ? "flex flex-col items-center text-zomato-400 border-t-2 border-zomato-400" : "flex flex-col items-center" }>
                  {items.icon}
                  <h5 className="text-sm">{items.name}</h5>
                </div>
              </Link>
            )
            )
          }
      </div>
    </>
  );
};

const DesktopTab = () => {
  
   const allTypes = [
    {
      id:"delivery",
      icon: <BsHandbag />,
      name: "Delivery",
      src: "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp"
  },
  {
      id:"night",
      icon: <GiBeerStein />,
      name: "Night Life",
      src: "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png"
  },
  {
      id:"dining",
      icon: <GiMorgueFeet />,
      name: "Dining Out",
      src: "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png"
  }
   ]
  
   const { type } = useParams();

   return (
    <>
      <div className=" flex gap-4 z-10 w-full bg-white mx-auto px-48 text-5xl text-gray-400 border-b ">
        {
          allTypes.map((items) => (
            <Link to={`/${items.id}`}>
            <div className={type === items.id ? "flex  gap-4 items-center text-zomato-400 border-b-2 border-zomato-400 py-2 px-2" : "flex gap-4 items-center py-2 px-2" }>
              <div className="bg-gray-100 p-4 rounded-full text-2xl">
              {items.icon}
                </div>
              <h5 className="text-xl">{items.name}</h5>
            </div>
          </Link>
          ))
        }
      </div>  
      
    </>
   )
 
}


const FoodTab = () => {
    return (
        <>
            <div className="lg:hidden">
                <MobileTab />
            </div>
            <div className="hidden lg:block">
                <DesktopTab />
            </div>
        </>
    )
}

export default FoodTab;

//master_url:type

//delivery , dining , night life -> type