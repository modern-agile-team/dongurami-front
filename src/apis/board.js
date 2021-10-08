import axios from 'apis/index';

export function getPosts(category, { sort, order }) {
  return axios.get(`/api/${category}/${sort}/${order}`);
}

export function searchPosts(category, params) {
  const queryString = new URLSearchParams(params).toString();
  return axios.get(`/api/search/${category}/${queryString}`);
}
