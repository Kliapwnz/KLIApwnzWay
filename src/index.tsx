import React from 'react';
import './index.css';
import {state} from "./redux/state";
import {rerenderEntireTree} from "./rerenderEntireTree";

rerenderEntireTree(state)