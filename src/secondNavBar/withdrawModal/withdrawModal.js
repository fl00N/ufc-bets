import React from "react";
import './withdrawModal.css'
import './adaptiveWithdrawModal.css'
import qiwi from './qiwi@2x.png'
import visa from './visa@2x.png'

function WithdrawModal({ setOpenModal4 }) {

    return (
      <div className="modalBackground">
        <div className="modalContainer2">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setOpenModal4(false);
              }}
            >
              X
            </button>
          </div>
          <div className="title2">
            <h1>ВЫВОД</h1>
          </div>
          <div className="body2">

            <span className="method">Выберите способ вывода средств</span>

            <img tabIndex="1" className="qiwi" src={qiwi} alt=''/>
            <img tabIndex="1" className="visa" src={visa} alt=''/>
            <img tabIndex="1" className="qiwi2" src={qiwi} alt=''/>
            <img tabIndex="1" className="visa2" src={visa} alt=''/>

            <span className="amount1">Сумма</span>
            <input type='number' className="amount-input1" placeholder="Введите сумму"/>

            <span className="wallet">Кошелек</span>
            <input type='number' className="wallet-input" placeholder="Введите номер кошелька"/>

            <button className="request">ОТПРАВИТЬ ЗАЯВКУ НА ВЫВОД</button>

          </div>
        </div>
      </div>
    );
}

export default WithdrawModal