import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from '../../../styles/Club/Home/Manager/Manager.module.scss';
import Approve from './Approve';
import Members from './Members';
import {
  deleteMember,
  getMember,
  postApply,
  putApply,
  putAuth,
  putLeader
} from 'apis/manager';
import { useRouter } from 'next/router';
import { AiFillCaretUp } from 'react-icons/ai';

export const Manager = () => {
  const [members, setMembers] = useState([]);
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

  // 동아리원 정보 GET
  const getMembersData = useCallback(async () => {
    getMember(router.query.id)
      .then((res) => {
        setApplicantQNA(res.data.applicant.questionsAnswers);
        setApplicantInfo(res.data.applicant.applicantInfo);
        setLeader(res.data.clubAdminOption.leader);
        setMembers(res.data.clubAdminOption.memberAndAuthList);
        setMergedApplicantQNA(
          processQuesData(res.data.applicant.questionsAnswers)
        );
      })
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
  }, [router]);

  // 가입 승인 POST
  const onApplyAccept = async (e) => {
    confirm('가입을 승인합니까?') &&
      (await postApply(
        {
          applicant: mergedApplicantInfo[e.target.id].id
        },
        router.query.id
      )
        .then((res) => alert(res.data.msg))
        .catch((err) => alert(err.response.data.msg)));
    router.reload();
  };

  // 가입 거절 PUT
  const onApplyReject = async (e) => {
    confirm('가입을 거절합니까?') &&
      (await putApply(
        {
          applicant: mergedApplicantInfo[e.target.id].id
        },
        router.query.id
      )
        .then((res) => {
          alert(res.data.msg);
          getMembersData();
        })
        .catch((err) => alert(err.response.data.msg)));
    if (applicantInfo.length === 0) router.reload();
  };

  // 회장 양도 PUT
  const onLeaderChange = async (memberIndex) => {
    const newLeader = changeLeaderRef.current;

    confirm('회장을 양도하시겠습니까?') &&
      (await putLeader(
        {
          newLeader: newLeader[memberIndex].id
        },
        router.query.id
      )
        .then((res) => alert(res.data.msg))
        .catch((err) => alert(err.response.data.msg)));

    await getMembersData();
  };

  // 기능 권한 변경 PUT
  const changeMembersAuth = async () => {
    const adminOptions = [];
    const tempArr = members.slice(0);

    tempArr.map((member, index) => {
      adminOptions.push({
        id: member.id,
        joinAdminFlag: applyAuth[index],
        boardAdminFlag: boardAuth[index]
      });
    });

    await putAuth(
      {
        adminOptions: adminOptions
      },
      router.query.id
    )
      .then((res) => {
        alert(res.data.msg);
      })
      .catch((err) => alert(err.response.data.msg));
    await getMembersData();
  };

  // 동아리원 추방 DELETE
  const exileMember = async (index) => {
    const studentID = changeLeaderRef.current[index].id;
    confirm(`${studentID}님을 동아리에서 추방시키겠습니까?`) &&
      (await deleteMember(studentID, router.query.id)
        .then((res) => alert(res.data.msg))
        .catch((err) => alert(err.response.data.msg)));
    await getMembersData();
  };

  //---------------------기능 권한 변경---------------------------//
  const onApplyAuthClick = () => {
    const newArr = applyAuthRef.current.slice(0);
    const boolOfApplyAuth = [];
    newArr.map((el) => boolOfApplyAuth.push(el.checked ? 1 : 0));
    setApplyAuth(boolOfApplyAuth);
  };

  const onBoardAuth = () => {
    const newArr = boardAuthRef.current.slice(0);
    const boolOfBoardAuth = [];
    newArr.map((el) => boolOfBoardAuth.push(el.checked ? 1 : 0));
    setBoardAuth(boolOfBoardAuth);
  };
  //-------------------------------------------------------------//

  const toClubHome = () => {
    router.push(`/clubhome/${router.query.id}`);
  };

  useEffect(() => {
    if (applicantInfo.length > 0 && mergedApplicantQNA.length > 0) {
      setMergedApplicantInfo(
        processApplicantInfo(applicantInfo, mergedApplicantQNA)
      );
    }
  }, [applicantInfo, mergedApplicantQNA]);

  useEffect(() => {
    if (!router.query.id) return;
    getMembersData();
    onApplyAuthClick();
    onBoardAuth();
  }, [getMembersData, router.query]);

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

// 가입 추가 질문 데이터 가공
const processQuesData = (data) => {
  const result = [];
  for (let index in data) {
    if (
      index === '0' ||
      (index > '0' && data[index - 1].id !== data[index].id)
    ) {
      result.push({
        id: data[index].id,
        questions: [data[index].question],
        answers: [data[index].answer]
      });
    } else {
      for (let info of result) {
        if (info.id === data[index].id) {
          info.questions.push(data[index].question);
          info.answers.push(data[index].answer);
        }
      }
    }
  }
  return result;
};

// 가입 요청 데이터 가공
const processApplicantInfo = (data, QNAs) => {
  const result = data;
  for (let index in QNAs) {
    if (QNAs[index].id === result[index].id) {
      result[index].answers = QNAs[index].answers;
      result[index].questions = QNAs[index].questions;
    }
  }
  return result;
};
