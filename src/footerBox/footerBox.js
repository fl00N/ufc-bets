import React from "react";
import "./footerBox.css";
import "./adaptiveFooterBox.css";
import Conor from './ConorMcGregor.png'
import Dustin from './DustinPoirier.png'

const FooterBox = () => {

  return (

    <div className="footerBox">

        <div className="footerBoxContent">

            <span className="time10">10:00</span>
            <span className="footerConor">Conor Mcgregor</span>
            <img className="footerImgOfConor" src={Conor} alt='Conor'/>
            <span className="redVS">VS</span>
            <button className="footerBet">1.57</button>
            <button className="footerBet256">2.56</button>
            <img className="footerImgOfDustin" src={Dustin} alt='Dustin'/>
            <span className="footerDustin">Dustin Poirier</span>
            <span className="today">Сегодня</span>


            <span className="time18">18:00</span>
            <span className="footerConor1">Conor Mcgregor</span>
            <img className="footerImgOfConor1" src={Conor} alt='Conor'/>
            <span className="redVS">VS</span>
            <button className="footerBet">1.57</button>
            <button className="footerBet256">2.56</button>
            <img className="footerImgOfDustin" src={Dustin} alt='Dustin'/>
            <span className="footerDustin">Dustin Poirier</span>
            <span className="date23">23.03</span>


      
        </div>

     </div>

  );
};

export default FooterBox;