import React, { useState} from "react";
import '../secondNavBar.css'
import '../adaptiveSecondNavBar.css'
import FormInput from "../signInFormInput/signInFormInput.js";
import FooterBox from '../../footerBox/footerBox.js'

function SignInModal({ setOpenModal }) {

  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage_email: "Это должен быть действующий адрес электронной почты!",
      label_email: "Email",
      required: true,
    },

    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Пароль",
      errorMessage_password:"Пароль должен состоять из 8-20 символов и содержать как минимум 1 букву, 1 цифру и 1 специальный символ!",
      label_password: "Пароль",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    
    {
      id: 3,
      name: "confirmPassword",
      type: "password",
      placeholder: "Повторите пароль",
      errorMessage_password2: "Пароли не совпадают!",
      label_password2: "Повторите пароль",
      pattern: values.password,
      required: true,
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const textBets = document.querySelector('.weHaveBets')
  const signUpBtn = document.querySelector('.signUp')
  const logInBtn = document.querySelector('.logIn')

  const replenish = document.querySelector('.replenish')
  const withdraw = document.querySelector('.withdraw')
  const balance = document.querySelector('.balance')
  const historyBets = document.querySelector('.historyBets')

  const footerBet = document.querySelector('.footerBet')
  const footerBet256 = document.querySelector('.footerBet256')

  const footerBet1 = document.querySelector('.footerBet1')
  const footerBet2561 = document.querySelector('.footerBet2561')

  const registeredFooterBet = document.querySelector('.registeredFooterBet')
  const registeredFooterBet256 = document.querySelector('.registeredFooterBet256')
  
  const registeredFooterBet1 = document.querySelector('.registeredFooterBet1')
  const registeredFooterBet2561 = document.querySelector('.registeredFooterBet2561')

  const register = () => {
    {
      alert("Регистрация прошла успешно!")
    }

    setOpenModal(false)
    textBets.style.display = 'none'
    signUpBtn.style.display = 'none'
    logInBtn.style.display = 'none'

    footerBet.style.display = 'none'
    footerBet256.style.display = 'none'
    footerBet1.style.display = 'none'
    footerBet2561.style.display = 'none'

    registeredFooterBet.style.display = 'block'
    registeredFooterBet256.style.display = 'block'
    registeredFooterBet1.style.display = 'block'
    registeredFooterBet2561.style.display = 'block'

    replenish.style.display = 'inline-flex'
    withdraw.style.display = 'inline-flex'
    balance.style.display = 'block'
    historyBets.style.display = 'inline-flex'

  }

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

            <form onSubmit={handleSubmit}>
              {inputs.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}
              <button onClick={register}
                      type="submit" 
                      className="registration"
                      >
                      ЗАРЕГИСТРИРОВАТЬСЯ
              </button>
            </form>
            
          </div>
        </div>
      </div>
    );
  }

export default SignInModal