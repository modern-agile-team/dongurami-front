import instance from 'apis';

export const getUserInfo = (id) => {
  return instance.get(`api/profile/${id}`);
};

export const modifyInfo = (id, body) => {
  return instance.put(`api/profile/${id}`, body);
};

export const getScraps = (id, clubNum) => {
  return instance.get(`api/my-page/${id}/personal/${clubNum}`);
};

export const getPost = (id, clubNum, boardNum) => {
  return instance.get(`api/my-page/${id}/personal/${clubNum}/${boardNum}`);
};

export const addPost = (id, clubNum, body) => {
  return instance.post(`api/my-page/${id}/personal/${clubNum}`, body);
};
