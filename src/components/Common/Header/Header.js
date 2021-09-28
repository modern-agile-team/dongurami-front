import styles from "../../../styles/Common/Header/Header.module.scss";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import { BiBell } from "react-icons/bi";
import Hamburger from "hamburger-react";
import HeaderBoard from "./HeaderBoard";
import HeaderUser from "./HeaderUser";
import AlamContainer from "../Alam/AlamContainer";
import HeaderMobileBoard from "./HeaderMobileBoard";

function Header() {
  const [open, setOpen] = useState(false);
  const [isAlamOpen, setIsAlamOpen] = useState(false);
  const [token, setToken] = useState("");

  const router = useRouter();
  const closeRef = useRef(null);

  //영역밖 클릭 시 사이드바 제거
  const CloseSidebar = (ref) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };
  CloseSidebar(closeRef);

  // localStorage의 JWT값 불러와 token state에 저장
  useEffect(() => {
    setToken(window.localStorage.getItem("jwt"));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("jwt", token);
  }, [token]);

  // 로그아웃 이벤트
  const logout = () => {
    window.location.reload();
    return setToken("");
  };

  //알람 열람
  const alamOpen = () => {
    setIsAlamOpen(!isAlamOpen);
  };

  return (
    <header>
      <nav>
        <div className={styles.myHeader} ref={closeRef}>
          <img
            onClick={() => {
              router.push("/");
            }}
            src="https://lovelyoch.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F439c0672-c274-4f90-b273-9928548c4081%2Flogo.jpg?table=block&id=99568f38-6c02-4bbc-b04b-1b7152648016&spaceId=69eb8ea8-3d04-47ec-8bb7-004e8aa31f9e&width=7460&userId=&cache=v2"
          />
          <Hamburger rounded toggled={open} toggle={setOpen} size={25} />
          <div className={styles.topMenu}>
            <ul className={styles.menus} id={open ? styles.show : styles.hide}>
              <HeaderMobileBoard />
              <HeaderBoard />
            </ul>
            {token ? (
              <div
                className={styles.tokenIcons}
                id={open ? styles.show : styles.hide}
              >
                <div className={styles.alam}>
                  <BiBell onClick={alamOpen} className={styles.bell} />
                  {isAlamOpen ? <AlamContainer /> : null}
                </div>
                <FaUserCircle className={styles.Profile} onClick={logout} />
              </div>
            ) : (
              <div
                className={styles.users}
                id={open ? styles.show : styles.hide}
              >
                <HeaderUser />
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
