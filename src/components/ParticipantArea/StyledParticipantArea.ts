import styled from 'styled-components';

export const StyledParticipant = styled.div`
  background: url('/charity-run/public/images/cut-background.png') no-repeat;
  background-size: 100% 15%;

  .container {
    max-width: 1440px;
    padding-inline: 80px;
    margin-inline: auto;

    #heading {
      padding-top: 80px;
    }

    #participantMain,
    #myData,
    #prepare {
      padding-top: 150px;
    }

    a {
      transition: color 400ms;
    }

    a:hover {
      color: orange;
    }
  }
`;
