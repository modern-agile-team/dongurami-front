import instance from 'apis';

export const getUserInfo = (id) => {
  return instance.get(`/api/profile/${id}`);
};

export const modifyInfo = (id, body) => {
  return instance.put(`/api/profile/${id}`, body);
};

export const getScraps = (id, clubNum) => {
  return instance.get(`/api/my-page/${id}/personal/${clubNum}`);
};
