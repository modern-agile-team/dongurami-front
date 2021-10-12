import axios from 'apis/index';

export function getDatas() {
  return axios.get(`/api/club/list`);
}
