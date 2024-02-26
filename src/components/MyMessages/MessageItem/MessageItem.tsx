import s from "./MessageItem.module.css";
import React from "react";

type MessageItemType = {
   message: string
}

export const MessageItem = (props: MessageItemType) => {
   return (
      <div className={s.message}>{props.message}</div>
   )
}