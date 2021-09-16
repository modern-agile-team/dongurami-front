import Link from "next/link";
import styles from "../../styles/User/SignUp/SignUpForm.module.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

function SignUpForm() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [names, setNames] = useState("");
  const [email, setEmail] = useState("");
  const [major, setMajor] = useState("");
  const [checkSignUp, setCheckSignUp] = useState("");
  const [emailCheck, setEmailCheck] = useState(false);
  const [majorNum, setMajorNum] = useState("");

  const majorCategory = [
    { value: "01", label: "디지털산업디자인학과" },
    { value: "02", label: "시각디자인과" },
    { value: "03", label: "건축학과" },
    { value: "04", label: "주얼리디자인학과" },
    { value: "05", label: "기계설계학과" },
    { value: "06", label: "멀티미디어디자인학과" },
    { value: "07", label: "기계자동차학과" },
    { value: "08", label: "컴퓨터전자공학과" },
    { value: "09", label: "토목공학과" },
    { value: "10", label: "산업경영공학과" },
    { value: "11", label: "비즈니스영어과" },
    { value: "12", label: "컴퓨터소프트웨어학과" },
    { value: "13", label: "실내건축과" },
    { value: "14", label: "방송영상미디어학과" },
    { value: "15", label: "메카트로닉스공학과" },
    { value: "16", label: "정보통신공학과" },
    { value: "17", label: "비서학과" },
    { value: "18", label: "건설안전공학과" },
    { value: "19", label: "리빙세라믹디자인학과" },
    { value: "20", label: "웹툰만화창작학과" },
    { value: "21", label: "방송연예과" },
    { value: "22", label: "관광서비스경영학과" },
    { value: "23", label: "중국어과" },
    { value: "25", label: "도시디자인학과" },
    { value: "26", label: "비즈니스일본어과" },
    { value: "27", label: "사회복지학과" },
    { value: "28", label: "세무회계학과" },
    { value: "29", label: "방송연예과(방송연기전공)" },
    { value: "30", label: "방송연예과(방송분장전공)" },
    { value: "31", label: "중국어과(cs-중국어서비스전공)" },
    { value: "32", label: "중국어과(비즈니스)" },
    { value: "33", label: "사회복지과(사회복지전공)" },
    { value: "34", label: "사회복지과(아동보육전공)" },
    { value: "35", label: "융합기계공학과" },
    { value: "36", label: "게임&amp;VR디자인학과" },
    { value: "37", label: "방송뷰티메이크업과" },
    { value: "38", label: "방송연예과(뮤지컬전공)" },
    { value: "39", label: "방송연예과(K-POP전공)" },
    { value: "40", label: "방송뷰티학과(메이크업헤어전공)" },
    { value: "41", label: "방송뷰티학과(스타일리스트전공)" },
    { value: "42", label: "글로벌항공서비스학과" },
    { value: "43", label: "휴먼사회복지학과" },
    { value: "44", label: "방송연예과(연기전공)" },
    { value: "45", label: "방송연예과" },
    { value: "62", label: "친환경자율주행자동차학과" },
    { value: "63", label: "3D모델리버스엔지니어학과" },
  ];

  const onChange = (e) => {
    const { name, value } = e.target;

    if (name === "id") setId(value);
    if (name === "password") setPassword(value);
    if (name === "repassword") setRepassword(value);
    if (name === "names") setNames(value);
    if (name === "email") setEmail(value);
    if (name === "major") {
      setMajorNum(value);
      setMajor(majorCategory.find((el) => el.value === value)?.label);
    }
  };

  useEffect(() => {
    console.log(major);
  }, [major]);

  const checkID = () => {
    let majorNum = id[4] + id[5];
    if (majorNum === 24) {
      majorNum = "";
    } else if (majorNum > 45 && majorNum < 62) {
      majorNum = "";
    } else if (majorNum > 63) {
      majorNum = "";
    }
    setMajorNum(majorNum);
    setMajor(majorCategory.find((el) => el.value === majorNum)?.label);
  };

  const FeedbackMessage = () => {
    return (
      <div className={styles.feedback}>
        &#8251;&#32;자신의 학과가 맞는지 확인해 주세요.
      </div>
    );
  };

  const checkEmail = (e) => {
    const regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    let result = regExp.test(e.target.value);
    setEmailCheck(result);
  };

  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();
    if (id === "") {
      setCheckSignUp("학번을 입력해 주세요.");
    } else if (id.length !== 9) {
      setCheckSignUp("학번은 9자이어야 합니다.");
    } else if (names === "") {
      setCheckSignUp("이름을 입력해주세요.");
    } else if (names.includes(" ")) {
      setCheckSignUp("이름엔 공백이 없어야 합니다.");
    } else if (major === "") {
      setCheckSignUp("학과를 선택해주세요.");
    } else if (email === "") {
      setCheckSignUp("이메일을 입력해 주세요.");
    } else if (emailCheck === false) {
      setCheckSignUp("이메일 형식을 맞춰 입력해 주세요.");
    } else if (password === "") {
      setCheckSignUp("비밀번호를 입력해 주세요.");
    } else if (password.length < 8) {
      setCheckSignUp("비밀번호는 8자 이상이어야 합니다.");
    } else if (password !== repassword) {
      setCheckSignUp("비밀번호가 맞지 않습니다.");
    } else {
      axios("http://3.36.72.145:8080/api/sign-up", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=utf-8",
        },
        data: {
          id,
          password,
          name: names,
          email,
          major,
        },
      })
        .then((res) => alert(res.data.msg), router.push("/LoginPage"))
        .catch((err) => alert(err.response.data.msg));
    }
  };

  return (
    <form className={styles.form}>
      <h1>회원가입</h1>
      <input
        className={styles.inputNum}
        type="number"
        placeholder="학번&#32;&#40;아이디로 사용됩니다.&#41;"
        onChange={onChange}
        name="id"
        value={id}
        onBlur={checkID}
      />
      <input
        type="text"
        placeholder="이름"
        onChange={onChange}
        name="names"
        value={names}
      />
      <select
        className={styles.select}
        onChange={onChange}
        name="major"
        value={majorNum}
      >
        {majorCategory.map((majorCategory, index) => (
          <option id={index} key={index} value={majorCategory.value}>
            {majorCategory.label}
          </option>
        ))}
      </select>
      {major === undefined || majorNum === "" ? "" : FeedbackMessage()}
      <input
        type="email"
        placeholder="이메일"
        onChange={onChange}
        name="email"
        value={email}
        onBlur={checkEmail}
      />
      <input
        className={styles.pwd}
        type="password"
        placeholder="비밀번호&#32;&#40;최소 8자리 이상&#41;"
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
      <span className={styles.notSame}>{checkSignUp}</span>
      <button className={styles.button} onClick={onSubmit}>
        가입하기
      </button>
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
