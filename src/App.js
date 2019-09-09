import React from 'react';
import './App.css';

import Main from "./main/main";
import Header from "./header/header";

import Footer from "./footer/footer";
import InputTips from "./input-tips/input-tips";



//Currently this page only serves up the Main interface, but could be used for other interfaces

function App() {
  return (
    <div className="App">
      
    <Header />
    {/* <InputTips /> */}
    <Main />
    <Footer />

    </div>
  );
}



export default App;
