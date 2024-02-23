import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
   return (
      <div className={s.dialogs}>
         <div className={s.dialogItems}>
            <div className={s.dialog}>
               <NavLink to="/dialogs/kun" className={e => e.isActive ? s.active : s.dialog}>Sergio Aguero</NavLink>
            </div>
            <div className={s.dialog}>
               <NavLink to="/dialogs/Erl9" className={e => e.isActive ? s.active : s.dialog}> Erling Haaland</NavLink>
            </div>
            <div className={s.dialog}>
               <NavLink to="/dialogs/davidSilva" className={e => e.isActive ? s.active : s.dialog}>David Silva</NavLink>
            </div>
            <div className={s.dialog}>
               <NavLink to="/dialogs/berny" className={e => e.isActive ? s.active : s.dialog}>Bernardo Silva</NavLink>
            </div>
            <div className={s.dialog}>
               <NavLink to="/dialogs/walkerK" className={e => e.isActive ? s.active : s.dialog}>Kyle Walker</NavLink>
            </div>
            <div className={s.dialog}>
               <NavLink to="/dialogs/47Foden" className={e => e.isActive ? s.active : s.dialog}>Phil Foden</NavLink>
            </div>
         </div>
         <div className={s.messages}>
            <div className={s.message}>Hi</div>
            <div className={s.message}>How are you?</div>
            <div className={s.message}>Have a good day!</div>
         </div>
      </div>
   );
};

