import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {store} from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = () => {
   ReactDOM.render(
      <BrowserRouter>
      <App state={store.getState()}
           dispatch={store.dispatch.bind(store)}
      />
      </BrowserRouter>,
      document.getElementById('root')
   );
}
rerenderEntireTree()
store.subscribe(rerenderEntireTree)