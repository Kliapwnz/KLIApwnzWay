import {ActionTypes, PostType, ProfilePageType} from "./state";

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
export const profileReducer = (state: ProfilePageType, action: ActionTypes) => {
   if (action.type === "ADD-POST") {
      let newPost: PostType = {
         id: new Date().getTime(),
         text: action.postText,
         likesCount: 0
      }
      state.posts.push(newPost)
      state.newPostText = ""
   } else if (action.type === "CHANGE-NEW-POST-TEXT") {
      state.newPostText = action.newText
   }
      return state
   }