import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from '../../../styles/Club/Home/Manager/Manager.module.scss';
import Approve from './Approve/Approve';
import Members from './Member/Members';
import {
  deleteMember,
  getMember,
  postApply,
  putApply,
  putAuth,
  putLeader
} from 'apis/manager';
import { useRouter } from 'next/router';
import _ from 'lodash';

export const Manager = () => {
  const [members, setMembers] = useState();
  const [leader, setLeader] = useState('');
  const [applicantInfo, setApplicantInfo] = useState([]);
  const [applicantQNA, setApplicantQNA] = useState([]);
  const [mergedApplicantQNA, setMergedApplicantQNA] = useState([]);
  const [mergedApplicantInfo, setMergedApplicantInfo] = useState([]);
  const [applyAuth, setApplyAuth] = useState();
  const [boardAuth, setBoardAuth] = useState();

  const applyAuthRef = useRef([]);
  const boardAuthRef = useRef([]);
  const changeLeaderRef = useRef([]);

  const refArr = [applyAuthRef, boardAuthRef, changeLeaderRef];

  const router = useRouter();

  const clubId = router.query.id;
  const toClubHome = () => {
    router.push(`/clubhome/${clubId}`);
  };

  const setStates = (data) => {
    const newData = _.cloneDeep(data);
    setApplicantQNA(newData.applicant.questionsAnswers);
    setApplicantInfo(newData.applicant.applicantInfo);
    setLeader(newData.clubAdminOption.leader);
    setMembers(newData.clubAdminOption.memberAndAuthList);
    setMergedApplicantQNA(processQuesData(newData.applicant.questionsAnswers));
    setApplyAuth(
      newData.clubAdminOption.memberAndAuthList.map(
        (auth) => auth.joinAdminFlag
      )
    );
    setBoardAuth(
      newData.clubAdminOption.memberAndAuthList.map(
        (auth) => auth.boardAdminFlag
      )
    );
  };

  // 동아리원 정보 GET
  const getMembersData = useCallback(async () => {
    getMember(clubId)
      .then((res) => setStates(res.data))
      .catch((err) => {
        switch (err.response.status) {
          case 401:
            alert('로그인 후 이용해주세요');
            router.push('/LoginPage');
            break;
          case 403:
            alert('관리자 권한이 없습니다. 동아리 회장에게 문의해주세요');
            break;
          case 404:
            alert('존재하지 않는 동아리입니다');
            router.push('/');
            break;
          default:
            alert('알 수 없는 오류입니다 개발자에게 문의해주세요');
            router.push('/');
        }
      });
  }, [clubId, router]);

  const handleAfterApply = useCallback(
    (massage) => {
      if (applicantInfo.length === 1) router.reload();
      else getMembersData();
      alert(massage);
    },
    [applicantInfo.length, router, getMembersData]
  );

  // 가입 승인 POST
  const onApplyAccept = async (e) => {
    if (!e.target.id) return;
    const body = [
      {
        applicant: mergedApplicantInfo[e.target.id].id,
        url: `clubhome/${clubId}`,
        notiCategoryNum: 2
      },
      clubId
    ];
    confirm('가입을 승인합니까?') &&
      (await postApply(...body)
        .then((res) => handleAfterApply(res.data.msg))
        .catch((err) => alert(err.response.data.msg)));
  };

  // 가입 거절 PUT
  const onApplyReject = useCallback(
    async (e) => {
      if (!e.target.id) return;
      const body = [
        {
          applicant: mergedApplicantInfo[e.target.id].id,
          url: `clubhome/${clubId}`,
          notiCategoryNum: 3
        },
        clubId
      ];
      confirm('가입을 거절합니까?') &&
        (await putApply(...body)
          .then((res) => handleAfterApply(res.data.msg))
          .catch((err) => alert(err.response.data.msg)));
      await getMembersData();
    },
    [clubId, getMembersData, handleAfterApply, mergedApplicantInfo]
  );

  // 회장 양도 PUT
  const onLeaderChange = async (memberIndex) => {
    const newLeader = changeLeaderRef.current;
    const body = [
      {
        newLeader: newLeader[memberIndex].id
      },
      clubId
    ];
    confirm('회장을 양도하시겠습니까?') &&
      (await putLeader(...body)
        .then((res) => alert(res.data.msg))
        .catch((err) => alert(err.response.data.msg)));
    await getMembersData();
  };

  const changeAdminOptions = () => {
    const result = [];
    members.forEach((member, index) => {
      result.push({
        id: member.id,
        joinAdminFlag: applyAuth[index],
        boardAdminFlag: boardAuth[index]
      });
    });
    return result;
  };

  // 기능 권한 변경 PUT
  const changeMembersAuth = async () => {
    if (applyAuth.length === 0) return;
    const body = [
      {
        adminOptions: changeAdminOptions()
      },
      clubId
    ];
    await putAuth(...body)
      .then((res) => alert(res.data.msg))
      .catch((err) => alert(err.response.data.msg));
    await getMembersData();
  };

  // 동아리원 추방 DELETE
  const exileMember = async (index) => {
    const studentID = changeLeaderRef.current[index].id;
    const studentName =
      changeLeaderRef.current[index].parentNode.parentNode.childNodes[1]
        .childNodes[0].innerHTML;
    confirm(`${studentName}님을 동아리에서 추방시키겠습니까?`) &&
      (await deleteMember(studentID, clubId)
        .then((res) => alert(res.data.msg))
        .catch((err) => alert(err.response.data.msg)));
    await getMembersData();
  };

  //---------------------기능 권한 변경---------------------------//
  const setAuths = (authRef) => {
    const result = [];
    const currentAuth = authRef.current.slice(0);
    currentAuth.forEach((el) => result.push(el.checked ? 1 : 0));
    return result;
  };

  const onApplyAuthClick = useCallback(() => {
    setApplyAuth(setAuths(applyAuthRef));
  }, []);

  const onBoardAuth = useCallback(() => {
    setBoardAuth(setAuths(boardAuthRef));
  }, []);
  //-------------------------------------------------------------//

  useEffect(() => {
    applicantInfo.length > 0 && mergedApplicantQNA.length > 0
      ? setMergedApplicantInfo(
          processApplicantInfo(applicantInfo, mergedApplicantQNA)
        )
      : setMergedApplicantInfo(applicantInfo);
  }, [applicantInfo, mergedApplicantQNA]);

  useEffect(() => {
    if (!clubId) return;
    getMembersData();
  }, [getMembersData, clubId]);

  useEffect(() => {
    if (!clubId) return;
    onApplyAuthClick();
  }, [onApplyAuthClick, clubId]);

  useEffect(() => {
    if (!clubId) return;
    onBoardAuth();
  }, [onBoardAuth, clubId]);

  if (!members) return null;
  return (
    <div className={styles.container}>
      <Members
        members={members}
        leader={leader}
        onLeaderChange={onLeaderChange}
        onApplyAuthClick={onApplyAuthClick}
        onBoardAuth={onBoardAuth}
        changeMembersAuth={changeMembersAuth}
        refArr={refArr}
        exileMember={exileMember}
        toClubHome={toClubHome}
      />
      <Approve
        onApplyAccept={onApplyAccept}
        onApplyReject={onApplyReject}
        applicantInfo={applicantInfo}
        applicantQNA={applicantQNA}
        mergedApplicantInfo={mergedApplicantInfo}
      />
    </div>
  );
};

export default Manager;

//--------------------가입 추가 질문 데이터 가공---------------------//
const handlePieceData = (index, data, additionalQuestion) => {
  const result = [...additionalQuestion];
  result.push({
    id: data[index].id,
    questions: [data[index].question],
    answers: [data[index].answer]
  });
  return result;
};

const completeTheData = (index, data, incompleteData) => {
  const result = [...incompleteData];
  for (let info of result) {
    if (info.id === data[index].id) {
      info.questions.push(data[index].question);
      info.answers.push(data[index].answer);
    }
  }
  return result;
};

const processQuesData = (data) => {
  let result = [];
  for (let index in data) {
    if (index === '0' || (index > '0' && data[index - 1].id !== data[index].id))
      result = handlePieceData(index, data, result);
    else result = completeTheData(index, data, result);
  }
  return result;
};
//---------------------------------------------------------------------//

// 가입 요청 데이터 가공
const processApplicantInfo = (data, QNAs) => {
  const result = [...data];
  for (let index in result) {
    if (QNAs[index].id === result[index].id) {
      result[index].answers = QNAs[index].answers;
      result[index].questions = QNAs[index].questions;
    }
  }
  return result;
};
