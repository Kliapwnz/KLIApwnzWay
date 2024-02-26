import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/MyMessages/Dialogs";
import {RootStateType, updatePostText} from "./redux/state";

type AppType = {
   state: RootStateType
   addPost: (post: string) => void
   updatePostText: (newText: string) => void
   text:string
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
                                           addPost={props.addPost}
                                           updatePostText={props.updatePostText}
                                           text={props.text}
                         />}/>
                  <Route path="/dialogs/*"
                         element={<Dialogs dialogs={props.state.dialogsPage}
                         />}/>
               </Routes>
            </div>

         </div>
      </BrowserRouter>
   );
}

export default App;
