import React from "react";
import HorizontalScroll from "react-scroll-horizontal";

const HorizontalScrollComponent = () => {

    const child   = { width: `30em`, height: `100%`}
    const parent  = { width: `60em`, height: `100%`}

    return (
        <div>
            <h5 className="">Top brands for you</h5>
            
            
    
      <div className="w-96 h-full bg-red">
        <HorizontalScroll>
            <div className="w-28 h-full bg-blue" />
            <div className="w-28 h-full bg-blue " />
            <div className="w-28 h-full bg-blue " />
        </HorizontalScroll>
      </div>
    
            
        </div>
    )
};

export default HorizontalScrollComponent;