import axios from 'axios';
import getToken from 'utils/getToken';

function setInterceptors(instance) {
  instance.interceptors.request.use(
    function (config) {
      config.headers['x-auth-token'] = getToken();
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      const { config } = error;
      if (error.response.status === 401) {
        const headers = {
          method: config.method,
          headers: {
            'x-auth-token': getToken(),
            'Content-type': 'application/json; charset=utf-8'
          }
        };
        return axios(
          `${process.env.NEXT_PUBLIC_API_URL}/${config.url}`,
          headers
        );
      }
      return Promise.reject(error);
    }
  );
  return instance;
}

export default setInterceptors;
