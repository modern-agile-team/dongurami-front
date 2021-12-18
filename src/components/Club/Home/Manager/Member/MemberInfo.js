import { DonguramiOutlineButton } from 'components/Common/DonguramiButton';
import styles from 'styles/Club/Home/Manager/MemberInfo.module.scss';
import { IoMdExit } from 'react-icons/io';

const MemberInfo = ({ memberInfo, leader, exileMember, openMemberInfo }) => {
  return (
    <ul className={openMemberInfo ? styles.info : styles.close}>
      <li>
        <p>{memberInfo.major}</p>
        <p>{memberInfo.grade}학년</p>
      </li>
      <li>
        <p>학번</p>
        <p>{memberInfo.id}</p>
      </li>
      <li>
        <p>전화번호</p>
        <p>{memberInfo.phoneNum}</p>
      </li>
      <li>
        <DonguramiOutlineButton
          onClick={memberInfo.name !== leader ? exileMember : null}
        >
          <IoMdExit /> 추방
        </DonguramiOutlineButton>
      </li>
    </ul>
  );
};

export default MemberInfo;
