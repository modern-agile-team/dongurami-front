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
import { useRouter } from 'next/router';
import { changeComp } from 'redux/slices/chageComp';
import * as gtag from '../lib/gtags';
import Header from 'components/Common/Header';
import Footer from 'components/Common/Footer';
import getToken from 'utils/getToken';
import { getAlarm } from 'apis/alarm';
import { getMessageAlarm } from 'apis/message';

function ReduxWrapper({ children }) {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (router.pathname !== '/clubhome/[id]') dispatch(changeComp(1));
  }, [router.pathname]);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return children;
}

function App({ Component, pageProps }) {
  const [scrollY, setScrollY] = useState(0);
  const [token, setToken] = useState();
  const [open, setOpen] = useState(false);
  const [alarmList, setAlarmList] = useState([]);
  const [messageList, setMessageList] = useState([]);

  const jwtToken = getToken();

  const getMessage = () => {
    getMessageAlarm().then((res) => {
      if (res.data.letters) setMessageList(res.data.letters);
      else setMessageList([]);
    });
  };

  const getAlarmData = () => {
    getAlarm().then((res) => setAlarmList(res.data.notifications));
  };

  useEffect(() => {
    if (token) {
      getAlarmData();
      getMessage();
    }
  }, [token, pageProps]);

  // localStorage의 JWT값 불러와 token state에 저장
  useEffect(() => {
    setToken(jwtToken);
  }, [jwtToken]);

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

  useEffect(() => {
    setOpen(false);
  }, [pageProps]);

  return (
    <Provider store={store}>
      <ReduxWrapper>
        <Header
          token={token}
          alarmList={alarmList}
          messageList={messageList}
          getAlarmData={getAlarmData}
          getMessage={getMessage}
          open={open}
          setOpen={setOpen}
        />
        <Component {...pageProps} />
        {scrollY > 550 && (
          <div className="toTheTop" onClick={scrollToTop}>
            <BsFillArrowUpCircleFill />
          </div>
        )}
        <Footer />
      </ReduxWrapper>
    </Provider>
  );
}

export default App;
