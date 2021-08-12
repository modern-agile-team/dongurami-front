import style from './ClubRegister.module.css'
import ClubRegisterForm from './ClubRegisterForm';

const ClubRegister = () => {
  return (
      <div className={style.container}>
          <ClubRegisterForm />
      </div>
   ) 
}

export default ClubRegister;