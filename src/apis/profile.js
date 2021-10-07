import instance from 'apis';

export const getUserInfo = () => {
  return instance.get(`api/profile/${201816035}`);
};
