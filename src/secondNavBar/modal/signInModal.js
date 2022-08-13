import React, { useState} from "react";
import '../secondNavBar.css'
import '../adaptiveSecondNavBar.css'
import FormInput from "../signInFormInput/signInFormInput.js";

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
              <button type="submit" className="registration">ЗАРЕГИСТРИРОВТЬСЯ</button>
            </form>
            
          </div>
        </div>
      </div>
    );
  }

export default SignInModal