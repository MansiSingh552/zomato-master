import React from "react";
import { FaPizzaSlice } from "react-icons/fa";

const MobileNav = () => {
    return (
        <>
        <div className="flex items-center justify-between lg:hidden"> <div className="w-28">
             <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="" className="w-full h-full">
             </img>
         </div>
         <div className="flex gap-2 items-center">
             <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">Use App</button>
             <span className="border text-zomato-400 p-2 rounded-full border-blue-400">
             < FaPizzaSlice />
         </span>
         </div>
         </div>
        
    </>
    )
    
}

const DesktopNav = () => {
    return (
        <>
         <div className=" flex w-full mx-auto px-20 my-8 items-center ">

             <div className="flex gap-4 w-3/4 items-center">
                <div className="w-32">
                    <img 
                    className="w-full "
                    src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"/>
                </div>
                <div className="w-3/4 h-12 border border-gray-200 rounded-md shadow-lg"></div>

             </div>
             
            <div className="flex flex-row-reverse text-xl w-1/4 gap-8">
                <div className="text-md text-gray-400 cursor-pointer"><a>Sign in</a></div>
                <div className="text-md text-gray-400 cursor-pointer"><a>Log in</a></div>
            </div>
            
         </div>
        </>
    )
}

const Navbar = () => {
    return <>
     <nav >
         <div className=" py-4 px-4 shadow-md lg:hidden "><MobileNav /></div>
         <div className="hidden lg:flex"><DesktopNav /></div>
         <div></div>
         
     </nav>
    
    </>
};

export default Navbar;