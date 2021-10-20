import React from "react";

//component
import DeliveryFoodCategory from "./DeliveryFoodCategory";

const DeliveryCarousal = () => {
    return (
        <>
            <h1 className="text-2xl font-semibold my-4">Eat what makes you happy!</h1>
            <div className="flex gap-2 flex-wrap justify-between">
                <DeliveryFoodCategory />
                <DeliveryFoodCategory />
                <DeliveryFoodCategory />
                <DeliveryFoodCategory />
                <DeliveryFoodCategory />
                <DeliveryFoodCategory />
                <DeliveryFoodCategory />
                <DeliveryFoodCategory />
                
            </div>
            
        </>
//Overflow x and overflow y         
    );
};

export default DeliveryCarousal;