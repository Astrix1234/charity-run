import styled from 'styled-components';

export const StyledParticipant = styled.div`
  background: url('/charity-run/public/images/participant-background.png')
    no-repeat;
  background-size: 100% 15%;

  .container {
    max-width: 1440px;
    padding-inline: 80px;
    margin-inline: auto;
    display: flex;
    flex-flow: column;
    gap: 5rem;
  }
`;
