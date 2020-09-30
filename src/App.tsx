import React from 'react';
import './App.css';
import Header from './header/Header';
import MainBox from './mainBox/MainBox';
import Skills from './Skills/Skills';
import MyProject from './myProject/MyProject';
import Contact from './сontact/Contact';
import Footer from './footer/Footer';

function App() {
    return (
        <div>
            <Header/>
            <MainBox/>
            <Skills/>
            <MyProject/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;