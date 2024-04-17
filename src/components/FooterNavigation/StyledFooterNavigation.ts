import styled from 'styled-components';

export const StyledNavigation = styled.div`
  text-align: center;
  ul {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2em;
    justify-content: center;
  }

  @media screen and (max-width: 720px) {
    font-size: 1rem;
    ul {
      row-gap: 0.7rem;
      flex-flow: column wrap;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;
