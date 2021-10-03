import React, { useState } from "react";
import NaverLogin from "react-login-by-naver";

export const OAuth = () => {
  // const [token, setToken] = useState("");

  // const {
  //   data: { access_token },
  // } = await;
  // axios.get(
  //   `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${NV_APP_ID} &client_secret=${NV_APP_SECRET} &code=${code}&state=${STATE_STRING}`
  // );
  // setToken(data.access_token);

  // const config = { headers: { Authorization: `Bearer ${access_token}` } };

  return (
    <div>
      <NaverLogin
        clientId="x83IzQrhnNOf9S_P1RdE"
        callbackUrl="http://localhost:3000/signup?naver=true"
        render={(props) => <div onClick={props.onClick}>Naver Login</div>}
        onSuccess={(res) => responseLogin(res, "naver")}
        onFailure={() => console.log("naver login fail")}
      />
    </div>
  );
};

export default OAuth;
