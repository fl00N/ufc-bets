import React from "react";
import './footerBetModal.css'
import './adaptiveFooterBoxModal.css'
import Conor from './ConorMcGregor.png'
import Dustin from './DustinPoirier.png'

function FooterBetModal({ setOpenModal5 }) {

    return (
      <div className="modalBackground">
        <div className="modalContainer4">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setOpenModal5(false);
              }}
            >
              X
            </button>
          </div>

          <div className="body3">

            <span className="tour">Tournament Name</span>

            <span className="date02">02.03.2020</span>
            <span className="time12">12:00</span>

            <span className="ConorDustin2">Conor Mcgregor - Dustin Poirier</span>


            <div className="divOfBet">

                <img className="imgOfConorModal" src={Conor} alt='Conor'/>
                <span className="ConorModal">Conor Mcgregor</span>
                <button className="betModal">1.57</button>

                <span className="vsModal">VS</span>

                <img className="imgOfDustinModal" src={Dustin} alt='Dustin'/>
                <span className="DustinModal">Dustin Poirier</span>
                <button className="betModal256">2.56</button>

            </div>

            <span className="amountOfBet">Сумма Ставки</span>
            <input className="amountOfBet-input" placeholder='Введите сумму ставки'/>

            <div className="divOfPotentialWin">

                <span className="textPotentialWin">Потенциальный Выигрыш:</span>
                <span className="potentialWin">₴ 300</span>

            </div>

            <button className="placeABet">СДЕЛАТЬ СТАВКУ</button>

          </div>

        </div>
      </div>
    );
}

export default FooterBetModal