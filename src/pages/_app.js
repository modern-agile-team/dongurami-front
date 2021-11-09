import { Provider, useDispatch } from 'react-redux';
import store from 'redux/store';
import '../styles/global.scss';
import 'react-quill/dist/quill.snow.css';
import { useEffect, useState } from 'react';
import { getUser } from 'redux/slices/user';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

function ReduxWrapper({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return children;
}

function App({ Component, pageProps }) {
  const [scrollY, setScrollY] = useState(0);

  const scrollSpeed = () => {
    if (typeof window !== 'undefined') {
      const pos = window.pageYOffset;
      return (pos / 550) * 75;
    }
  };

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      const scroll = window.setInterval(() => {
        const pos = window.pageYOffset;
        if (pos > 0) window.scrollTo(0, pos - scrollSpeed());
        else window.clearInterval(scroll);
      }, 1);
    }
  };

  const scrollPosition = () => {
    addEventListener('scroll', () => {
      if (typeof window !== 'undefined') setScrollY(window.scrollY);
    });
  };

  useEffect(() => {
    scrollPosition();
  }, [scrollY]);

  return (
    <Provider store={store}>
      <ReduxWrapper>
        <Component {...pageProps} />
        {scrollY > 550 && (
          <div className="toTheTop" onClick={scrollToTop}>
            <BsFillArrowUpCircleFill />
          </div>
        )}
      </ReduxWrapper>
    </Provider>
  );
}

export default App;
