import React from 'react';
import './App.css';


function App() {
    return (
        <div className="app-wrapper">
            <header className="header">

                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/2048px-ChatGPT_logo.svg.png"
                    alt="logo"/>
            </header>
            <nav className="nav">
                <div><a>Profile</a></div>
                <div><a>Messages</a></div>
                <div><a>News</a></div>
                <div><a>Music</a></div>
                <div><a>Settings</a></div>
            </nav>
            <div className="content">
                <div>
                    <img
                        src="https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2022-07/img-homepage-meta_0.jpg?itok=LMirU0Ik"
                        alt="content"
                    />
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>New post</div>
                    <div>Post 1</div>
                    <div>Post 2</div>
                    <div>Post 3</div>
                </div>
            </div>
        </div>
    );
}

export default App;
