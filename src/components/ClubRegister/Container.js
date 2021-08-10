import React from 'react';
import style from './Container.module.css'
import ClubRegister from './ClubRegister';

const Container = () => {
  return (
      <div className={style.container}>
          <ClubRegister />
      </div>
   ) 
}

export default Container;