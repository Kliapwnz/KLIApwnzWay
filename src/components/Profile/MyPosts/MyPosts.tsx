import React, {ChangeEvent} from 'react';
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css"
import {ActionTypes, addPostAC, changeNewPostTextAC, PostType} from "../../../redux/state";

type MyPostsType = {
   posts: PostType[]
   dispatch: (action: ActionTypes) => void
   text: string
}


export const MyPosts = (props: MyPostsType) => {


   let addPost = () => {
      props.dispatch(addPostAC(props.text))
      props.dispatch(changeNewPostTextAC(""))
   }
   let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      props.dispatch(changeNewPostTextAC(e.currentTarget.value))
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

