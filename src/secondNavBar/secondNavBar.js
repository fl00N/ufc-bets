import React, { useState } from "react";
import "./secondNavBar.css";
import "./adaptiveSecondNavBar.css";
import SignInModal from './modal/signInModal.js'
import LogInModal from './modal/logInModal.js'

const SecondNavBar = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen1, setModalOpen1] = useState(false);

  return (

    <div className="navbar">

      <span className="weHaveBets">У нас появились ставки!</span>

      <div>


        <button 
          className='signUp' 
          onClick={() => {
            setModalOpen(true);
          }}
        >РЕГИСТРАЦИЯ</button>

        <button 
          className='logIn'
          onClick={() => {
            setModalOpen1(true);
          }}
         >ВОЙТИ</button>

        {modalOpen && <SignInModal setOpenModal={setModalOpen} />}
        {modalOpen1 && <LogInModal setOpenModal1={setModalOpen1} />}
        
      </div>

    </div>

  );
};

export default SecondNavBar