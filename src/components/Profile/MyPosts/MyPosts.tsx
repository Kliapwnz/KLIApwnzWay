import React from 'react';
import {Post} from "./Post/Post";

export const MyPosts = () => {
   return (
      <div>
         My posts
         <div>
            <textarea></textarea>
            <button>Add Post</button>
         </div>
         <div>
            <Post text="How are you, guys?" likesCount={81}/>
            <Post text="My second post" likesCount={12}/>
            <Post text="Hello all" likesCount={4}/>
         </div>
      </div>
   );
};

