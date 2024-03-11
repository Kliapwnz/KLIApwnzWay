import React, {ChangeEvent} from 'react';
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css"
import {ActionTypes, PostType} from "../../../redux/store";
import {addPostAC, changeNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";

type MyPostsType = {
   posts: PostType[]
   dispatch: (action: ActionTypes) => void
   text: string
}

export const MyPostsContainer = (props: MyPostsType) => {


   let addPost = () => {
      props.dispatch(addPostAC(props.text))
      props.dispatch(changeNewPostTextAC(""))
   }
   let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      props.dispatch(changeNewPostTextAC(e.currentTarget.value))
   }

   return (
      <MyPosts posts={props.posts} addPost={addPost} updatePostText={onPostChange} text={props.text}/>
   );
};

