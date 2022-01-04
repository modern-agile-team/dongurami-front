import React from 'react';
import styles from 'styles/User/SignUp/NaverSignUp.module.scss';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { postNaverSignUp } from 'apis/user';
import { getNaverOauth } from 'apis/user';
import { Spinner } from 'components/Common/Spinner';

export const NaverSignUp = () => {
  const [id, setId] = useState('');
  const [names, setNames] = useState('');
  const [email, setEmail] = useState('');
  const [major, setMajor] = useState('');
  const [majorNum, setMajorNum] = useState('');
  const [checkSignUp, setCheckSignUp] = useState('');
  const [uniqueId, setUniqueId] = useState();
  const [checkClientInfo, setCheckClientInfo] = useState(true);

  //네이버 oAuth의 프로필 정보 가져오기
  const UserProfile = () => {
    location.href.includes('access_token') && getUser();
  };
  const getUser = () => {
    const token = window.location.href.split('=')[1].split('&')[0];
    getNaverOauth(token)
      .then((res) => {
        router.push('/');
        localStorage.setItem('jwt', res.data.jwt);
      })
      .catch((err) => {
        if (err.response.status === 400) {
          setCheckClientInfo(false);
          setNames(err.response.data.name);
          setEmail(err.response.data.email);
          setUniqueId(err.response.data.snsId);
        } else if (err.response.status === 401) {
          alert('인증 유효시간이 지났습니다.\n재인증 해주세요.');
        }
      });
  };
  useEffect(UserProfile, []);

  const majorCategory = [
    { value: '00', label: '학과 선택' },
    { value: '01', label: '디지털산업디자인학과' },
    { value: '02', label: '시각디자인과' },
    { value: '03', label: '건축학과' },
    { value: '04', label: '주얼리디자인학과' },
    { value: '05', label: '기계설계학과' },
    { value: '06', label: '멀티미디어디자인학과' },
    { value: '07', label: '기계자동차학과' },
    { value: '08', label: '컴퓨터전자공학과' },
    { value: '09', label: '토목공학과' },
    { value: '10', label: '산업경영공학과' },
    { value: '11', label: '비즈니스영어과' },
    { value: '12', label: '컴퓨터소프트웨어학과' },
    { value: '13', label: '실내건축과' },
    { value: '14', label: '방송영상미디어학과' },
    { value: '15', label: '메카트로닉스공학과' },
    { value: '16', label: '정보통신공학과' },
    { value: '17', label: '비서학과' },
    { value: '18', label: '건설안전공학과' },
    { value: '19', label: '리빙세라믹디자인학과' },
    { value: '20', label: '웹툰만화창작학과' },
    { value: '21', label: '방송연예과' },
    { value: '22', label: '관광서비스경영학과' },
    { value: '23', label: '중국어과' },
    { value: '25', label: '도시디자인학과' },
    { value: '26', label: '비즈니스일본어과' },
    { value: '27', label: '사회복지학과' },
    { value: '28', label: '세무회계학과' },
    { value: '29', label: '방송연예과(방송연기전공)' },
    { value: '30', label: '방송연예과(방송분장전공)' },
    { value: '31', label: '중국어과(cs-중국어서비스전공)' },
    { value: '32', label: '중국어과(비즈니스)' },
    { value: '33', label: '사회복지과(사회복지전공)' },
    { value: '34', label: '사회복지과(아동보육전공)' },
    { value: '35', label: '융합기계공학과' },
    { value: '36', label: `게임&VR디자인학과` },
    { value: '37', label: '방송뷰티메이크업과' },
    { value: '38', label: '방송연예과(뮤지컬전공)' },
    { value: '39', label: '방송연예과(K-POP전공)' },
    { value: '40', label: '방송뷰티학과(메이크업헤어전공)' },
    { value: '41', label: '방송뷰티학과(스타일리스트전공)' },
    { value: '42', label: '글로벌항공서비스학과' },
    { value: '43', label: '휴먼사회복지학과' },
    { value: '44', label: '방송연예과(연기전공)' },
    { value: '45', label: '방송연예과' },
    { value: '62', label: '친환경자율주행자동차학과' },
    { value: '63', label: '3D모델리버스엔지니어학과' }
  ];

  const onChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'id':
        setId(value);
        break;
      case 'names':
        setNames(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'major':
        setMajorNum(value);
        setMajor(majorCategory.find((el) => el.value === value)?.label);
        break;
      default:
        break;
    }
  };

  const checkID = () => {
    let majorNum = id[4] + id[5];
    if (majorNum === 24) {
      majorNum = '';
    } else if (majorNum > 45 && majorNum < 62) {
      majorNum = '';
    } else if (majorNum > 63) {
      majorNum = '';
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

  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();
    if (id === '') {
      setCheckSignUp('학번을 입력해 주세요.');
    } else if (id.length !== 9) {
      setCheckSignUp('학번은 9자이어야 합니다.');
    } else if (major === '' || major === '학과 선택') {
      setCheckSignUp('학과를 선택해주세요.');
    } else {
      naverSignUp();
    }
  };

  //네이버로 회원가입 하기
  const naverSignUp = () => {
    postNaverSignUp({
      id,
      name: names,
      email,
      major,
      snsId: uniqueId
    })
      .then((res) => {
        alert('회원가입이 완료되었습니다.');
        router.push('/');
        localStorage.setItem('jwt', res.data.jwt);
      })
      .catch((err) => {
        alert(err.response.data.msg);
      });
  };

  return (
    <div className={styles.form}>
      {checkClientInfo ? (
        <Spinner />
      ) : (
        <div className={styles.container}>
          <h1>추가 정보 기입</h1>
          <p>학번을 추가 입력하면 회원가입이 완료됩니다.</p>
          <input
            className={styles.inputNum}
            type="number"
            onKeyDown={(e) =>
              (e.key === 'e' || e.key === '.') && e.preventDefault()
            }
            placeholder="학번"
            onChange={(e) => {
              onChange(e);
              checkID();
            }}
            name="id"
            value={id}
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
          {major === undefined || majorNum === '' ? '' : FeedbackMessage()}
          <span className={styles.notSame}>{checkSignUp}</span>
          <button className={styles.button} onClick={onSubmit}>
            가입하기
          </button>
        </div>
      )}
    </div>
  );
};
