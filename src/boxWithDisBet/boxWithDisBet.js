import React from "react";
import "./boxWithDisBet.css";
import "./adaptiveBoxWithDisBet.css";
import player from './player.jpg'
import Conor from './ConorMcGregor.png'
import Dustin from './DustinPoirier.png'
import lock from './lock.png'

const BoxWithDisBet = () => {

  return (

    <div className="box">

        <img className="player" src={player} alt='player'/>

        <div className="boxContent">

            <span className="boxTitle">Tournament Name</span>

            <img className="imgOfConor" src={Conor} alt='Conor'/>
            <img className="imgOfDustin" src={Dustin} alt='Dustin'/>

            <span className="vs">VS</span>

            <span className="Conor">Conor Mcgregor</span>
            <span className="Dustin">Dustin Poirier</span>

            <button className="disBet-157">1.57</button>

            <button className="betWithLock">
              <img className="lock" src={lock} alt='lock'/>
            </button>
      
        </div>

     </div>

  );
};

export default BoxWithDisBet;