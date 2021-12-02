import axios from 'apis/index';

export function sendLetter(
  recipientId,
  description,
  boardNo,
  commentNo,
  boardFlag,
  writerHiddenFlag
) {
  if (!description.length) {
    alert('내용을 적어주세요');
    return;
  }
  return axios.post(`api/letter`, {
    recipientId,
    description,
    boardNo,
    commentNo,
    boardFlag,
    writerHiddenFlag
  });
}

export function replyLetter(
  recipientId,
  description,
  writerHiddenFlag,
  letterNo,
  userId
) {
  return axios.post(`api/letter/${userId}/${letterNo}`, {
    recipientId,
    description,
    writerHiddenFlag
  });
}

export function getMessages(id) {
  return axios.get(`api/letter/${id}`);
}

export function getDetailMessages(id, letterNo) {
  return axios.get(`api/letter/${id}/${letterNo}`);
}
export function deleteMessage(recipientId, id, groupNo) {
  console.log(groupNo);
  return axios.put(`api/letter/${recipientId}/${id}`, {
    groupNo
  });
}

export function deleteMessageAlarm() {
  return axios.put(`api/letter/entire`);
}

export function getMessageAlarm() {
  return axios.get(`api/letter/entire`);
}
