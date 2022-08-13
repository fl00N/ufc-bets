import React from "react";
import './replenishModal.css'
import './adaptiveReplenishModal.css'

function ReplenishModal({ setOpenModal3 }) {

    return (
      <div className="modalBackground">
        <div className="modalContainer1">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setOpenModal3(false);
              }}
            >
              X
            </button>
          </div>
          <div className="title1">
            <h1>ПОПОЛНИТЬ БАЛАНС</h1>
          </div>
          <div className="body1">

            <span className="amount">Сумма</span>
            <input type='number' className="amount-input" placeholder="Введите сумму"/>
            <button className="topUp">ПОПОЛНИТЬ</button>

          </div>
        </div>
      </div>
    );
}

export default ReplenishModal