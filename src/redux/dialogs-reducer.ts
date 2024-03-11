import {ActionTypes, DialogPageType, MessageType} from "./store";

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

let initialState: DialogPageType = {
   dialogs: [
      {id: 1, name: "Sergio Aguero"},
      {id: 2, name: "Erling Haaland"},
      {id: 3, name: "David Silva"},
      {id: 4, name: "Bernardo Silva"},
      {id: 5, name: "Kyle Walker"},
      {id: 6, name: "Phil Foden"},
   ],
   messages: [
      {id: 1, message: "Hi"},
      {id: 2, message: "How are you?"},
      {id: 3, message: "Have a good day!"},
   ],
   newMessageText: ""
}
export const dialogsReducer = (state = initialState, action: ActionTypes) => {
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