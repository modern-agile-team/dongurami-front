import instance from 'apis';

//동아리별 라우팅 해줘야됨
export const getInfo = (today) => {
  return instance.get(`api/club/schedule/1/${today.format('YYYY-MM')}`);
};

//일정추가
export const addSchedule = (body) => {
  return instance.post(`api/club/schedule/1`, body);
};

//일정삭제
export const deleteSchedule = (el) => {
  return instance.delete(`api/club/schedule/1/${el.no}`);
};

//일정수정
export const modifySchedule = (no, body) => {
  return instance.put(`api/club/schedule/1/${no}`, body);
};

//중요도설정
export const importantSchedule = (el, body) => {
  return instance.patch(`api/club/schedule/1/${el.no}`, body);
};
