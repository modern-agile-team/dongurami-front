import axios from 'apis/index';

export function getDatas() {
  return axios.get(`api/club/list`);
}

export function searchDatas(data) {
  console.log(data);
  return axios.get(`api/search/club-list/keyword?name=${data}`);
}
