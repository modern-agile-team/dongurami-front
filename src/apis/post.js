import axios from 'apis/index';

const api = {
  getPost: (category, pid) => {
    return axios.get(`/api/board/${category}/${pid}`)
  },
  deletePost: (category, pid) => {
    return axios.delete(`/api/board/${category}/${pid}`)
  },
  postComment: (category, pid, id, description) => {
    return axios.post(`/api/board/${category}/${pid}`, { id, description });
  }
}

export default api;
