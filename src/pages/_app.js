import { Provider, useDispatch } from 'react-redux';
import store from 'redux/store';
import '../styles/global.scss';
import 'react-quill/dist/quill.snow.css';
import { useEffect } from 'react';
import { getUser } from 'redux/slices/user';

function ReduxWrapper({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return children;
}

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ReduxWrapper>
        <Component {...pageProps} />
      </ReduxWrapper>
    </Provider>
  );
}

export default App;
