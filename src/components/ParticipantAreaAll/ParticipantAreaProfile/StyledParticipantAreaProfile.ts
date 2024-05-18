import styled from 'styled-components';
import {
  h1Size,
  h2Size,
  pSize,
} from '../ParticipantArea/StyledParticipantArea';

export const StyledProfile = styled.div`
  display: flex;
  text-align: center;

  & > * {
    min-width: 50%;
  }

  @media screen and (max-width: 1349px) {
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;

    & > * {
      max-width: 90%;
    }
  }

  h1 {
    font-size: ${h1Size};
    font-weight: 500;
    margin-bottom: ${h1Size};
  }

  p {
    font-size: ${pSize};
    font-weight: 600;
    padding-bottom: ${h2Size};
  }

  @media screen and (max-width: 800px) {
    text-align: left;
    justify-content: left;
    padding-left: ${h2Size};
  }
`;
