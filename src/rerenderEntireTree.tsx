import {addPost, RootStateType, updatePostText} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

export let rerenderEntireTree = (state: RootStateType) => {
   ReactDOM.render(
      <App state={state} addPost={addPost} updatePostText={updatePostText}/>,
      document.getElementById('root')
   );
}