import axios from 'apis/index';

export function getData(searchItem) {
  return axios.get(`api/board/promotion/club?category=${searchItem}`);
}

export function getBoardData() {
  return axios.get(`api/board/promotion/club`);
}

export function getSearchData(type, keyword) {
  return axios.get(`api/search/promotion?type=${type}&keyword=${keyword}`);
}

export function getPost(postId) {
  return axios.get(`api/board/promotion/${postId}`);
}

export function deletePost(postId) {
  return axios.delete(`api/board/promotion/${postId}`);
}

export function editComment(postId, commentNo, description) {
  return axios.put(`api/board/promotion/${postId}/${commentNo}`, {
    description
  });
}

export function editReplyComment(
  postId,
  commentNo,
  replyCommentNo,
  description
) {
  return axios.put(
    `api/board/promotion/${postId}/${commentNo}/${replyCommentNo}`,
    {
      description
    }
  );
}

export function deleteComment(postId, commentNo) {
  return axios.delete(`api/board/promotion/${postId}/${commentNo}`);
}

export function deleteReplyComment(postId, commentNo, replyCommentNo) {
  return axios.delete(
    `api/board/promotion/${postId}/${commentNo}/${replyCommentNo}`
  );
}

export function addComment(postId, description) {
  return axios.post(`api/board/promotion/${postId}`, {
    id: 'test1',
    description
  });
}

export function replyAddComment(postId, parentCommentId, description) {
  return axios.post(`api/board/promotion/${postId}/${parentCommentId}`, {
    id: 'test1',
    description
  });
}
