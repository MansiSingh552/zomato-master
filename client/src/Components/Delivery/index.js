import React from "react";
import HorizontalScrollComponent from "../Horizontal.scroll/horizontal.scroll";

//Components

import DeliveryCarousal from "./delivery.carousal";

const Delivery = () => {
    return (
        <>
        <DeliveryCarousal />
        <div className="mt-2 mb-20 mx-auto w-full"><img src="https://b.zmtcdn.com/web/assets/e80201cf2e86a49ce4722e9b5ddfab551620045350.png " className="w-full"></img></div>
        <HorizontalScrollComponent />
        </>
    )
};

export default Delivery;