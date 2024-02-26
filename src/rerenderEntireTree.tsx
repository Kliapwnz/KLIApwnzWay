import {addPost, RootStateType} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

export let rerenderEntireTree = (state: RootStateType) => {
   ReactDOM.render(
      <App state={state} addPost={addPost} newPostText={state.profilePage.newPostText}/>,
      document.getElementById('root')
   );
}