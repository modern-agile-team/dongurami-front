import instance from 'apis';

// 알람 불러오기
export const getAlarm = () => {
  return instance.get(`api/notification/entire`);
};

// 알람 전체 삭제
export const deleteAllAlarm = () => {
  return instance.put(`api/notification/entire`);
};

// 알람 하나 삭제
export const deleteOneAlarm = (data) => {
  return instance.patch(`api/notification/${data}`);
};

// 동아리 가입 결과 알림 API
export const sendClubJoinResult = (body, clubNum) => {
  console.log(body, clubNum);
  return instance.post(`api/notification/join-club/result/${clubNum}`, body);
};
