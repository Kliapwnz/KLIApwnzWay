import React from 'react';
import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";

export const NavBar = () => {
   return (
      <nav className={s.nav}>
         <div><NavLink to="/profile">Profile</NavLink></div>
         <div><NavLink to="/dialogs">Messages</NavLink></div>
         <div><NavLink to="/news">News</NavLink></div>
         <div><NavLink to="/music">Music</NavLink></div>
         <div><NavLink to="/settings">Setting</NavLink></div>
      </nav>
   );
};

