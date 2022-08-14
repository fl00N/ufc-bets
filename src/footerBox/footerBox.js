import React, { useState } from "react";
import "./footerBox.css";
import "./adaptiveFooterBox.css";
import Conor from './ConorMcGregor.png'
import Dustin from './DustinPoirier.png'
import FooterBetModal from './modal/footerBetModal.js'

const FooterBox = () => {

  const [modalOpen5, setModalOpen5] = useState(false);

  return (

    <div className="footerBox">

        <div className="footerBoxContent">

            <span className="time10">10:00</span>
            <span className="footerConor">Conor Mcgregor</span>
            <img className="footerImgOfConor" src={Conor} alt='Conor'/>
            <span className="redVS">VS</span>
            <button className="footerBet">1.57</button>
            <button className="footerBet256">2.56</button>

            <button onClick={() => {
                      setModalOpen5(true);
                    }}
                    className="registeredFooterBet"
            >
              1.57
            </button>

            <button onClick={() => {
                      setModalOpen5(true);
                    }}
                    className="registeredFooterBet256"
            >
              2.56
            </button>

            <img className="footerImgOfDustin" src={Dustin} alt='Dustin'/>
            <span className="footerDustin">Dustin Poirier</span>
            <span className="today">Сегодня</span>


            <span className="time18">18:00</span>
            <span className="footerConor1">Conor Mcgregor</span>
            <img className="footerImgOfConor1" src={Conor} alt='Conor'/>
            <span className="redVS">VS</span>
            <button className="footerBet1">1.57</button>
            <button className="footerBet2561">2.56</button>

            <button onClick={() => {
                      setModalOpen5(true);
                    }}
                    className="registeredFooterBet1"
            >
              1.57
            </button>

            <button onClick={() => {
                      setModalOpen5(true);
                    }}
                    className="registeredFooterBet2561"
            >
              2.56
            </button>

            <img className="footerImgOfDustin" src={Dustin} alt='Dustin'/>
            <span className="footerDustin">Dustin Poirier</span>
            <span className="date23">23.03</span>

            {modalOpen5 && <FooterBetModal setOpenModal5={setModalOpen5} />}
      
        </div>

     </div>

  );
};

export default FooterBox;