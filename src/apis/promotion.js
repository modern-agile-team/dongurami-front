import axios from 'apis/index';

export function getData({ searchItem }) {
  return axios.get(`api/board/promotion/${searchItem}`);
}
