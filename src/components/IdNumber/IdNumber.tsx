import React from 'react';
import scss from './IdNumber.module.scss';

type IdNumberProps = {
  number: number;
};

const IdNumber: React.FC<IdNumberProps> = ({ number }) => {
  return <div className={scss.idNumber}>{number}</div>;
};

export default IdNumber;
