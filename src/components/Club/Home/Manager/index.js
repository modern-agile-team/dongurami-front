import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from 'styles/Club/Home/Manager/Manager.module.scss';
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
import { sendClubJoinResult } from 'apis/alarm';

export const Manager = () => {
  const [members, setMembers] = useState();
  const [leader, setLeader] = useState('');
  const [applicantInfo, setApplicantInfo] = useState([]);
  const [applicantQNA, setApplicantQNA] = useState([]);
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
    setApplicantQNA(newData.applicants.questionsAnswers);
    setApplicantInfo(newData.applicants.applicantInfo);
    setLeader(newData.memberInfo.leader);
    setMembers(newData.memberInfo.memberAndAuthList);
    setApplyAuth(
      newData.memberInfo.memberAndAuthList.map((auth) => auth.joinAdminFlag)
    );
    setBoardAuth(
      newData.memberInfo.memberAndAuthList.map((auth) => auth.boardAdminFlag)
    );
  };

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

  const acceptApply = async (body) => {
    await postApply(...body)
      .then((res) => handleAfterApply(res.data.msg))
      .catch((err) => alert(err.response.data.msg));
    sendClubJoinResult(...[{ ...body[0], notiCategoryNum: 2 }, body[1]]);
  };

  const onApplyAccept = async (e) => {
    if (!e.target.id) return;
    const body = [
      {
        applicant: applicantInfo[e.target.id].id
      },
      clubId
    ];
    confirm('가입을 승인합니까?') && acceptApply(body);
  };

  const rejectApply = useCallback(
    async (body) => {
      await putApply(...body)
        .then((res) => handleAfterApply(res.data.msg))
        .catch((err) => alert(err.response.data.msg));
      sendClubJoinResult(...[{ ...body[0], notiCategoryNum: 3 }, body[1]]);
    },
    [handleAfterApply]
  );

  const onApplyReject = useCallback(
    async (e) => {
      if (!e.target.id) return;
      const body = [
        {
          applicant: applicantInfo[e.target.id].id
        },
        clubId
      ];
      confirm('가입을 거절합니까?') && rejectApply(body);
      await getMembersData();
    },
    [clubId, getMembersData, applicantInfo, rejectApply]
  );

  const handOverLeader = async (body) => {
    await putLeader(...body)
      .then((res) => alert(res.data.msg))
      .catch((err) => alert(err.response.data.msg));
  };

  const onLeaderChange = async (memberIndex) => {
    const newLeader = changeLeaderRef.current;
    const body = [
      {
        newLeader: newLeader[memberIndex].id
      },
      clubId
    ];
    confirm('회장을 양도하시겠습니까?') && handOverLeader(body);
    await getMembersData();
  };

  const changeAdminOptions = () => {
    return members.map((member, index) => {
      return {
        id: member.id,
        joinAdminFlag: applyAuth[index],
        boardAdminFlag: boardAuth[index]
      };
    });
  };

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
    applicantInfo.length > 0 && setApplicantInfo(applicantInfo);
  }, [applicantInfo]);

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
      />
    </div>
  );
};

export default Manager;
