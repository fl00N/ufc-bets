import React, { useState } from "react";
import "./secondNavBar.css";
import "./adaptiveSecondNavBar.css";
import SignInModal from './modal/signInModal.js'
import LogInModal from './modal/logInModal.js'
import HistoryBetsModal from './historyBetsModal/historyBetsModal.js'
import ReplenishModal from './replenishModal/replenishModal.js'
import WithdrawModal from './withdrawModal/withdrawModal.js'

const SecondNavBar = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen1, setModalOpen1] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [modalOpen3, setModalOpen3] = useState(false);
  const [modalOpen4, setModalOpen4] = useState(false);


  return (

    <div className="navbar">

      <span className="weHaveBets">У нас появились ставки!</span>

      <span className="balance">Баланс - ₴ 100</span>

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

        <button 
          className='historyBets' 
          onClick={() => {
            setModalOpen2(true);
          }}
        >ИСТОРИЯ СТАВОК</button>

        <button 
          className='replenish'
          onClick={() => {
            setModalOpen3(true);
          }}
         >ПОПОЛНИТЬ БАЛАНС</button>
         
         <button 
          className='withdraw'
          onClick={() => {
            setModalOpen4(true);
          }}
         >ВЫВОД</button>

        {modalOpen && <SignInModal setOpenModal={setModalOpen} />}
        {modalOpen1 && <LogInModal setOpenModal1={setModalOpen1} />}
        {modalOpen2 && <HistoryBetsModal setOpenModal2={setModalOpen2} />}
        {modalOpen3 && <ReplenishModal setOpenModal3={setModalOpen3} />}
        {modalOpen4 && <WithdrawModal setOpenModal4={setModalOpen4} />}
        
      </div>

    </div>

  );
};

export default SecondNavBar