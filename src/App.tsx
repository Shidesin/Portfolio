import React from 'react';
import './App.css';
import Header from './header/Header';
import MainBox from './mainBox/MainBox';
import Skills from './Skills/Skills';
import MyProject from './myProject/MyProject';

function App() {
    return (
        <div>
            <Header/>
            <MainBox/>
            <Skills/>
            <MyProject/>
        </div>
    );
}

export default App;