import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
// const {createStore} = require("redux");


let reducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage:  dialogsReducer,
   sidebar: sidebarReducer,
   usersPage: usersReducer
});

export type AppStateType = ReturnType<typeof reducers>


let store = createStore(reducers);

// @ts-ignore
window.store = store;

export default store