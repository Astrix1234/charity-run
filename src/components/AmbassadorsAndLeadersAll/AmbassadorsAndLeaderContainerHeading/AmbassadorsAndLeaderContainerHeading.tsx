import { ReactNode } from 'react';
import scss from './AmbassadorsAndLeaderContainerHeading.module.scss';
import HandwrittenLineMini from '../../../Icons/HandwrittenLineMini/HandwrittenLineMini';

type AmbassadorsAndLeaderContainerHeadingProps = {
  children: ReactNode;
};

function AmbassadorsAndLeaderContainerHeading({
  children,
}: AmbassadorsAndLeaderContainerHeadingProps) {
  return (
    <div className={scss.container}>
      <p className={scss.heading}>{children}</p>
      <HandwrittenLineMini />
    </div>
  );
}

export default AmbassadorsAndLeaderContainerHeading;
