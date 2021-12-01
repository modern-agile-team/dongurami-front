import axios from 'apis/index';

export function sendLetter(
  recipientId,
  description,
  boardNo,
  commentNo,
  boardFlag,
  writerHiddenFlag
) {
  return axios.post(`api/letter`, {
    recipientId,
    description,
    boardNo,
    commentNo,
    boardFlag,
    writerHiddenFlag
  });
}

export function getMessages(id) {
  return axios.get(`api/letter/${id}`);
}

export function getDetailMessages(id, letterNo) {
  return axios.get(`api/letter/${id}/${letterNo}`);
}
export function deleteMessage(recipientId, id) {
  return axios.put(`/api/letter/${recipientId}/${id}`);
}

export function deleteMessageAlarm() {
  return axios.put(`/api/letter/entire`);
}

export function getMessageAlarm() {
  return axios.get(`api/letter/entire`);
}