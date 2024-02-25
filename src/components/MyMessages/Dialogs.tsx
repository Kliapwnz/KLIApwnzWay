import React from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";


let dialogsElements = dialogsData.map(el => <DialogItem name={el.name} id={el.id}/>)
let messagesElements = messagesData.map(el => <MessageItem message={el.message}/>)

export const Dialogs = () => {

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

