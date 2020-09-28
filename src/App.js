import React from 'react';
import './App.css'
import  LeftSideMenu  from "./Components/LeftSideMenu";
import  RightSideMenu  from "./Components/RightSideMenu";
function App() {
  return (
    <div className="app">
      <LeftSideMenu  />
      <RightSideMenu />
    </div>
  );
}

export default App;
