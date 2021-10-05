import instance from "apis";

// 동아리 정보 불러오기
export const getClubInfo = async () => {
  return await instance.get(`api/club/home/1`);
};

// 동아리 소개글 수정
export const putClubIntroDesc = async (data) => {
  return await instance.put(`api/club/home/1`, data);
};

// 지원서 불러오기
export const getApply = async () => {
  return await instance.get(`api/club/application/1`);
};

// 지원서 질문 추가
export const postApply = async (data) => {
  return await instance.post(`api/club/application/1`, data);
};

// 지원서 질문 삭제
export const deleteApply = async (data, question) => {
  return await instance.delete(`api/club/application/1/${question}`, data);
};

// 지원서 질문 수정
export const putApply = async (data, no) => {
  return await instance.put(`api/club/application/1/${no}`, data);
};

// 지원서 제출
export const postSubmit = async (data) => {
  return await instance.post(`api/club/application/1/answer`, data);
};

// 후기 불러오기
export const getReview = async () => {
  return await instance.get(`api/club/review/1`);
};

// 후기 제출하기
export const postReview = async (data) => {
  return await instance.post(`api/club/review/1`, data);
};

// 후기 삭제하기
export const deleteReview = async (reviewNo) => {
  return await instance.delete(`api/club/review/1/${reviewNo}`);
};

// 후기 수정하기
export const putReview = async (data, reviewNo) => {
  return await instance.put(`api/club/review/1/${reviewNo}`, data);
};
