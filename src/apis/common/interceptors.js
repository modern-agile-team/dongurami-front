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
      return Promise.reject(error);
    }
  );
  return instance;
}

export default setInterceptors;
