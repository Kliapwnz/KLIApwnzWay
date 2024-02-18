import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {NavBar} from "./components/NavBar";


function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
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
