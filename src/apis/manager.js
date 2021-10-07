import instance from 'apis';

// 동아리 정보 불러오기
export const getMember = () => {
  return instance.get(`api/club/admin-option/1`);
};

// 가입 승인하기
export const postApply = (data) => {
  return instance.post(`api/club/admin-option/1/accept-applicant`, data);
};

// 지원서 질문 수정
export const putApply = (data) => {
  return instance.put(`api/club/admin-option/1/reject-applicant`, data);
};

// 회장 양도
export const putLeader = (data) => {
  return instance.put(`api/club/admin-option/1/leader`, data);
};

// 권한 변경
export const putAuth = (data) => {
  return instance.put(`api/club/admin-option/1/admin-functions`, data);
};
