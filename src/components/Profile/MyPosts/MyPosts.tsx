import React, {ChangeEvent} from 'react';
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css"
import {ActionTypes, PostType} from "../../../redux/store";
import {addPostAC} from "../../../redux/profile-reducer";

type MyPostsType = {
   posts: PostType[]
   addPost: (action: ActionTypes) => void
   updatePostText: (e: ChangeEvent<HTMLTextAreaElement>) => void
   text: string
}

export const MyPosts = (props: MyPostsType) => {


   let addPost = () => {
      props.addPost(addPostAC(props.text))
   }
   let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      props.updatePostText(e)
   }
   let postElement = props.posts.map(el => <Post key={el.id} text={el.text} likesCount={el.likesCount}/>)

   return (
      <div className={s.postsBlock}>
         <h3>My posts</h3>
         <div>
            <div>
               <textarea value={props.text}
                         onChange={onPostChange}
                         placeholder="Что у вас нового?"
               />
            </div>
            <div>
               <button onClick={addPost} className={s.button}>Add Post</button>
            </div>
         </div>
         <div className={s.posts}>
            {postElement}
         </div>
      </div>
   );
};

