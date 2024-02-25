import React from 'react';
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css"


let postElement = postsData.map(el => <Post text={el.text} likesCount={el.likesCount}/>)

export const MyPosts = () => {

   return (
      <div className={s.postsBlock}>
         <h3>My posts</h3>
         <div>
            <div>
               <textarea></textarea>
            </div>
            <div>
               <button>Add Post</button>
            </div>
         </div>
         <div className={s.posts}>
            {postElement}
         </div>
      </div>
   );
};

