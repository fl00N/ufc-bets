import React from 'react';
import './App.css';
import Navbar from './navbar/navbar.js'
import SecondNavBar from './secondNavBar/secondNavBar.js'
import BoxWithDisBet from './boxWithDisBet/boxWithDisBet.js'
import FooterBox from './footerBox/footerBox.js'

function App() {

  return (

    <div className="App">

    <Navbar />
    <SecondNavBar />
    <BoxWithDisBet />
    <FooterBox />
    
    </div>
  );
}

export default App;
