import React from 'react';
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css"

let postsData = [
   {id:1, text:"How are you, guys?", likesCount:81},
   {id:2, text:"My second post", likesCount:12},
   {id:3, text:"Hello all", likesCount:4},
]


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
            {postsData.map(el=> <Post text={el.text} likesCount={el.likesCount}/>)}
         </div>
      </div>
   );
};

