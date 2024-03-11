import {ActionTypes, PostType, ProfilePageType} from "./store";

export type AddPostActionType = ReturnType<typeof addPostAC>

export type ChangeNewPostTextActionType = ReturnType<typeof changeNewPostTextAC>

export const addPostAC = (postText: string) => {
   return {
      type: "ADD-POST",
      postText
   } as const
}
export const changeNewPostTextAC = (newText: string) => {
   return {
      type: "CHANGE-NEW-POST-TEXT",
      newText
   } as const
}

let initialState: ProfilePageType = {
   posts: [
      {id: 1, text: "How are you, guys?", likesCount: 81},
      {id: 2, text: "My second post", likesCount: 12},
      {id: 3, text: "Hello all", likesCount: 4},
   ],
   newPostText: ""
}

export const profileReducer = (state = initialState, action: ActionTypes) => {
   switch (action.type) {
      case "ADD-POST":
         let newPost: PostType = {
            id: new Date().getTime(),
            text: action.postText,
            likesCount: 0
         }
         state.posts.push(newPost)
         state.newPostText = ""
         return state
      case "CHANGE-NEW-POST-TEXT":
         state.newPostText = action.newText
         return state
      default:
         return state;
   }

}