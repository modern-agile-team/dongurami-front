import instance from 'apis';

// 알람 불러오기
export const getAlarm = () => {
  return instance.get(`api/notification/entire`);
};

// 알람 전체 삭제
export const putAlarm = () => {
  return instance.put(`api/notification/entire`);
};

// 알람 하나 삭제
export const patchAlarm = (data) => {
  return instance.patch(`api/notification/${data}`);
};
