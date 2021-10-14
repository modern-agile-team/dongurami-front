import instance from 'apis';

// 동아리 정보 불러오기
export const getInfo = (params) => {
  return instance.get(`api/club/home/${params}`);
};

// 동아리 소개글 수정
export const putIntroDesc = (data, params) => {
  return instance.patch(`api/club/home/${params}`, data);
};

// 지원서 불러오기
export const getApply = (params) => {
  return instance.get(`api/club/application/${params}`);
};

// 지원서 질문 추가
export const postApply = (data, params) => {
  return instance.post(`api/club/application/${params}`, data);
};

// 지원서 질문 삭제
export const deleteApply = (data, question, params) => {
  return instance.delete(`api/club/application/${params}/${question}`, data);
};

// 지원서 질문 수정
export const putApply = (data, no, params) => {
  return instance.put(`api/club/application/${params}/${no}`, data);
};

// 지원서 제출
export const postSubmit = (data, params) => {
  return instance.post(`api/club/application/${params}/answer`, data);
};

// 후기 불러오기
export const getReview = (params) => {
  return instance.get(`api/club/review/${params}`);
};

// 후기 제출하기
export const postReview = (data, params) => {
  return instance.post(`api/club/review/${params}`, data);
};

// 후기 삭제하기
export const deleteReview = (reviewNo, params) => {
  return instance.delete(`api/club/review/${params}/${reviewNo}`);
};

// 후기 수정하기
export const putReview = (data, reviewNo, params) => {
  return instance.put(`api/club/review/${params}/${reviewNo}`, data);
};
