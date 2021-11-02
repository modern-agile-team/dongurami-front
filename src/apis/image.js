import axios from 'apis/index';

export function getS3PresignedURL(name) {
  return axios.post(`/api/s3/pre-signed-url`, name);
}

export function uploadImage(url, file) {
  return axios.put(url, file, {
    headers: {
      'Content-Type': file.type
    }
  });
}
