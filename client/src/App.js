import React from "react";

import HomeLayoutHOC from "./HOC/Home.hoc";

//Component
import Temp from "./Components/temp";
import Master from "./Components/master"


function App() {
  return (
    <>
      <HomeLayoutHOC path="/" exact component={Temp}></HomeLayoutHOC>
      <HomeLayoutHOC path="/:type" exact component={Master}></HomeLayoutHOC>
      
    </>
  );
}

export default App;
