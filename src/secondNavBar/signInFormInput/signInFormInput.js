import { useState } from "react";
import "./signInFormInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label_email, label_password, label_password2, errorMessage_email, errorMessage_password, errorMessage_password2, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label className="label-email">{label_email}</label>
      <label className="label-password">{label_password}</label>
      <label className="label-password2">{label_password2}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span className="errorMessage-email">{errorMessage_email}</span>
      <span className="errorMessage-password">{errorMessage_password}</span>
      <span className="errorMessage-password2">{errorMessage_password2}</span>
    </div>
  );
};

export default FormInput;