import styled from 'styled-components';

export const StyledParticipant = styled.div`
  background: url('images/cut-background.png') no-repeat;
  background-size: 100% 15%;

  .container {
    max-width: 1440px;
    padding-inline: 80px;
    margin-inline: auto;
  }
  #run-info {
    display: flex;
    justify-content: center;
  }
  #timetable {
    min-width: 1440px;
  }

  @media screen and (max-width: 1359px) {
    .container {
      padding-inline: 20px;
      #participantMain,
      #my-data {
        padding-top: 45px;
      }

      #before-run {
        padding-top: 65px;
      }

      #run-info {
        padding-top: 0;
      }

      #timetable {
        min-width: 390px;
      }
    }
  }

  #heading {
    padding-top: 80px;
  }

  #participantMain,
  #my-data,
  #run-info,
  #before-run {
    padding-top: 150px;
  }

  a,
  .map {
    transition: color 400ms;
  }

  a:hover,
  .map:hover {
    color: var(--orange);
  }
`;
