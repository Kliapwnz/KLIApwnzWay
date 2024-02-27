import {rerenderEntireTree} from "../rerenderEntireTree";
import {message} from "antd";

export type MessageType = {
   id: number
   message: string
}
export type DialogsType = {
   id: number
   name: string
}
export type PostType = {
   id: number
   text: string
   likesCount: number
}

export type ProfilePageType = {
   posts: Array<PostType>
   newPostText: string
}
export type DialogPageType = {
   dialogs: Array<DialogsType>
   messages: Array<MessageType>
   newMessageText: string
}

export type SidebarType = {}
export type RootStateType = {
   profilePage: ProfilePageType
   dialogsPage: DialogPageType
   sidebar: SidebarType
}

export let state: RootStateType = {
   profilePage: {
      posts: [
         {id: 1, text: "How are you, guys?", likesCount: 81},
         {id: 2, text: "My second post", likesCount: 12},
         {id: 3, text: "Hello all", likesCount: 4},
      ],
      newPostText: ""
   },
   dialogsPage: {
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
   },
   sidebar: {}
}

export const addMessage = (message: string) => {
   let newMessage: MessageType = {
      id: new Date().getTime(),
      message: message
   }
   state.dialogsPage.messages.push(newMessage)
   rerenderEntireTree(state)
}
export const updateMessageText = (newText: string) => {
   state.dialogsPage.newMessageText = newText
   rerenderEntireTree(state)
}

export const addPost = (post: string) => {
   let newPost: PostType = {
      id: new Date().getTime(),
      text: post,
      likesCount: 0
   }
   state.profilePage.posts.push(newPost)
   rerenderEntireTree(state)
}

export const updatePostText = (newText: string) => {
   state.profilePage.newPostText = newText
   rerenderEntireTree(state)
}