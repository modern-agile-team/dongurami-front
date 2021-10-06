import axios from 'apis/index';

export function getPosts({ category, sort, order }) {
  return axios.get(`/api/board/${category}/${sort}/${order}`);
}

export function searchPosts(params) {
  const queryString = new URLSearchParams(params).toString();
  return axios.get(`/api/search?${queryString}`);
}
