import instance from 'apis/index';
import axios from 'axios';
import setInterceptors from './common/interceptors';

export const getUserInfo = (id, token) => {
  const inst = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
    headers: {
      'x-auth-token': token
    }
  });
  return setInterceptors(inst).get(`api/profile/${id}`);
};

export const modifyInfo = (id, body) => {
  return instance.put(`/api/profile/${id}`, body);
};

export const getScraps = (id, clubNum) => {
  return instance.get(`/api/my-page/${id}/personal/${clubNum}`);
};

export const getBPost = (id, clubNum, boardNum) => {
  return instance.get(`/api/my-page/${id}/personal/${clubNum}/${boardNum}`);
};

export const getSPost = (id, clubNum, scrapNum) => {
  return instance.get(
    `/api/my-page/${id}/personal/scrap/${clubNum}/${scrapNum}`
  );
};

export const addPost = (id, clubNum, body) => {
  return instance.post(`/api/my-page/${id}/personal/${clubNum}`, body);
};

export const modifyBPost = (id, clubNum, boardNum, body) => {
  return instance.put(
    `/api/my-page/${id}/personal/${clubNum}/${boardNum}`,
    body
  );
};

export const modifySPost = (id, clubNum, scrapNum, body) => {
  return instance.put(
    `/api/my-page/${id}/personal/scrap/${clubNum}/${scrapNum}`,
    body
  );
};

export const addScrapPost = (clubNum, boardNum, body) => {
  return instance.post(
    `/api/club/board/clubActivity/personal/scrap/${clubNum}/${boardNum}`,
    body
  );
};

export const deleteBPost = (id, clubNum, boardNum) => {
  return instance.delete(`/api/my-page/${id}/personal/${clubNum}/${boardNum}`);
};

export const deleteSPost = (id, clubNum, boardNum) => {
  return instance.delete(
    `/api/my-page/${id}/personal/scrap/${clubNum}/${boardNum}`
  );
};

export const quitClub = (id, clubNum) => {
  return instance.delete(`/api/my-page/${id}/personal/${clubNum}`);
};
