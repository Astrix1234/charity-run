import styled from 'styled-components';

export const h1Size = 'min(3rem, max(1.5rem,6vw))';
export const h2Size = 'min(2.5rem, max(1.25rem, 5vw))';
export const h3Size = 'min(1.5rem, max(1.15rem, 4.5vw))';
export const pSize = 'min(1.25rem, max(1rem, 4vw))';

export const StyledParticipant = styled.div`
  overflow-x: hidden;
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
        margin-bottom: -100px;
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
