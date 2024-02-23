import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
   return (
      <div className={s.dialogs}>
         <div className={s.dialogItems}>
            <div className={s.dialog + " " + s.active}>
               <NavLink to="/dialogs/kun" >Sergio Aguero</NavLink>
            </div>
            <div className={s.dialog}>
               <NavLink to="/dialogs/Erl9" > Erling Haaland</NavLink>
            </div>
            <div className={s.dialog}>
               <NavLink to="/dialogs/davidSilva" >David Silva</NavLink>
            </div>
            <div className={s.dialog}>
               <NavLink to="/dialogs/berny" >Bernardo Silva</NavLink>
            </div>
            <div className={s.dialog}>
               <NavLink to="/dialogs/walkerK" >Kyle Walker</NavLink>
            </div>
            <div className={s.dialog}>
               <NavLink to="/dialogs/47Foden" >Phil Foden</NavLink>
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

