import styled from 'styled-components';
import { pSize } from '../ParticipantArea/StyledParticipantArea';

export const StyledData = styled.div`
  padding-right: 2rem;
  overflow-wrap: break-word;

  p:nth-child(2n + 1) {
    color: black;
    padding-bottom: 1rem;
  }

  p:nth-child(2n) {
    font-weight: 800;
  }

  .password {
    color: var(--orange);
    font-size: min(1rem, max(0.9rem, 3.5vw));
    font-weight: 700;
    transition: all 400ms;
  }

  .password:hover {
    text-decoration-line: underline;
    color: red;
  }

  @media screen and (max-width: 1349px) {
    padding-right: 0;
  }
`;
