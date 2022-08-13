import React from "react";
import './historyBetsModal.css'
import './adaptiveHistoryBetsModal.css'

function HistoryBetsModal({ setOpenModal2 }) {

    return (
      <div className="modalBackground">
        <div className="modalContainer3">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setOpenModal2(false);
              }}
            >
              X
            </button>
          </div>
          <div className="title">
            <h1>ИСТОРИЯ СТАВОК</h1>
          </div>
          <div className="body">
            
              <div className="rectangle" id="firstRectangle">

                  <span className="ConorDustin">Conor Mcgregor - Dustin Poirier</span>
                  <span className="date">10.05.2020</span>
                  <span className="time">10:21</span>
                  <span className="money">+ ₴ 100</span>
                  <span className="coef">x1.45</span>

              </div>
              
              <div className="rectangle">

                  <span className="ConorDustin">Conor Mcgregor - Dustin Poirier</span>
                  <span className="date">10.05.2020</span>
                  <span className="time">10:21</span>
                  <span className="minusMoney">- ₴ 100</span>
                  <span className="coef">x1.45</span>

              </div>

              <div className="rectangle">

                  <span className="ConorDustin">Conor Mcgregor - Dustin Poirier</span>
                  <span className="date">10.05.2020</span>
                  <span className="time">10:21</span>
                  <span className="money">+ ₴ 100</span>
                  <span className="coef">x1.45</span>

              </div>

              <div className="rectangle">

                  <span className="ConorDustin">Conor Mcgregor - Dustin Poirier</span>
                  <span className="date">10.05.2020</span>
                  <span className="time">10:21</span>
                  <span className="minusMoney">- ₴ 100</span>
                  <span className="coef">x1.45</span>

              </div>

              <div className="rectangle">

                  <span className="ConorDustin">Conor Mcgregor - Dustin Poirier</span>
                  <span className="date">10.05.2020</span>
                  <span className="time">10:21</span>
                  <span className="money">+ ₴ 100</span>
                  <span className="coef">x1.45</span>

              </div>

              <div className="Pagination">

                <span className="prev">{'<'}</span>

                <input type="button" value="1" id="first" className="pagination"/>
                <input type="button" value="2" className="pagination"/>
                <input type="button" value="3" className="pagination"/>
                <input type="button" value="4" className="pagination"/>
                <input type="button" value="5" className="pagination"/>

                <span className="next">{'>'}</span>

              </div>

          </div>
        </div>
      </div>
    );
}

export default HistoryBetsModal