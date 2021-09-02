import React from "react";
import styles from "../../../styles/Club/Home/Intro/Desc.module.scss";

const Desc = () => {
  return (
    <div className={styles.intro}>
      <span>동아리 소개</span>
      <div id={styles.desc}>
        <p>
          안녕하세요 저희는 인덕대학교 개발 동아리 우아한 애자일입니다. 구는
          세월의 도둑이다. 봄부터 흐르는 물은 겨울이 되어도 얼지 않듯이 마음에서
          우러나오는 우적은 역경이 닥친다고 해서 식지 않는다. 불행했을 때 만난
          친구는 가장 소중히 여겨야 한다. 행복했을 때 함께 기쁨을 누리는
          친구보다 힘들 떄 슬픔을 덜어지는 친구를 더 많이 신뢰할 수 있다.
          부유했을 때는 친구를 사귀기 쉽지만, 어려울 때는 눈을 씻고 찾아봐도
          있도록 도와준다.
        </p>
      </div>
    </div>
  );
};

export default Desc;
