import instance from "apis";

// 동아리 정보 불러오기
export const getMember = async () => {
  return await instance.get(`api/club/admin-option/1`);
};

// 가입 승인하기
export const postApply = async (data) => {
  return await instance.post(`api/club/admin-option/1/accept-applicant`, data);
};

// 지원서 질문 수정
export const putApply = async (data) => {
  return await instance.put(`api/club/admin-option/1/reject-applicant`, data);
};

// 회장 양도
export const putLeader = async (data) => {
  return await instance.put(`api/club/admin-option/1/leader`, data);
};

// 권한 변경
export const putAuth = async (data) => {
  return await instance.put(`api/club/admin-option/1/admin-functions`, data);
};
