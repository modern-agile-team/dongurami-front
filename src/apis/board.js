import axios from 'apis/index';

export function getPosts({ category, clubNum, ...params }) {
  const queryString = new URLSearchParams(params).toString();
  if (category === 'clubNotice') {
    return axios.get(`/api/club/board/clubNotice/${clubNum}?${queryString}`)
      .catch(() => alert('동아리에 가입된 사람만 접근할 수 있습니다!'))
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
    return axios.post(`/api/club/board/clubNotice/${clubNum}`, { id: 'test1', ...body });
  }
  if (category === 'clubActivity') {
    return axios.post(`/api/club/board/clubActivity/${clubNum}`, { id: 'test1', ...body });
  }
  return axios.post(`/api/board/${category}`, { ...body });
}

export function putPost(category, pid, body) {
  if (category === 'clubNotice') {
    return axios.put(`/api/club/board/clubNotice/2/${pid}`, body)
  }
  return axios.put(`/api/board/${category}/${pid}`, body);
}
