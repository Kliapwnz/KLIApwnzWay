import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {DialogPageType, updateMessageText} from "../../redux/state";

type DialogsType = {
   dialogs: DialogPageType
   addMessage: (message: string) => void
   messageText: string
   updateMessageText: (newText: string) => void
}


export const Dialogs = (props: DialogsType) => {

   let addMessage = () => {
      props.addMessage(props.messageText)
      props.updateMessageText("")
   }

   let onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      props.updateMessageText(e.currentTarget.value)
   }

   let dialogsElements = props.dialogs.dialogs.map(el => <DialogItem name={el.name} id={el.id}/>)
   let messagesElements = props.dialogs.messages.map(el => <MessageItem message={el.message}/>)
   return (
      <div className={s.dialogs}>
         <div className={s.dialogItems}>
            {dialogsElements}
         </div>
         <div className={s.messages}>
            {messagesElements}
            <div>
               <textarea value={props.messageText}
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

