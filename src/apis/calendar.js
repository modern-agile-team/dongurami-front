import instance from 'apis';

export const getInfo = (clubNo, today) => {
  return instance.get(`api/club/schedule/${clubNo}/${today}`);
};

//일정추가
export const addSchedule = (clubNo, body) => {
  return instance.post(`api/club/schedule/${clubNo}`, body);
};

//일정삭제
export const deleteSchedule = (clubNo, el) => {
  return instance.delete(`api/club/schedule/${clubNo}/${el.no}`);
};

//일정수정
export const modifySchedule = (clubNo, no, body) => {
  return instance.put(`api/club/schedule/${clubNo}/${no}`, body);
};

//중요도설정
export const importantSchedule = (clubNo, el, body) => {
  return instance.patch(`api/club/schedule/${clubNo}/${el.no}`, body);
};
