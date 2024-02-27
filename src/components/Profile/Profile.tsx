import React from 'react';
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionTypes, ProfilePageType} from "../../redux/state";

type ProfileType = {
   profile: ProfilePageType
   dispatch: (action:ActionTypes) => void

}


export const Profile = (props: ProfileType) => {
   return (
      <div className={s.content}>
         <ProfileInfo/>
         <MyPosts posts={props.profile.posts}
                  dispatch={props.dispatch}
                  text={props.profile.newPostText}
                 />
      </div>
   );
};

