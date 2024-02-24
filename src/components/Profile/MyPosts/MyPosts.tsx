import React from 'react';
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css"

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
            <Post text="How are you, guys?" likesCount={81}/>
            <Post text="My second post" likesCount={12}/>
            <Post text="Hello all" likesCount={4}/>
         </div>
      </div>
   );
};

