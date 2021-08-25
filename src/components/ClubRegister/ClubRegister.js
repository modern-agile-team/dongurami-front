import style from '../../styles/Club/Resister/ClubRegister.module.scss'
import ClubRegisterForm from './ClubRegisterForm';

const ClubRegister = () => {
  return (
      <div className={style.container}>
          <ClubRegisterForm />
      </div>
   ) 
}

export default ClubRegister;