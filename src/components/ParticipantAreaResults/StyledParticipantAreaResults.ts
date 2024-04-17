import styled from 'styled-components';
import { h2Size, h3Size } from '../ParticipantArea/StyledParticipantArea';

export const StyledResults = styled.div`
  border-left: 2px solid black;
  padding-left: 2rem;

  @media screen and (max-width: 1349px) {
    border-top: 2px solid black;
    border-left: 0;
    padding-top: 4rem;
    padding-left: 0;
  }

  h2,
  h3 {
    font-weight: 500;
    padding-bottom: ${h2Size};
  }

  h2 {
    font-size: ${h2Size};
  }

  h3 {
    font-size: ${h3Size};
  }
`;
