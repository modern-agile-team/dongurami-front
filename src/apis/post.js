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
  likePost: ({ pid, url }) => {
    return axios.patch(`/api/emotion/liked/board/${pid}`, {
      url: url.slice(1),
      notiCategoryNum: 9
    });
  },
  unLikePost: (pid) => {
    return axios.patch(`/api/emotion/unliked/board/${pid}`);
  },
  postComment: ({
    category,
    pid,
    id,
    description,
    parentCommentID,
    clubNum,
    hiddenFlag
  }) => {
    if (category === 'clubNotice') {
      if (parentCommentID) {
        return axios.post(
          `/api/club/board/${clubNum}/comment/reply-comment?boardCategory=clubNotice&boardNum=${pid}&cmtNum=${parentCommentID}`,
          {
            description,
            hiddenFlag
          }
        );
      } else {
        return axios.post(
          `/api/club/board/${clubNum}/comment?boardCategory=clubNotice&boardNum=${pid}`,
          {
            description,
            hiddenFlag
          }
        );
      }
    }
    if (parentCommentID) {
      return axios.post(
        `/api/comment/reply-comment?boardCategory=${category}&boardNum=${pid}&cmtNum=${parentCommentID}`,
        {
          description,
          hiddenFlag
        }
      );
    } else {
      return axios.post(
        `/api/comment?boardCategory=${category}&boardNum=${pid}`,
        {
          description,
          hiddenFlag
        }
      );
    }
  },
  putComment: ({
    category,
    pid,
    commentID,
    description,
    parentCommentID,
    clubNum,
    hiddenFlag
  }) => {
    if (category === 'clubNotice') {
      if (parentCommentID) {
        return axios.put(
          `/api/club/board/${clubNum}/comment/reply-comment/?boardCategory=clubNotice&boardNum=${pid}&cmtNum=${parentCommentID}&replyCmtNum=${commentID}`,
          { description, hiddenFlag }
        );
      } else {
        return axios.put(
          `/api/club/board/${clubNum}/comment?boardCategory=clubNotice&boardNum=${pid}&cmtNum=${commentID}`,
          { description, hiddenFlag }
        );
      }
    }
    if (parentCommentID) {
      return axios.put(
        `/api/comment/reply-comment?boardCategory=${category}&boardNum=${pid}&cmtNum=${parentCommentID}&replyCmtNum=${commentID}`,
        { description, hiddenFlag }
      );
    } else {
      return axios.put(
        `/api/comment?boardCategory=${category}&boardNum=${pid}&cmtNum=${commentID}`,
        {
          description,
          hiddenFlag
        }
      );
    }
  },
  deleteComment: ({ category, pid, commentID, parentCommentID, clubNum }) => {
    if (category === 'clubNotice') {
      if (parentCommentID) {
        return axios.delete(
          `/api/club/board/${clubNum}/comment/reply-comment/?boardCategory=clubNotice&boardNum=${pid}&cmtNum=${parentCommentID}&replyCmtNum=${commentID}`
        );
      } else {
        return axios.delete(
          `/api/club/board/${clubNum}/comment?boardCategory=clubNotice&boardNum=${pid}&cmtNum=${commentID}`
        );
      }
    }
    if (parentCommentID) {
      return axios.delete(
        `/api/comment/reply-comment?boardCategory=${category}&boardNum=${pid}&cmtNum=${parentCommentID}&replyCmtNum=${commentID}`
      );
    } else {
      return axios.delete(
        `/api/comment?boardCategory=${category}&boardNum=${pid}&cmtNum=${commentID}`
      );
    }
  },
  likeComment: ({ commentID, parentCommentID, url }) => {
    if (parentCommentID) {
      return axios.patch(`/api/emotion/liked/reply-comment/${commentID}`, {
        url: url.slice(1),
        notiCategoryNum: 11
      });
    }
    return axios.patch(`/api/emotion/liked/comment/${commentID}`, {
      url: url.slice(1),
      notiCategoryNum: 10
    });
  },
  unLikeComment: ({ commentID, parentCommentID }) => {
    if (parentCommentID) {
      return axios.patch(`/api/emotion/unliked/reply-comment/${commentID}`);
    }
    return axios.patch(`/api/emotion/unliked/comment/${commentID}`);
  },
  hitPost: ({ category, pid }) => {
    return axios.patch(`/api/board/${category}/${pid}`);
  }
};

export function likeAlarm(category, boardNum) {
  return axios.post(`/api/notification/like/board/${category}/${boardNum}`, {
    notiCategoryNum: 9
  });
}

export function likeCommentAlarm(category, cmtNum) {
  return axios.post(`/api/notification/like/comment/${category}/${cmtNum}`, {
    notiCategoryNum: 10
  });
}

export default api;
