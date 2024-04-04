import styled from 'styled-components';

export const StyledData = styled.div`
  padding-right: 2rem;

  p:nth-child(2n + 1) {
    color: black;
  }

  p:nth-child(2n) {
    font-weight: 800;
  }
`;
