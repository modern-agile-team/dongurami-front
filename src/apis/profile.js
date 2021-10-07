import instance from 'apis';

// 동아리 정보 불러오기
export const getUserInfo = () => {
  return instance.get(`api/profile/${201816035}`);
};
