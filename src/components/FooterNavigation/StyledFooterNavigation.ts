import styled from 'styled-components';

export const StyledNavigation = styled.div`
  text-align: center;
  ul {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2em;
  }

  @media screen and (max-width: 720px) {
    font-size: 1rem;
    ul {
      text-align: left;
      row-gap: 0.7rem;
      justify-content: left;
      flex-flow: column wrap;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;
