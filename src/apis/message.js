import axios from 'apis/index';

export function sendLetter(
  recipientId,
  description,
  boardNo,
  commentNo,
  boardFlag,
  writerHiddenFlag
) {
  const body =
    boardNo !== ''
      ? {
          recipientId,
          description,
          boardNo,
          commentNo,
          boardFlag,
          writerHiddenFlag
        }
      : {
          recipientId,
          description,
          writerHiddenFlag
        };
  return axios.post('api/letter', body);
}

export function replyLetter(description, letterNo, userId) {
  return axios.post(`api/letter/${userId}/${letterNo}`, {
    description
  });
}

export function getMessages(id) {
  return axios.get(`api/letter/${id}`);
}

export function getDetailMessages(id, letterNo) {
  return axios.get(`api/letter/${id}/${letterNo}`);
}
export function deleteMessage(recipientId, id) {
  return axios.delete(`api/letter/${recipientId}/${id}`);
}

export function deleteMessageAlarm() {
  return axios.put(`api/letter/entire`);
}

export function getMessageAlarm() {
  return axios.get(`api/letter/entire`);
}
