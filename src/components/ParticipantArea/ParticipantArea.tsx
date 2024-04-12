import { StyledParticipant } from './StyledParticipantArea';
import { ParticipantAreaHeading } from '../ParticipantAreaHeading/ParticipantAreaHeading';
import { ParticipantAreaMain } from '../ParticipantAreaMain/ParticipantAreaMain';
import { ParticipantAreaProfile } from '../ParticipantAreaProfile/ParticipantAreaProfile';
import { ParticipantAreaPrepare } from '../ParticipantAreaPrepare/ParticipantAreaPrepare';
import { Timetable } from '../Timetable/Timetable';

export const ParticipantArea = () => {
  return (
    <StyledParticipant>
      <div className="container">
        <ParticipantAreaHeading />
        <ParticipantAreaMain />
        <ParticipantAreaProfile />
        <Timetable />
        <ParticipantAreaPrepare />
      </div>
    </StyledParticipant>
  );
};
