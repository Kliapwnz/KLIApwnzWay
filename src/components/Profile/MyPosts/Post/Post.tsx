import React from 'react';
import s from "./Post.module.css"

type PostPropsType={
   text:string,
   likesCount:number
}

export const Post = (props:PostPropsType) => {
   return (
      <div className={s.post}>
         <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a04b24be-1037-4781-8dc6-61f3038e3d20/dfg9n4o-99b6631d-1c38-488a-81ab-e0b3f0367e37.jpg/v1/fit/w_828,h_1036,q_70,strp/kevin_de_bruyne_2022_2023_kit_edit_by_azgrey21_dfg9n4o-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYwMCIsInBhdGgiOiJcL2ZcL2EwNGIyNGJlLTEwMzctNDc4MS04ZGM2LTYxZjMwMzhlM2QyMFwvZGZnOW40by05OWI2NjMxZC0xYzM4LTQ4OGEtODFhYi1lMGIzZjAzNjdlMzcuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.2pRoU77T6uxzH2zqOuV22o7_cMX5gt83-48Y_782eR0"/>
         {props.text}
         <div>
            <span>{props.likesCount} likes</span>
         </div>
      </div>
   );
};

