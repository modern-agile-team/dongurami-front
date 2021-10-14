import axios from 'apis/index';

export function getPosts({ category, ...params }) {
  const queryString = new URLSearchParams(params).toString();
  if (category === 'clubNotice') {
    return axios.get(`/api/club/board/clubNotice/2?${queryString}`);
  }
  if (category === 'clubActivity') {
    return axios.get(`/api/club/board/clubActivity/2?${queryString}`);
  }
  return axios.get(`/api/board/${category}?${queryString}`);
}

export function searchPosts({ category, ...params }) {
  let queryString = new URLSearchParams(params).toString();
  if (category === 'clubNotice') {
    queryString = new URLSearchParams({ clubno: 2, ...params }).toString();
    return axios.get(`/api/search/clubNotice?${queryString}`);
  }
  return axios.get(`/api/search/${category}?${queryString}`);
}

export function postPost(category, body) {
  if (category === 'clubNotice') {
    return axios.post(`/api/club/board/clubNotice/2`, { id: 'test1', clubNo: 2, ...body });
  }
  if (category === 'clubActivity') {
    return axios.post(`/api/club/board/clubActivity/2`, { id: 'test1', clubNo: 2, ...body });
  }
  return axios.post(`/api/board/${category}`, { id: 'test1', clubNo: 2, ...body });
}

export function putPost(category, pid, body) {
  if (category === 'clubNotice') {
    return axios.put(`/api/club/board/clubNotice/2/${pid}`, body)
  }
  return axios.put(`/api/board/${category}/${pid}`, body);
}
