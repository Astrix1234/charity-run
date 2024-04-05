import { StyledItem } from './StyledParticipantAreaItemSquare';
import DotsSquare from '../../Icons/DotsSquare/DotsSquare';
import NumberCircle from '../NumberCircle/NumberCircle';
import { ReactNode } from 'react';

type ItemSquareProps = {
  pos: number;
  children: ReactNode;
};

export const ParticipantAreaItemSquare = ({
  pos,
  children,
}: ItemSquareProps) => {
  return (
    <StyledItem>
      <div className="circle">
        <NumberCircle number={pos} />
      </div>
      <div className="dots">
        <DotsSquare />
      </div>
      {children}
    </StyledItem>
  );
};
