import React from 'react';
import s from "./Dialogs.module.css"

export const Dialogs = () => {
   return (
      <div className={s.dialogs}>
         <div className={s.dialogItems}>
            <div className={s.dialog}>Sergio Aguero</div>
            <div className={s.dialog}>Erling Haaland</div>
            <div className={s.dialog}>David Silva</div>
            <div className={s.dialog}>Bernardo Silva</div>
            <div className={s.dialog}>Kyle Walker</div>
            <div className={s.dialog}>Phil Foden</div>
         </div>
         <div className={s.messages}>
            <div className={s.message}>Hi</div>
            <div className={s.message}>How are you?</div>
            <div className={s.message}>Have a good day!</div>
         </div>
      </div>
   );
};

