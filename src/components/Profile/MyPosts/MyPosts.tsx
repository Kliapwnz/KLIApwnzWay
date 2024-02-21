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
            <Post title="How are you, guys?" likesCount={81}/>
            <Post title="Hello all" likesCount={4}/>
            <Post title="My second post" likesCount={12}/>
         </div>
      </div>
   );
};

