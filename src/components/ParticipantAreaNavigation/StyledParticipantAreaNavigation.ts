import styled from 'styled-components';

export const StyledNavigation = styled.div`
  width: calc(100% + 80px);
  background-color: #ceeaeb;
  border-radius: 2rem;
  text-align: right;
  position: relative;
  right: 0px;
  padding: min(2rem, 5vw);

  h1,
  h2 {
    padding-bottom: min(15vw, 5rem);
    font-weight: 500;
  }

  h1 {
    font-size: min(3.125rem, 6vw);
  }

  h2 {
    font-size: min(2.4375rem, 5vw);
  }

  p {
    padding-bottom: min(10vw, 2.5rem);
    font-size: min(1.25rem, 4vw);
    font-weight: 600;
    /* white-space: break-spaces; */
  }
`;
