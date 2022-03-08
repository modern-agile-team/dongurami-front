import instance from 'apis';

export function getPosts({ category, clubNum, ...params }) {
  const queryString = new URLSearchParams(params).toString();
  if (category === 'clubNotice') {
    return instance.get(`/api/club/board/clubNotice/${clubNum}?${queryString}`);
  }
  if (category === 'clubActivity') {
    return instance.get(
      `/api/club/board/clubActivity/${clubNum}?${queryString}`
    );
  }
  return instance.get(`/api/board/${category}?${queryString}`);
}

export function searchPosts({ category, clubNum, ...params }) {
  let queryString = new URLSearchParams(params).toString();
  if (category === 'clubNotice') {
    queryString = new URLSearchParams({
      clubno: clubNum,
      ...params
    }).toString();
    return instance.get(`/api/search/clubNotice?${queryString}`);
  }
  return instance.get(`/api/search/${category}?${queryString}`);
}

export function postPost(category, body, clubNum) {
  if (category === 'clubNotice') {
    return instance.post(`/api/club/board/clubNotice/${clubNum}`, {
      ...body
    });
  }
  if (category === 'clubActivity') {
    return instance.post(`/api/club/board/clubActivity/${clubNum}`, {
      ...body
    });
  }
  if (category === 'promotion') {
    const { title, description, images, clubNo } = body;
    return instance
      .post(`/api/board/promotion`, {
        title,
        description,
        hiddenFlag: 0,
        clubNo
      })
      .then((response) => {
        if (response.data.success) {
          return instance.post(
            `/api/image?boardCategory=promotion&boardNum=${response.data.boardNum}`,
            { images }
          );
        }
      });
  }
  if (category === 'notice') {
    return instance.post(`/api/board/${category}`, {
      ...body
    });
  }
  return instance.post(`/api/board/${category}`, { ...body });
}

export function putPost(category, pid, body, clubNum) {
  if (category === 'clubNotice') {
    return instance.put(`/api/club/board/clubNotice/${clubNum}/${pid}`, body);
  }
  if (category === 'clubActivity') {
    return instance.put(`/api/club/board/clubActivity/${clubNum}/${pid}`, body);
  }
  return instance.put(`/api/board/${category}/${pid}`, body);
}

export function makeCommentAlarm({
  category,
  pid,
  cmtDescription,
  cmtNum,
  hiddenFlag
}) {
  const notiCategoryNum = cmtNum === undefined ? 0 : 1;
  return notiCategoryNum
    ? instance.post(
        `api/notification/reply-comment/${category}/${pid}/${cmtNum}`,
        {
          replyCmtDescription: cmtDescription,
          notiCategoryNum
        }
      )
    : instance.post(`api/notification/comment/${category}/${pid}`, {
        cmtDescription,
        notiCategoryNum,
        hiddenFlag
      });
}

export function noticeAlarm(boardNum, boardTitle) {
  return instance.post(`/api/notification/board/notice/${boardNum}`, {
    boardTitle,
    notiCategoryNum: 12
  });
}

export function clubNoticeAlarm(clubNum, boardNum, boardTitle) {
  return instance.post(
    `/api/notification/board/club-notice/${clubNum}/${boardNum}`,
    { boardTitle, notiCategoryNum: 6 }
  );
}

export function addThumbNail(boardNum, body) {
  return instance.post(
    `/api/image?boardCategory=clubActivity&boardNum=${boardNum}`,
    body
  );
}
