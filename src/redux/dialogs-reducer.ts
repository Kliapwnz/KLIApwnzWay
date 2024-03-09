import {ActionTypes, DialogPageType, MessageType} from "./state";

export type AddMessageActionType = ReturnType<typeof addMessageAC>
export type newMessageTextActionType = ReturnType<typeof newMessageTextAC>


export const addMessageAC = (messageText: string) => {
   return {
      type: "ADD-MESSAGE",
      messageText
   } as const
}
export const newMessageTextAC = (newMessageText: string) => {
   return {
      type: "CHANGE-NEW-MESSAGE-TEXT",
      newMessageText
   } as const
}
export const dialogsReducer = (state: DialogPageType, action: ActionTypes) => {
   switch (action.type) {
      case "ADD-MESSAGE":
         let newMessage: MessageType = {
            id: new Date().getTime(),
            message: action.messageText
         }
         state.messages.push(newMessage)
         return state
      case "CHANGE-NEW-MESSAGE-TEXT":
         state.newMessageText = action.newMessageText
         return state
      default:
         return state
   }
}