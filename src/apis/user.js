import instance from 'apis';

//비밀번호 찾기 - 이메일 전송
export const postFindPW = (data) => {
  return instance.post(`api/forgot-password`, data);
};

//비밀번호 찾기 - 새 비밀번호 설정
export const patchResetPW = (data, userToken) => {
  return instance.patch(`api/find-password/${userToken}`, data);
};

//아이디 찾기
export const postFindID = (data) => {
  return instance.post(`api/find-id`, data);
};

//로그인
export const postLogin = (data) => {
  return instance.post(`api/login`, data);
};

//회원가입
export const postSignUp = (data) => {
  return instance.post(`api/sign-up`, data);
};

// user 정보 가져오기
export const getUserData = () => {
  return instance.get('api/student');
};

//비밀번호 변경
export const patchChangePW = (data) => {
  return instance.patch('api/change-password', data);
};

//oAuth
export const getNaverOauth = (token) => {
  return instance.get(`api/naver/login?token=${token}`);
};

//네이버로 회원가입
export const postNaverSignUp = (data) => {
  return instance.post(`api/naver/sign-up`, data);
};
