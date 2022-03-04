import axios from 'apis/index';

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
  return axios
    .put(`api/board/promotion/${postId}`, {
      title,
      description
    })
    .then((response) => {
      if (response.data.success) {
        return axios.put(
          `/api/image?boardCategory=promotion&boardNum=${postId}`,
          {
            images
          }
        );
      }
    });
}

export function deletePost(postId) {
  return axios.delete(`api/board/promotion/${postId}`);
}

export function editComment(
  commentNo,
  parentCommentID,
  description,
  postId,
  hiddenFlag
) {
  if (parentCommentID) {
    return axios.put(
      `/api/comment/reply-comment?boardCategory=promotion&boardNum=${postId}&cmtNum=${parentCommentID}&replyCmtNum=${commentNo}`,
      { description, hiddenFlag }
    );
  }
  return axios.put(
    `/api/comment?boardCategory=promotion&boardNum=${postId}&cmtNum=${commentNo}`,
    {
      description,
      hiddenFlag
    }
  );
}

export function addComment(postId, description, parentCommentID, hiddenFlag) {
  if (parentCommentID) {
    return axios.post(
      `/api/comment/reply-comment?boardCategory=promotion&boardNum=${postId}&cmtNum=${parentCommentID}`,
      {
        description,
        url: `promotion?id=${postId}`,
        notiCategoryNum: 1,
        hiddenFlag
      }
    );
  }
  return axios.post(`/api/comment?boardCategory=promotion&boardNum=${postId}`, {
    description,
    url: `promotion?id=${postId}`,
    notiCategoryNum: 0,
    hiddenFlag
  });
}
export function deleteComment(commentNo, parentCommentID, postId) {
  if (parentCommentID) {
    return axios.delete(
      `/api/comment/reply-comment?boardCategory=promotion&boardNum=${postId}&cmtNum=${parentCommentID}&replyCmtNum=${commentNo}`
    );
  }
  return axios.delete(
    `/api/comment?boardCategory=promotion&boardNum=${postId}&cmtNum=${commentNo}`
  );
}

export function addCommentAlarm(postId, cmtDescription, parentCommentID) {
  if (parentCommentID)
    return axios.post(
      `api/notification/reply-comment/promotion/${postId}/${parentCommentID}`,
      {
        replyCmtDescription: cmtDescription,
        notiCategoryNum: 1
      }
    );
  else
    return axios.post(`api/notification/comment/promotion/${postId}`, {
      cmtDescription,
      notiCategoryNum: 0
    });
}

export function likePostAlarm(postId) {
  return axios.post(`api/notification/like/board/promotion/${postId}`, {
    notiCategoryNum: 9
  });
}

export function likeCommentAlarm(cmtNum, reply) {
  if (reply)
    return axios.post(
      `api/notification/like/reply-comment/promotion/${cmtNum}`,
      {
        notiCategoryNum: 11
      }
    );
  else
    return axios.post(`api/notification/like/comment/promotion/${cmtNum}`, {
      notiCategoryNum: 10
    });
}
