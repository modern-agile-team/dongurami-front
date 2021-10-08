import instance from 'apis';

// 동아리 정보 불러오기
export const getMember = (params) => {
  return instance.get(`api/club/admin-option/${params}`);
};

// 가입 승인하기
export const postApply = (data, params) => {
  return instance.post(
    `api/club/admin-option/${params}/accept-applicant`,
    data
  );
};

// 가입 거절하기
export const putApply = (data, params) => {
  return instance.put(`api/club/admin-option/${params}/reject-applicant`, data);
};

// 회장 양도
export const putLeader = (data, params) => {
  return instance.put(`api/club/admin-option/${params}/leader`, data);
};

// 권한 변경
export const putAuth = (data, params) => {
  return instance.put(`api/club/admin-option/${params}/admin-functions`, data);
};
