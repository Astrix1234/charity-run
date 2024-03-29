import { ParticipantAreaData } from '../ParticipantAreaData/ParticipantAreaData';
import { ParticipantAreaResults } from '../ParticipantAreaResults/ParticipantAreaRun';
import { StyledRun } from './StyledParticipantAreaRun';

export const ParticipantAreaRun = () => {
  return (
    <StyledRun>
      <ParticipantAreaData />
      <ParticipantAreaResults />
    </StyledRun>
  );
};
