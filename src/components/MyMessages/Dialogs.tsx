import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {DialogPageType} from "../../redux/state";

type DialogsType = {
   dialogs: DialogPageType
   addMessage: (message: string) => void
   updateMessageText: (newText: string) => void
}


export const Dialogs = (props: DialogsType) => {

   let addMessage = () => {
      props.addMessage(props.dialogs.newMessageText)
      props.updateMessageText("")
   }

   let onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      props.updateMessageText(e.currentTarget.value)
   }

   let dialogsElements = props.dialogs.dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>)
   let messagesElements = props.dialogs.messages.map(el => <MessageItem key={el.id} message={el.message}/>)
   return (
      <div className={s.dialogs}>
         <div className={s.dialogItems}>
            {dialogsElements}
         </div>
         <div className={s.messages}>
            {messagesElements}
            <div>
               <textarea value={props.dialogs.newMessageText}
                         onChange={onMessageChange}
               />
            </div>
            <div>
               <button onClick={addMessage}>send message</button>
            </div>
         </div>
      </div>
   );
};

