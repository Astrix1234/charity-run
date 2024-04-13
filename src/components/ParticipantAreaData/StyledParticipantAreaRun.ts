import styled from 'styled-components';

export const StyledData = styled.div`
  padding-right: 2rem;
  overflow-wrap: break-word;

  p:nth-child(2n + 1) {
    color: black;
    padding-bottom: 1rem;
  }

  p:nth-child(2n) {
    font-weight: 800;
  }

  @media screen and (max-width: 1349px) {
    padding-right: 0;
  }
`;
