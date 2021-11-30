import axios from 'apis/index';

export function sendLetter(recipientId, description, boardNo, commentNo, boardFlag, writerHiddenFlag) {
  return axios.post(
    `api/letter`, {
        recipientId,
        description,
        boardNo,
        commentNo,
        boardFlag,
        writerHiddenFlag
    }
  );
}

export function getMessages(id) {
    return axios.get(
      `api/letter/${id}`
    );
  }

  export function getDetailMessages(id,letterNo) {
    return axios.get(
      `api/letter/${id}/${letterNo}`
    );
  }
export function deleteMessage() {
  return axios.put(
    `/api/letter/entire`
  ); 
}