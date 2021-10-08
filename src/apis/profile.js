import instance from 'apis';

export const getUserInfo = (id) => {
  return instance.get(`/api/profile/${id}`);
};
