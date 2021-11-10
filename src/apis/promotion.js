import axios from 'apis/index';
import post from 'redux/slices/post';

export function getData(searchItem, no) {
  return axios.get(
    `api/board/promotion/club?category=${searchItem}&lastNum=${no}`
  );
}

export function getBoardData(no) {
  return axios.get(
    `api/board/promotion/club?sort=inDate&order=desc&lastNum=${no}`
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
  return axios.delete(`api/board/promotion/${postId}`);
}

export function editComment(commentNo, parentCommentID, description, postId) {
  if (parentCommentID) {
    return axios.put(
      `/api/board/promotion/${postId}/${parentCommentID}/${commentNo}`,
      { description }
    );
  }
  return axios.put(`/api/board/promotion/${postId}/${commentNo}`, {
    description
  });
}

export function deleteComment(commentNo, parentCommentID, postId) {
  console.log(postId);
  if (parentCommentID) {
    return axios.delete(
      `/api/board/promotion/${postId}/${parentCommentID}/${commentNo}`
    );
  }
  return axios.delete(`api/board/promotion/${postId}/${commentNo}`);
}

export function addComment(postId, description, parentCommentID) {
  if (parentCommentID) {
    return axios.post(`/api/board/promotion/${postId}/${parentCommentID}`, {
      id: 'test1',
      description,
      url: `promotion?id=${postId}`,
      notiCategoryNum: 1
    });
  }
  return axios.post(`api/board/promotion/${postId}`, {
    id: 'test1',
    description,
    url: `promotion?id=${postId}`,
    notiCategoryNum: 0
  });
}
