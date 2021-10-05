import React, { useState, useEffect, useRef } from "react";
import styles from "../../../styles/Club/Home/Manager/Manager.module.scss";
import Approve from "./Approve";
import Members from "./Members";
import axios from "axios";
import ManagerHeader from "./ManagerHeader";

export const Manager = () => {
  const [members, setMembers] = useState([]);
  const [leader, setLeader] = useState("");
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

  let jwtToken = "";

  if (typeof window !== "undefined") {
    jwtToken = localStorage.getItem("jwt");
  }

  // 동아리원 정보 GET
  const getMembersData = async () => {
    const options = {
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "x-auth-token": jwtToken,
      },
    };
    await axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/club/admin-option/1`,
        options
      )
      .then((res) => {
        setApplicantQNA(res.data.applicant.questionsAnswers);
        setApplicantInfo(res.data.applicant.applicantInfo);
        setLeader(res.data.clubAdminOption.leader);
        setMembers(res.data.clubAdminOption.memberAndAuthList);
        setMergedApplicantQNA(
          mergeApplicantQNA(res.data.applicant.questionsAnswers)
        );
      })
      .catch((err) => console.log(err.response.data));
  };

  // 가입 승인 POST
  const onApplyAccept = async (e) => {
    const index = e.target.id;
    const applicantID = mergedApplicantInfo[index].id;
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "x-auth-token": jwtToken,
      },
      data: {
        applicant: applicantID,
      },
    };
    await axios(
      `${process.env.NEXT_PUBLIC_API_URL}/api/club/admin-option/1/accept-applicant`,
      options
    )
      .then((res) => alert(res.data.msg))
      .catch((err) => alert(err.response.data.msg));
    getMembersData();
  };

  // 가입 거절 PUT
  const onApplyDelete = async (e) => {
    const index = e.target.id;
    const applicantID = mergedApplicantInfo[index].id;
    const options = {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "x-auth-token": jwtToken,
      },
      data: {
        applicant: applicantID,
      },
    };
    await axios(
      `${process.env.NEXT_PUBLIC_API_URL}/api/club/admin-option/1/reject-applicant`,
      options
    )
      .then((res) => alert(res.data.msg))
      .catch((err) => alert(err.response.data.msg));
    getMembersData();
  };

  // 회장 양도 PUT
  const onLeaderChange = async (memberIndex) => {
    const newLeader = changeLeaderRef.current;
    const newLeaderId = newLeader[memberIndex].id;

    const options = {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "x-auth-token": jwtToken,
      },
      data: {
        newLeader: newLeaderId,
      },
    };
    confirm("회장을 양도하시겠습니까?") &&
      (await axios(
        `${process.env.NEXT_PUBLIC_API_URL}/api/club/admin-option/1/leader`,
        options
      )
        .then((res) => alert(res.data.msg))
        .catch((err) => alert(err.response.data.msg)));

    getMembersData();
  };

  // 기능 권한 변경 PUT
  const changeMembersAuth = async () => {
    const adminOptions = [];
    const tempArr = members.slice(0);

    tempArr.map((member, index) => {
      adminOptions.push({
        id: member.id,
        joinAdminFlag: applyAuth[index],
        boardAdminFlag: boardAuth[index],
      });
    });

    const options = {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "x-auth-token": jwtToken,
      },
      data: {
        adminOptions: adminOptions,
      },
    };

    await axios(
      `${process.env.NEXT_PUBLIC_API_URL}/api/club/admin-option/1/admin-functions`,
      options
    )
      .then((res) => alert(res.data.msg))
      .catch((err) => alert(err.response.data.msg));
    getMembersData();
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

  useEffect(() => {
    if (applicantInfo.length > 0 && mergedApplicantQNA.length > 0) {
      setMergedApplicantInfo(
        mergeApplicantInfo(applicantInfo, mergedApplicantQNA)
      );
    }
  }, [applicantInfo, mergedApplicantQNA]);

  useEffect(() => {
    getMembersData();
    onApplyAuthClick();
    onBoardAuth();
  }, []);

  return (
    <div className={styles.container}>
      <ManagerHeader />
      <Members
        members={members}
        leader={leader}
        onLeaderChange={onLeaderChange}
        onApplyAuthClick={onApplyAuthClick}
        onBoardAuth={onBoardAuth}
        changeMembersAuth={changeMembersAuth}
        refArr={refArr}
      />
      <Approve
        onApplyAccept={onApplyAccept}
        onApplyDelete={onApplyDelete}
        applicantInfo={applicantInfo}
        applicantQNA={applicantQNA}
        mergedApplicantInfo={mergedApplicantInfo}
      />
    </div>
  );
};

export default Manager;

// 가입 추가 질문 데이터 가공
const mergeApplicantQNA = (needMergeData) => {
  const merged = [];
  for (let dataIndex in needMergeData) {
    if (
      parseInt(dataIndex) === 0 ||
      (parseInt(dataIndex) > 0 &&
        needMergeData[dataIndex - 1].id !== needMergeData[dataIndex].id)
    ) {
      const obj = {
        id: needMergeData[dataIndex].id,
        questions: [needMergeData[dataIndex].question],
        answers: [needMergeData[dataIndex].answer],
      };
      merged.push(obj);
    } else {
      for (let j of merged) {
        if (j.id === needMergeData[dataIndex].id) {
          j.questions.push(needMergeData[dataIndex].question);
          j.answers.push(needMergeData[dataIndex].answer);
        }
      }
    }
  }
  return merged;
};

// 가입 요청 데이터 가공
const mergeApplicantInfo = (needMergeData, toMergeData) => {
  for (let dataIndex in needMergeData) {
    if (toMergeData[dataIndex].id === needMergeData[dataIndex].id) {
      needMergeData[dataIndex].answers = toMergeData[dataIndex].answers;
      needMergeData[dataIndex].questions = toMergeData[dataIndex].questions;
    }
  }
  return needMergeData;
};
