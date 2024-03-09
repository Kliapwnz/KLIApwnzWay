import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {ActionTypes, DialogPageType} from "../../redux/state";
import {addMessageAC, newMessageTextAC} from "../../redux/dialogs-reducer";

type DialogsType = {
   dialogs: DialogPageType
   dispatch: (action: ActionTypes) => void

}


export const Dialogs = (props: DialogsType) => {

   let addMessage = () => {
      props.dispatch(addMessageAC(props.dialogs.newMessageText))
      props.dispatch(newMessageTextAC(""))
   }

   let onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      props.dispatch(newMessageTextAC(e.currentTarget.value))
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
                         placeholder="Enter your message"
               />
            </div>
            <div>
               <button onClick={addMessage} className={s.button}>send message</button>
            </div>
         </div>
      </div>
   );
};

