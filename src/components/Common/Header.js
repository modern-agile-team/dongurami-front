import styles from "../../styles/Common/Header.module.scss";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import { BiBell } from "react-icons/bi";
import Hamburger from "hamburger-react";

function Header() {
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState("");
  const [nowPath, setNowPath] = useState("");

  const router = useRouter();
  const closeRef = useRef(null);

  //영역밖 클릭 시 사이드바 제거
  const closeSidebar = (ref) => {
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
  closeSidebar(closeRef);

  //현재경로 표시
  useEffect(() => {
    setNowPath(window.location.pathname);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("nowPath", nowPath);
  }, [nowPath]);

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
              <ul className={styles.mobile}>
                <li
                  className={styles.notice}
                  id={nowPath === "/notice" ? styles.now : 0}
                  onClick={() => {
                    router.push("/notice");
                  }}
                >
                  공지게시판
                </li>
                <li
                  className={styles.free}
                  id={nowPath === "/free" ? styles.now : 0}
                  onClick={() => {
                    router.push("/free");
                  }}
                >
                  자유게시판
                </li>
              </ul>
              <li className={styles.dropdown}>
                게시판
                <ul className={styles.dropdownMenu}>
                  <li
                    className={styles.notice}
                    id={nowPath === "/notice" ? styles.now : 0}
                    onClick={() => {
                      router.push("/notice");
                    }}
                  >
                    공지게시판
                  </li>
                  <li
                    className={styles.free}
                    id={nowPath === "/free" ? styles.now : 0}
                    onClick={() => {
                      router.push("/free");
                    }}
                  >
                    자유게시판
                  </li>
                </ul>
              </li>
              <li
                className={styles.clublist}
                id={nowPath === "/clublists" ? styles.now : 0}
                onClick={() => {
                  router.push("/clublists");
                }}
              >
                동아리 목록
              </li>
              <li
                className={styles.promotion}
                id={nowPath === "/promotion" ? styles.now : 0}
                onClick={() => {
                  router.push("/promotion");
                }}
              >
                동아리 홍보
              </li>
            </ul>
            {token ? (
              <div
                className={styles.tokenIcons}
                id={open ? styles.show : styles.hide}
              >
                <BiBell size="2vw" className={styles.bell} />
                <FaUserCircle
                  size="2vw"
                  className={styles.Profile}
                  onClick={logout}
                />
              </div>
            ) : (
              <div
                className={styles.users}
                id={open ? styles.show : styles.hide}
              >
                <ul className={styles.user}>
                  <li
                    className={styles.login}
                    id={nowPath === "/LoginPage" ? styles.now : 0}
                    onClick={() => {
                      router.push("/LoginPage");
                    }}
                  >
                    로그인
                  </li>
                  <li
                    className={styles.signUp}
                    id={nowPath === "/signup" ? styles.nowSign : 0}
                    onClick={() => {
                      router.push("/signup");
                    }}
                  >
                    회원가입
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
