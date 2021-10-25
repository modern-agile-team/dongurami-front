import axios from 'apis/index';

export function getData(searchItem, no) {
  return axios.get(
    `api/board/promotion/club?category=${searchItem}&lastNum=${no}`
  );
}

export function getBoardData(no) {
  return axios.get(
    `/api/board/promotion/club?sort=inDate&order=desc&lastNum=${no}`
  );
}

export function getSearchData(type, keyword, no) {
  return axios.get(
    `api/search/promotion/category?type=${type}&keyword=${keyword}&sort=inDate&order=desc&lastNum=${no}`
  );
}

export function getBoardPost(postId) {
  return axios.get(`api/board/promotion/${postId}`);
}

export function putPost(postId, title, description, images) {
  return axios.put(`api/board/promotion/${postId}`, {
    title,
    description,
    images
  });
}

export function deletePost(postId) {
  return axios.delete(`api/board/promotion/659`);
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
