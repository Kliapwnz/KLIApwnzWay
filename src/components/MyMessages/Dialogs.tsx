import React from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {DialogPageType} from "../../redux/state";

type DialogsType = {
   dialogs: DialogPageType
}


export const Dialogs = (props: DialogsType) => {

   let newPostElement = React.createRef<HTMLTextAreaElement>()
   let addMessage = () => {
      let text = newPostElement.current?.value
      alert(text)
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
               <textarea ref={newPostElement}></textarea>
            </div>
            <div>
               <button onClick={addMessage}>send message</button>
            </div>
         </div>
      </div>
   );
};

