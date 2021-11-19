import axios from 'apis/index';

const api = {
  getPost: (category, pid, clubNum) => {
    if (category === 'clubNotice') {
      return axios.get(`/api/club/board/clubNotice/${clubNum}/${pid}`);
    }
    return axios.get(`/api/board/${category}/${pid}`);
  },
  deletePost: (category, pid, clubNum) => {
    if (category === 'clubNotice') {
      return axios.delete(`/api/club/board/clubNotice/${clubNum}/${pid}`);
    }
    if (category === 'clubActivity') {
      return axios.delete(`/api/club/board/clubActivity/${clubNum}/${pid}`);
    }
    return axios.delete(`/api/board/${category}/${pid}`);
  },
  likePost: (pid) => {
    return axios.patch(`/api/emotion/liked/board/${pid}`);
  },
  unLikePost: (pid) => {
    return axios.patch(`/api/emotion/unliked/board/${pid}`);
  },
  postComment: ({ category, pid, id, description, parentCommentID, clubNum }) => {
    if (category === 'clubNotice') {
      if (parentCommentID) {
        return axios.post(`/api/club/board/clubNotice/${clubNum}/${pid}/${parentCommentID}`, {
          id, description, url: `clubhome/${clubNum}/notice/${pid}`, notiCategoryNum: 1
        });
      } else {
        return axios.post(`/api/club/board/clubNotice/${clubNum}/${pid}`, {
          id, description, url: `clubhome/${clubNum}/notice/${pid}`, notiCategoryNum: 0
        });
      }
    }
    if (parentCommentID) {
      return axios.post(`/api/board/${category}/${pid}/${parentCommentID}`, {
        id, description, url: `${category}/${pid}`, notiCategoryNum: 1
      });
    } else {
      return axios.post(`/api/board/${category}/${pid}`, {
        id, description, url: `${category}/${pid}`, notiCategoryNum: 0
      });
    }
  },
  putComment: ({ category, pid, commentID, description, parentCommentID, clubNum }) => {
    if (category === 'clubNotice') {
      if (parentCommentID) {
        return axios.put(`/api/club/board/clubNotice/${clubNum}/${pid}/${parentCommentID}/${commentID}`, { description });
      } else {
        return axios.put(`/api/club/board/clubNotice/${clubNum}/${pid}/${commentID}`, { description });
      }
    }
    if (parentCommentID) {
      return axios.put(`/api/board/${category}/${pid}/${parentCommentID}/${commentID}`, { description });
    } else {
      return axios.put(`/api/board/${category}/${pid}/${commentID}`, { description });
    }
  },
  deleteComment: ({ category, pid, commentID, parentCommentID, clubNum }) => {
    if (category === 'clubNotice') {
      if (parentCommentID) {
        return axios.delete(`/api/club/board/clubNotice/${clubNum}/${pid}/${parentCommentID}/${commentID}`);
      } else {
        return axios.delete(`/api/club/board/clubNotice/${clubNum}/${pid}/${commentID}`);
      }
    }
    if (parentCommentID) {
      return axios.delete(`/api/board/${category}/${pid}/${parentCommentID}/${commentID}`);
    } else {
      return axios.delete(`/api/board/${category}/${pid}/${commentID}`);
    }
  },
  likeComment: ({ commentID, parentCommentID }) => {
    if (parentCommentID) {
      return axios.patch(`/api/emotion/liked/reply-comment/${commentID}`);
    }
    return axios.patch(`/api/emotion/liked/comment/${commentID}`);
  },
  unLikeComment: ({ commentID, parentCommentID }) => {
    if (parentCommentID) {
      return axios.patch(`/api/emotion/unliked/reply-comment/${commentID}`);
    }
    return axios.patch(`/api/emotion/unliked/comment/${commentID}`);
  }
}

export default api;
