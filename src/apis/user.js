import instance from 'apis';

export const postFindPW = (data) => {
  return instance.post(`api/forgot-password`, data);
};
