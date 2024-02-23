import React from 'react';
import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";

export const NavBar = () => {
   return (
      <nav className={s.nav}>
         <div className={s.item}>
            <NavLink to="/profile"
                     className={e => e.isActive ? s.active : s.item}>Profile
            </NavLink>
         </div>
         <div className={s.item}>
            <NavLink to="/dialogs"
                     className={e => e.isActive ? s.active : s.item}>Messages
            </NavLink>
         </div>
         <div className={s.item}>
            <NavLink to="/news"
                     className={e => e.isActive ? s.active : s.item}>News
            </NavLink>
         </div>
         <div className={s.item}>
            <NavLink to="/music"
                     className={e => e.isActive ? s.active : s.item}>Music
            </NavLink>
         </div>
         <div className={s.item}>
            <NavLink to="/settings"
                     className={e => e.isActive ? s.active : s.item}>Setting
            </NavLink>
         </div>
      </nav>
   );
};

