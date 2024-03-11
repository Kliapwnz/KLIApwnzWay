import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Route, Routes} from "react-router-dom";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/MyMessages/Dialogs";
import {ActionTypes} from "./redux/store";
import {AppRootStateType} from "./redux/redux-store";


type AppType = {
   state: AppRootStateType
   dispatch: (action: ActionTypes) => void
}

function App(props: AppType) {
   return (
      <div className="app-wrapper">
         <Header/>
         <NavBar/>
         <div className="app-wrapper-content">
            <Routes>
               <Route path="/profile"
                      element={<Profile profile={props.state.profileReducer}
                                        dispatch={props.dispatch}

                      />}/>
               <Route path="/dialogs/*"
                      element={<Dialogs dialogs={props.state.dialogsReducer}
                                        dispatch={props.dispatch}
                      />}/>
            </Routes>
         </div>
      </div>
   );
}

export default App;
