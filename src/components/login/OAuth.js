import React, { useEffect } from "react";

export default function OAuth() {
  function Naver() {
    console.log(new naver());
    const naverLogin = new naver.LoginWithNaverId({
      clientId: "x83IzQrhnNOf9S_P1RdE",
      callbackUrl: "http://localhost:3000/signup",
      isPopup: false,
      loginButton: { color: "white", type: 3, height: 40 },
      callbackHandle: true,
    });
    naverLogin.init();
  }
  const Login = () => {
    Naver();
  };

  if (typeof naver !== "undefined") {
    useEffect(Login, []);
  }
  return <div id="naverIdLogin" onClick={Login}></div>;
}
