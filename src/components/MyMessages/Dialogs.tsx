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

let messagesData = [
   {id: 1, message: "Hi"},
   {id: 2, message: "How are you?"},
   {id: 3, message: "Have a good day!"},
]

export const Dialogs = () => {
   let dialogsElements = dialogsData.map(el => <DialogItem name={el.name} id={el.id}/>)
   let messagesElements = messagesData.map(el => <MessageItem message={el.message}/>)
   return (
      <div className={s.dialogs}>
         <div className={s.dialogItems}>
            {dialogsElements}
         </div>
         <div className={s.messages}>
            {messagesElements}
         </div>
      </div>
   );
};

