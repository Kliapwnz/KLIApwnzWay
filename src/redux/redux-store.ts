import {combineReducers, legacy_createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

let reducers = combineReducers({
   profileReducer,
   dialogsReducer,
   sidebarReducer
})

export let store = legacy_createStore(reducers)
export type AppRootStateType = ReturnType<typeof reducers>