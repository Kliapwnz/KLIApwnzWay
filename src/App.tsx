import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/MyMessages/Dialogs";
import {ActionTypes, RootStateType} from "./redux/state";


type AppType = {
   state: RootStateType
   dispatch: (action: ActionTypes) => void
}

function App(props: AppType) {
   return (
      <BrowserRouter>
         <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className="app-wrapper-content">
               <Routes>
                  <Route path="/profile"
                         element={<Profile profile={props.state.profilePage}
                                           dispatch={props.dispatch}

                         />}/>
                  <Route path="/dialogs/*"
                         element={<Dialogs dialogs={props.state.dialogsPage}
                                           dispatch={props.dispatch}
                         />}/>
               </Routes>
            </div>

         </div>
      </BrowserRouter>
   );
}

export default App;
