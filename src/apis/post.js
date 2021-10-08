import axios from 'apis/index';

const api = {
  getPost: (category, pid) => {
    return axios.get(`/api/board/${category}/${pid}`)
  },
  deletePost: (category, pid) => {
    return axios.delete(`/api/board/${category}/${pid}`)
  },
  postComment: ({ category, pid, id, description, parentCommentID }) => {
    if (parentCommentID) {
      return axios.post(`/api/board/${category}/${pid}/${parentCommentID}`, { id, description });
    } else {
      return axios.post(`/api/board/${category}/${pid}`, { id, description });
    }
  },
  putComment: ({ category, pid, commentID, description, parentCommentID }) => {
    if (parentCommentID) {
      return axios.put(`/api/board/${category}/${pid}/${parentCommentID}/${commentID}`, { description });
    } else {
      return axios.put(`/api/board/${category}/${pid}/${commentID}`, { description });
    }
  },
  deleteComment: ({ category, pid, commentID, parentCommentID }) => {
    if (parentCommentID) {
      return axios.delete(`/api/board/${category}/${pid}/${parentCommentID}/${commentID}`);
    } else {
      return axios.delete(`/api/board/${category}/${pid}/${commentID}`);
    }
  }
}

export default api;
