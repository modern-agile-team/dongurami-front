import instance from 'apis';

const getUrlParams = () => {
  if (typeof window !== 'undefined') {
    return new URL(window.location.href).searchParams.get('no');
  }
};

// 동아리 정보 불러오기
export const getInfo = () => {
  return instance.get(`api/club/home/${getUrlParams()}`);
};

// 동아리 소개글 수정
export const putIntroDesc = (data) => {
  return instance.put(`api/club/home/${getUrlParams()}`, data);
};

// 지원서 불러오기
export const getApply = () => {
  return instance.get(`api/club/application/${getUrlParams()}`);
};

// 지원서 질문 추가
export const postApply = (data) => {
  return instance.post(`api/club/application/${getUrlParams()}`, data);
};

// 지원서 질문 삭제
export const deleteApply = (data, question) => {
  return instance.delete(
    `api/club/application/${getUrlParams()}/${question}`,
    data
  );
};

// 지원서 질문 수정
export const putApply = (data, no) => {
  return instance.put(`api/club/application/${getUrlParams()}/${no}`, data);
};

// 지원서 제출
export const postSubmit = (data) => {
  return instance.post(`api/club/application/${getUrlParams()}/answer`, data);
};

// 후기 불러오기
export const getReview = () => {
  return instance.get(`api/club/review/${getUrlParams()}`);
};

// 후기 제출하기
export const postReview = (data) => {
  return instance.post(`api/club/review/${getUrlParams()}`, data);
};

// 후기 삭제하기
export const deleteReview = (reviewNo) => {
  return instance.delete(`api/club/review/${getUrlParams()}/${reviewNo}`);
};

// 후기 수정하기
export const putReview = (data, reviewNo) => {
  return instance.put(`api/club/review/${getUrlParams()}/${reviewNo}`, data);
};
