import React from 'react';
import s from "./Header.module.css"

export const Header = () => {
    return (
        <header className={s.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/2048px-ChatGPT_logo.svg.png"
                alt="logo"/>
        </header>
    );
};

