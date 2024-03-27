import { StyledParticipant } from './StyledParticipantArea';
import { ParticipantAreaHeading } from '../ParticipantAreaHeading/ParticipantAreaHeading';
import { ParticipantAreaZone } from '../ParticipantAreaZone/ParticipantAreaZone';
import { ParticipantAreaRun } from '../ParticipantAreaRun/ParticipantAreaRun';
import { Timetable } from '../Timetable/Timetable';
import { ParticipantAreaPrepare } from '../ParticipantAreaPrepare/ParticipantAreaPrepare';

export const ParticipantArea = () => {
  return (
    <StyledParticipant>
      <div className="container">
        <ParticipantAreaHeading />
        <ParticipantAreaZone />
        <ParticipantAreaRun />
        <Timetable />
        <ParticipantAreaPrepare />
      </div>
    </StyledParticipant>
  );
};
