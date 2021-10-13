import axios from 'apis/index';

export function getData(searchItem) {
  return axios.get(`api/board/promotion/club?category=${searchItem}`);
}

export function getBoardData() {
  return axios.get(`api/board/promotion/club`);
}
