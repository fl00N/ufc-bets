import React from "react";
import './secondNavBar.css'
import './adaptiveSecondNavBar.css'

function SignInModal({ setOpenModal }) {

    return (
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              X
            </button>
          </div>
          <div className="title">
            <h1>РЕГИСТРАЦИЯ</h1>
          </div>
          <div className="body">
            <form>

              <p className="email">Email*</p>
              <input className="email-input" placeholder="Введите email"/>

              <p className="password">Пароль*</p>
              <input className="password-input" placeholder="Введите пароль"/>

              <p className="reEnterPassword">Повторите пароль*</p>
              <input className="reEnterPassword-input" placeholder="Введите повторно пароль"/>

              <button type="submit" className="registration">ЗАРЕГИСТРИРОВТЬСЯ</button>
  
            </form>
            
          </div>
          <div className="footer">

          </div>
        </div>
      </div>
    );
  }

export default SignInModal