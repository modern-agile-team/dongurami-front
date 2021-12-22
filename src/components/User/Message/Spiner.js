import React from 'react';
import ReactLoading from 'react-loading';

const Spinner = () => {
  return (
    <ReactLoading type={'spin'} color={'black'} height={'20%'} width={'10%'} />
  );
};

export default Spinner;
