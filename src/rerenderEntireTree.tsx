import {addMessage, addPost, RootStateType, updateMessageText, updatePostText} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

export let rerenderEntireTree = (state: RootStateType) => {
   ReactDOM.render(
      <App state={state}
           addPost={addPost}
           updatePostText={updatePostText}
           text={state.profilePage.newPostText}
           addMessage={addMessage}
           messageText={state.dialogsPage.newMessageText}
           updateMessageText={updateMessageText}
      />,
      document.getElementById('root')
   );
}