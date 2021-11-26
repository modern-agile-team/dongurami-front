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