import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Technologies} from "./components/Technologies/Technologies";
import {Footer} from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Technologies/>
            <Footer/>
        </div>
    );
}

export default App;
