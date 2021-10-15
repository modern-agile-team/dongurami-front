import axios from 'axios';
import getToken from 'utils/getToken';
import setInterceptors from './common/interceptors';

const createInstance = () => {
  const ins = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
    headers: {
      'x-auth-token': getToken()
    }
  });
  return setInterceptors(ins);
};

const instance = createInstance();

export default instance;
