import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {store} from "./redux/state";

let rerenderEntireTree = () => {
   ReactDOM.render(
      <App state={store.getState()}
           addPost={store.addPost.bind(store)}
           updatePostText={store.updatePostText.bind(store)}
           addMessage={store.addMessage.bind(store)}
           updateMessageText={store.updateMessageText.bind(store)}
      />,
      document.getElementById('root')
   );
}
rerenderEntireTree()
store.subscribe(rerenderEntireTree)