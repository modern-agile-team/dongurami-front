import Link from "next/link";
import styles from "../../styles/User/SignUp/SignUpForm.module.scss";
import { useState } from "react";
import axios from "axios";

function SignUpForm() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [names, setNames] = useState("");
  const [email, setEmail] = useState("");
  const [major, setMajor] = useState("");
  const [checkSignUp, setCheckSignUp] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;

    if (name === "id") setId(value);
    if (name === "password") setPassword(value);
    if (name === "repassword") setRepassword(value);
    if (name === "names") setNames(value);
    if (name === "email") setEmail(value);
    if (name === "major") setMajor(value);
  };

  const onSubmit = (e) => {
    axios("http://3.36.72.145:8080/api/sign-up", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
      data: {
        id,
        password,
        name,
        email,
        major,
      },
    })
      .then((res) => {
        if (res.data.msg === "success") {
          alert("회원가입이 완료되었습니다.");
        }
        // else if () {
        //     code = "";
        //     alert("아이디와 패스워드를 제대로 입력하십시오");
        // }
      })
      .catch((err) => alert(err.response.data.msg));

    if (password !== repassword) {
      setCheckSignUp("비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <form className={styles.form}>
      <h1>회원가입</h1>
      <input
        type="text"
        placeholder="이름"
        onChange={onChange}
        name="names"
        value={names}
      />
      <input
        type="number"
        placeholder="학번"
        onChange={onChange}
        name="id"
        value={id}
      />
      <select
        className={styles.select}
        onChange={onChange}
        name="major"
        value={major}
      >
        <option value="00">학과 선택</option>
        <option value="01">디지털산업디자인학과</option>
        <option value="02">시각디자인과</option>
        <option value="03">건축학과</option>
        <option value="04">주얼리디자인학과</option>
        <option value="05">기계설계학과</option>
        <option value="06">멀티미디어디자인학과</option>
        <option value="07">기계자동차학과</option>
        <option value="08">컴퓨터전자공학과</option>
        <option value="09">토목공학과</option>
        <option value="10">산업경영공학과</option>
        <option value="11">비즈니스영어과</option>
        <option value="12">컴퓨터소프트웨어학과</option>
        <option value="13">실내건축과</option>
        <option value="14">방송영상미디어학과</option>
        <option value="15">메카트로닉스공학과</option>
        <option value="16">정보통신공학과</option>
        <option value="17">비서학과</option>
        <option value="18">건설안전공학과</option>
        <option value="19">리빙세라믹디자인학과</option>
        <option value="20">웹툰만화창작학과</option>
        <option value="21">방송연예과</option>
        <option value="22">관광서비스경영학과</option>
        <option value="23">중국어과</option>
        <option value="25">도시디자인학과</option>
        <option value="26">비즈니스일본어과</option>
        <option value="27">사회복지학과</option>
        <option value="28">세무회계학과</option>
        <option value="29">방송연예과(방송연기전공)</option>
        <option value="30">방송연예과(방송분장전공)</option>
        <option value="31">중국어과(cs-중국어서비스전공)</option>
        <option value="32">비즈니스중국어과</option>
        <option value="32">중국어과(비즈니스중국어전공)</option>
        <option value="33">사회복지과(사회복지전공)</option>
        <option value="34">사회복지과(아동보육전공)</option>
        <option value="35">융합기계공학과</option>
        <option value="36">게임&amp;VR디자인학과</option>
        <option value="37">방송뷰티메이크업과</option>
        <option value="38">방송연예과(뮤지컬전공)</option>
        <option value="39">방송연예과(K-POP전공)</option>
        <option value="40">방송뷰티학과(메이크업헤어전공)</option>
        <option value="41">방송뷰티학과(스타일리스트전공)</option>
        <option value="42">글로벌항공서비스학과</option>
        <option value="43">휴먼사회복지학과</option>
        <option value="44">방송연예과(연기전공)</option>
        <option value="45">방송연예과</option>
        <option value="62">친환경자율주행자동차학과</option>
        <option value="63">3D모델리버스엔지니어학과</option>
      </select>
      <input
        type="email"
        placeholder="이메일"
        onChange={onChange}
        name="email"
        value={email}
      />
      <input
        className={styles.pwd}
        type="password"
        placeholder="비밀번호"
        onChange={onChange}
        name="password"
        value={password}
      />
      <input
        className={styles.confirmPwd}
        type="password"
        placeholder="비밀번호 확인"
        onChange={onChange}
        name="repassword"
        value={repassword}
      />
      <span>{checkSignUp}</span>
      {/* {passwordError && (
        <div style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</div>
      )} */}
      <button className={styles.button} onClick={onSubmit}>
        가입하기
      </button>
      {/* <input className={styles.button} type="submit" value="가입하기" onClick={signUp}/> */}
      <div className={styles.login}>
        <span>계정이 있으신가요?</span>
        <Link href="/LoginPage" passHref>
          <span className={styles.loginRouting}>로그인하러가기~</span>
        </Link>
      </div>
    </form>
  );
}

export default SignUpForm;
