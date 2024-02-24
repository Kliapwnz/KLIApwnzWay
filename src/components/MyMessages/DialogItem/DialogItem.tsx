import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemType={
   name:string
   id:string
}

export const DialogItem = (props:DialogItemType) => {
   let path = "/dialogs/" + props.id

   return (
      <div className={s.dialog}>
         <NavLink to={path}
                  className={e => e.isActive ? s.active : s.dialog}>
            {props.name}
         </NavLink>
      </div>
   )
}
