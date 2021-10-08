import axios from 'apis/index';

export function getPosts(category, params) {
  const queryString = new URLSearchParams(params).toString();
  if (category === 'clubNotice') {
    return axios.get(`/api/club/board/clubNotice/2?${queryString}`);
  }
  return axios.get(`/api/board/${category}?${queryString}`);
}

export function searchPosts(category, params) {
  let queryString = new URLSearchParams(params).toString();
  if (category === 'clubNotice') {
    queryString = new URLSearchParams({ clubno: 2, ...params }).toString();
    return axios.get(`/api/search/clubNotice?${queryString}`);
  }
  return axios.get(`/api/search/${category}?${queryString}`);
}

export function postPost(category, body) {
  return axios.post(`/api/board/${category}`, { id: 'test1', clubno: 1, ...body });
}
