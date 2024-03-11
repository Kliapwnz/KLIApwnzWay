import React from 'react';
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionTypes, ProfilePageType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfileType = {
   profile: ProfilePageType
   dispatch: (action: ActionTypes) => void

}


export const Profile = (props: ProfileType) => {
   return (
      <div className={s.content}>
         <ProfileInfo/>
         <MyPostsContainer posts={props.profile.posts}
                  dispatch={props.dispatch}
                  text={props.profile.newPostText}
         />
      </div>
   );
};

