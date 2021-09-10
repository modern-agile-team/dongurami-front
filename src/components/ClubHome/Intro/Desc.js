import React, { useState } from "react";
import styles from "../../../styles/Club/Home/Intro/Desc.module.scss";

const introduceClub =
  "실력과 의지가 있는 학생들을 선별하여 실제로 운영될 서비스(프로젝트)를 개발합니다. IT 산업의 미래 핵심 인재로 성장합니다. 전국의 모든 대학생들이 희망하는 “꿈의 동아리”가 될것입니다. 다음은 우아한 애자일이 지향하는 가치입니다. 빠른 속도와집중력 주 5일 미팅을 통해 매일 “어제 한 일, 오늘 할 일”에 대한대화를 나누며 단기간에 빠르게 성장합니다 효율적 성장 효율적 성장을위해 테크톡 프로그램을 진행합니다. 모두가 IT 강사가 되어 2주에 한번씩 기술 강연을 진행합니다. 맡은 Topic에 대해서는 전문가가 될정도로 공부하여 서로에게 지식을 나누어줍니다. “내가 할 공부를 남이대신 해주어서 공부할 시간을 단축하고 효율을 높이자”는 취지입니다.코드의 품질 유지 단순히 개발만을 목적으로 하지 않습니다. 효율적이고가독성 좋은 코드를 유지하며, 실제 유지보수가 가능하도록 코딩합니다.전국 최대 규모 개발자 대회에서 1등한 1기 회장의 코딩 노하우를공유하고, 팀원들의 잘못된 코드와 습관을 지적하며 효율적인 성장을추구합니다. 체계적 협업 프런트엔드팀과 백엔드팀으로 나누어 각자 맡은역할을 수행합니다. 백엔드팀은 DB설계 및 구현, API 서버 설계 및 구현,전체 시스템 아키텍쳐 설계 등을 맡고, 프런트엔드팀은 구현된 API를통해 웹 페이지를 구현합니다. 백엔드 팀과 협의하여 일정 부분의 기능구현을 프런트에서 맡기도 합니다. 컴퓨팅 사고 효율적인 코드를 위한사고력을 키웁니다. sort, dfs-bfs, 완전탐색, 시뮬레이션, 구현 등에대한 정도로 취업을 위해 필요한 만큼을 다룹니다. 리더쉽 선배가동아리를 수료하면, 멘토로서 멘티의 코드를 리뷰해줍니다. 즉, 2기가선발되면 1기가 멘토 역할을 수행하며 1인 2명씩 관리해줍니다. 실제개발 경험을 통해 효율적인 코드와 개발 방법들에 대한 노하우를 공유해줍니다. 이를 통해 선배는 또 한 번 성장하게 되며, 리더로서나아갑니다. 또한 선배와 후배의 유대감을 형성하고, IT를 전문적으로배우고자하는 학생들의 기대를 충족시켜줄 수 있습니다.";

const Desc = () => {
  const [descUpdate, setDescUpdate] = useState(false);
  const [introDesc, setIntroDesc] = useState(introduceClub);

  const onDescUpdate = () => {
    setDescUpdate(!descUpdate);
  };

  const onDescChange = (e) => {
    setIntroDesc(e.target.value);
  };

  return (
    <div className={styles.intro}>
      <span>동아리 소개</span>
      <div id={styles.desc}>
        {descUpdate ? (
          <textarea onChange={onDescChange} defaultValue={introDesc} />
        ) : (
          <p>{introDesc}</p>
        )}
      </div>
      <div>
        <button onClick={onDescUpdate}>{descUpdate ? "완료" : "수정"}</button>
      </div>
    </div>
  );
};

export default Desc;
