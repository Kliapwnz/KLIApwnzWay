import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemType={
   name:string
   id:string
}

export const DialogItem = (props:DialogItemType) => {
   return (
      <div className={s.dialog}>
         <NavLink to={"/dialogs/" + props.id}
                  className={e => e.isActive ? s.active : s.dialog}>
            {props.name}
         </NavLink>
      </div>
   )
}
