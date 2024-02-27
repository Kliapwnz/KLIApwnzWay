export type StoreType = {
   _state: RootStateType
   addMessage: (message: string) => void
   updateMessageText: (newText: string) => void
   addPost: (post: string) => void
   updatePostText: (newText: string) => void
   _onChange: () => void
   subscribe: (observer: () => void) => void
}

export const store: StoreType = {
   _state: {
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
      sidebar: {},
   },
   _onChange() {
      console.log("state changed")
   },
   addMessage(message: string) {
      let newMessage: MessageType = {
         id: new Date().getTime(),
         message: message
      }
      this._state.dialogsPage.messages.push(newMessage)
      this._onChange()
   },
   updateMessageText(newText: string) {
      this._state.dialogsPage.newMessageText = newText
      this._onChange()
   },
   addPost(post: string) {
      let newPost: PostType = {
         id: new Date().getTime(),
         text: post,
         likesCount: 0
      }
      this._state.profilePage.posts.push(newPost)
      this._onChange()
   },
   updatePostText(newText: string) {
      this._state.profilePage.newPostText = newText
      this._onChange()
   },
   subscribe(observer) {
      this._onChange = observer
   },
}


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





