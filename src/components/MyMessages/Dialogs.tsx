import React from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";


export const Dialogs = () => {
   return (
      <div className={s.dialogs}>
         <div className={s.dialogItems}>
            <DialogItem  name="Sergio Aguero" id="kun"/>
            <DialogItem  name="Erling Haaland" id="Erl9"/>
            <DialogItem  name="David Silva" id="davidSilva"/>
            <DialogItem  name="Bernardo Silva" id="berny"/>
            <DialogItem  name="Kyle Walker" id="walkerK"/>
            <DialogItem  name="Phil Foden" id="47Foden"/>
         </div>
         <div className={s.messages}>
            <div className={s.message}>Hi</div>
            <div className={s.message}>How are you?</div>
            <div className={s.message}>Have a good day!</div>
         </div>
      </div>
   );
};

