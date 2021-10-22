import axios from 'apis/index';

export function getPosts({ category, clubNum, ...params }) {
  const queryString = new URLSearchParams(params).toString();
  if (category === 'clubNotice') {
    return axios.get(`/api/club/board/clubNotice/${clubNum + 1}?${queryString}`);
  }
  if (category === 'clubActivity') {
    return axios.get(`/api/club/board/clubActivity/${clubNum + 1}?${queryString}`);
  }
  return axios.get(`/api/board/${category}?${queryString}`);
}

export function searchPosts({ category, clubNum, ...params }) {
  let queryString = new URLSearchParams(params).toString();
  if (category === 'clubNotice') {
    queryString = new URLSearchParams({ clubno: clubNum + 1, ...params }).toString();
    return axios.get(`/api/search/clubNotice?${queryString}`);
  }
  return axios.get(`/api/search/${category}?${queryString}`);
}

export function postPost(category, clubNum, body) {
  if (category === 'clubNotice') {
    return axios.post(`/api/club/board/clubNotice/${clubNum + 1}`, { id: 'test1', ...body });
  }
  if (category === 'clubActivity') {
    return axios.post(`/api/club/board/clubActivity/${clubNum + 1}`, { id: 'test1', ...body });
  }
  return axios.post(`/api/board/${category}`, { ...body });
}

export function putPost(category, pid, body) {
  if (category === 'clubNotice') {
    return axios.put(`/api/club/board/clubNotice/2/${pid}`, body)
  }
  return axios.put(`/api/board/${category}/${pid}`, body);
}
