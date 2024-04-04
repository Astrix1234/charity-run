import { ParticipantAreaData } from '../ParticipantAreaData/ParticipantAreaData';
import { ParticipantAreaResults } from '../ParticipantAreaResults/ParticipantAreaResults';
import { StyledProfile } from './StyledParticipantAreaProfile';

export const ParticipantAreaProfile = () => {
  return (
    <StyledProfile as="section" id="myData">
      <ParticipantAreaData />
      <ParticipantAreaResults />
    </StyledProfile>
  );
};
