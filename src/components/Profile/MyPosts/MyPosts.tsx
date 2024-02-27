import React, {ChangeEvent} from 'react';
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css"
import {PostType} from "../../../redux/state";

type MyPostsType = {
   posts: PostType[]
   addPost: (post: string) => void
   updatePostText: (newText: string) => void
   text:string
}

export const MyPosts = (props: MyPostsType) => {


   let addPost = () => {
      props.addPost(props.text)
      props.updatePostText("")
   }
   let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      props.updatePostText(e.currentTarget.value)
   }
   let postElement = props.posts.map(el => <Post key={el.id} text={el.text} likesCount={el.likesCount}/>)

   return (
      <div className={s.postsBlock}>
         <h3>My posts</h3>
         <div>
            <div>
               <textarea value={props.text}
                         onChange={onPostChange}/>
            </div>
            <div>
               <button onClick={addPost}>Add Post</button>
            </div>
         </div>
         <div className={s.posts}>
            {postElement}
         </div>
      </div>
   );
};

