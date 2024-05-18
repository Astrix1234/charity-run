import styled from 'styled-components';
import {
  h1Size,
  h2Size,
  pSize,
} from '../ParticipantArea/StyledParticipantArea';

export const StyledNavigation = styled.div`
  width: calc(100% + 80px);
  background-color: #ceeaeb;
  border-radius: 2rem;
  text-align: right;
  position: relative;
  right: 0px;
  padding: ${h2Size};

  h1,
  h2 {
    padding-bottom: ${h1Size};
    font-weight: 500;
  }

  h1 {
    font-size: ${h1Size};
  }

  h2 {
    font-size: ${h2Size};
  }

  p {
    padding-bottom: ${h2Size};
    font-size: ${pSize};
    font-weight: 600;
  }
`;
