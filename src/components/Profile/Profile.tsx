import React from 'react';
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfileType = {
   profile: ProfilePageType
   addPost: (post: string) => void
   updatePostText: (newText: string) => void
}


export const Profile = (props: ProfileType) => {
   return (
      <div className={s.content}>
         <ProfileInfo/>
         <MyPosts posts={props.profile.posts}
                  addPost={props.addPost}
                  updatePostText={props.updatePostText}
                  text={props.profile.newPostText}
                 />
      </div>
   );
};

