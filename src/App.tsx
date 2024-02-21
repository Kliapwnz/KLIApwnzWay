import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {MyMessages} from "./components/MyMessages/MyMessages";


function App() {
   return (
      <div className="app-wrapper">
         <Header/>
         <NavBar/>
         <div className="app-wrapper-content">
         {/*<Profile/>*/}
         <MyMessages/>
         </div>
      </div>
   );
}

export default App;
