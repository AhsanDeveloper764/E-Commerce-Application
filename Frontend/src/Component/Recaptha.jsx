import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Recaptha = () => {
  const [captchaValue, setCaptchaValue] = useState(null);

  const onChange = (value) => {
    console.log("Captcha value:", value);
    setCaptchaValue(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaValue) {
      alert("Please complete the reCAPTCHA!");
      return;
    }
    alert("Form submitted successfully!");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <br />
        <ReCAPTCHA
          sitekey="6LdVkwkUAAAAACeeETRX--v9Js0vWyjQOTIZxxeB" // Replace this with your Google reCAPTCHA Site Key
          onChange={onChange}
        />
      </form>
    </div>
  );
};

export default Recaptha;
