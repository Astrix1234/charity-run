import { StyledParticipant } from './StyledParticipantArea';
import { ParticipantAreaHeading } from '../ParticipantAreaHeading/ParticipantAreaHeading';
import { ParticipantAreaMain } from '../ParticipantAreaMain/ParticipantAreaMain';
import { ParticipantAreaProfile } from '../ParticipantAreaProfile/ParticipantAreaProfile';
import { Timetable } from '../Timetable/Timetable';
import { ParticipantAreaPrepare } from '../ParticipantAreaPrepare/ParticipantAreaPrepare';

export const ParticipantArea = () => {
  return (
    <StyledParticipant>
      <div className="container">
        <ParticipantAreaHeading />
        <ParticipantAreaMain />
        <ParticipantAreaProfile />
        <div id="run-info">
          <Timetable />
        </div>
        <ParticipantAreaPrepare />
      </div>
    </StyledParticipant>
  );
};
