import axios from 'apis/index';

export function getPosts({ category, clubNum, ...params }) {
  const queryString = new URLSearchParams(params).toString();
  if (category === 'clubNotice') {
    return axios.get(`/api/club/board/clubNotice/${clubNum}?${queryString}`);
  }
  if (category === 'clubActivity') {
    return axios.get(`/api/club/board/clubActivity/${clubNum}?${queryString}`);
  }
  return axios.get(`/api/board/${category}?${queryString}`);
}

export function searchPosts({ category, clubNum, ...params }) {
  let queryString = new URLSearchParams(params).toString();
  if (category === 'clubNotice') {
    queryString = new URLSearchParams({ clubno: clubNum, ...params }).toString();
    return axios.get(`/api/search/clubNotice?${queryString}`);
  }
  return axios.get(`/api/search/${category}?${queryString}`);
}

export function postPost(category, body, clubNum) {
  if (category === 'clubNotice') {
    return axios.post(`/api/club/board/clubNotice/${clubNum}`, { ...body });
  }
  if (category === 'clubActivity') {
    return axios.post(`/api/club/board/clubActivity/${clubNum}`, { ...body });
  }
  if (category === 'promotion') {
    return axios.post(`/api/board/promotion`, { clubNo: clubNum, ...body })
  }
  return axios.post(`/api/board/${category}`, { ...body });
}

export function putPost(category, pid, body) {
  if (category === 'clubNotice') {
    return axios.put(`/api/club/board/clubNotice/2/${pid}`, body)
  }
  return axios.put(`/api/board/${category}/${pid}`, body);
}
