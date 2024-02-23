import React from 'react';
import s from "./Dialogs.module.css"

export const Dialogs = () => {
   return (
      <div className={s.dialogs}>
         <div className={s.dialogItems}>
            <div className={s.dialog + " " + s.active}>Sergio Aguero</div>
            <div className={'${s.dialog} ${s.active}'}>Erling Haaland</div>
            <div className={'${s.dialog} ${s.active}'}>David Silva</div>
            <div className={'${s.dialog} ${s.active}'}>Bernardo Silva</div>
            <div className={'${s.dialog} ${s.active}'}>Kyle Walker</div>
            <div className={'${s.dialog} ${s.active}'}>Phil Foden</div>
         </div>
         <div className={s.messages}>
            <div className={s.message}>Hi</div>
            <div className={s.message}>How are you?</div>
            <div className={s.message}>Have a good day!</div>
         </div>
      </div>
   );
};

