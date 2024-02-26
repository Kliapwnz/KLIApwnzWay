import React, {MouseEventHandler, RefObject} from 'react';
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css"
import {PostType} from "../../../redux/state";

type MyPostsType = {
   posts: PostType[]
   addPost: (post: string) => void
}


export const MyPosts = (props: MyPostsType) => {

   let newPostElement = React.createRef<HTMLTextAreaElement>()
   let addPost = () => {
      if (newPostElement.current){
         props.addPost(newPostElement.current.value)
         newPostElement.current.value = ""
      }
   }

   let postElement = props.posts.map(el => <Post text={el.text} likesCount={el.likesCount}/>)

   return (
      <div className={s.postsBlock}>
         <h3>My posts</h3>
         <div>
            <div>
               <textarea ref={newPostElement}></textarea>
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

