import React, { useEffect } from "react";

export default function OAuth() {
  const Login = () => {
    if (typeof naver !== "undefined") {
      Naver();
    }
  };
  useEffect(Login, []);

  function Naver() {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: "x83IzQrhnNOf9S_P1RdE",
      callbackUrl: "http://localhost:3000/signup",
      isPopup: false,
      loginButton: { color: "white", type: 3, height: 40 },
      callbackHandle: true,
    });
    naverLogin.init();
  }

  return <div id="naverIdLogin" onClick={Login}></div>;
}
