import React from 'react';
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
   return (
      <div className={s.content}>
         <div>
            <img
               src="https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2022-07/img-homepage-meta_0.jpg?itok=LMirU0Ik"
               alt="content"
            />
         </div>
         <div>
            ava + description
         </div>
         <MyPosts/>
      </div>
   );
};

