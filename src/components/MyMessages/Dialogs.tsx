import React from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";


let dialogsData = [
   {id: 1, name: "Sergio Aguero"},
   {id: 2, name: "Erling Haaland"},
   {id: 3, name: "David Silva"},
   {id: 4, name: "Bernardo Silva"},
   {id: 5, name: "Kyle Walker"},
   {id: 6, name: "Phil Foden"},
]

export const Dialogs = () => {
   return (
      <div className={s.dialogs}>
         <div className={s.dialogItems}>
            {dialogsData.map(el => <DialogItem name={el.name} id={el.id}/>)}
         </div>
         <div className={s.messages}>
            <MessageItem message="Hi"/>
            <MessageItem message="How are you?"/>
            <MessageItem message="Have a good day!"/>
         </div>
      </div>
   );
};

