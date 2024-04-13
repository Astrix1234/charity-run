import { StyledItem } from './StyledParticipantAreaItemSquare';
import DotsSquare from '../../Icons/DotsSquare/DotsSquare';
import { ParticipantAreaNumberCircle } from '../ParticipantAreaNumberCircle/ParticipantAreaNumberCircle';
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
        <ParticipantAreaNumberCircle number={pos} />
      </div>
      <div className="dots">
        <DotsSquare />
      </div>
      {children}
    </StyledItem>
  );
};
