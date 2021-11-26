import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export default function OAuth() {
  const router = useRouter();
  const Login = () => {
    if (typeof window.naver === 'undefined') router.reload();
    else {
      Naver();
    }
  };
  useEffect(() => {
    Login();
  }, []);

  function Naver() {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: 'x83IzQrhnNOf9S_P1RdE',
      callbackUrl: 'http://dongurami-front.herokuapp.com/naversignup',
      isPopup: false,
      loginButton: { color: 'white', type: 3, height: 50 },
      callbackHandle: true
    });
    naverLogin.init();
  }

  return <div id="naverIdLogin" onClick={Login}></div>;
}
