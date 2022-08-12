import React from "react";
import './secondNavBar.css'
import './adaptiveSecondNavBar.css'

function LogInModal({ setOpenModal1 }) {

    return (
      <div className="modalBackground">
        <div className="logInModalContainer">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setOpenModal1(false);
              }}
            >
              X
            </button>
          </div>
          <div className="logInTitle">
            <h1>ВХОД</h1>
          </div>
          <div className="body">
            <form>

              <p className="logInEmail">Email*</p>
              <input className="logInEmail-input" placeholder="Введите email"/>

              <p className="logInPassword">Пароль*</p>
              <input className="logInPassword-input" placeholder="Введите пароль"/>

              <button type="submit" className="logInModal">ВОЙТИ</button>
  
            </form>
            
          </div>
          <div className="footer">

          </div>
        </div>
      </div>
    );
  }

export default LogInModal