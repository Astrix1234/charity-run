import { StyledCircle } from './StyledParticipantAreaNumberCircle';

type CircleProps = {
  number: number;
};

export const ParticipantAreaNumberCircle = ({ number }: CircleProps) => {
  return <StyledCircle>{number}</StyledCircle>;
};
