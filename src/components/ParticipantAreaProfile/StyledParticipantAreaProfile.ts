import styled from 'styled-components';

export const StyledProfile = styled.div`
  height: 75vh;
  width: calc(100% + 80px);
  background-color: #ceeaeb;
  border-radius: 2rem;
  text-align: right;
  position: relative;
  right: 0px;
  padding: 5rem 5rem 0 0;

  h1,
  h2 {
    padding-bottom: 5rem;
    font-weight: 500;
  }

  h1 {
    font-size: 3.125rem;
  }

  h2 {
    font-size: 2.4375rem;
  }

  p {
    padding-bottom: 2.5rem;
    font-size: 1.25rem;
    font-weight: 600;
  }

  p {
    transition: color 400ms;
  }
  p:hover {
    color: orange;
  }
`;
