import styled from 'styled-components';

export const StyledData = styled.div`
  padding-right: 2rem;
  border-right: 2px solid black;

  div div {
    display: flex;
    gap: 1rem;
    justify-content: right;
  }

  p:nth-child(2n + 1) {
    color: black;
  }

  p:nth-child(2n) {
    font-weight: 800;
  }
`;
