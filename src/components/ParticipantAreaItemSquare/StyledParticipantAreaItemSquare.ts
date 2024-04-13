import styled from 'styled-components';

export const StyledItem = styled.div`
  position: relative;
  border-radius: 1.8rem;
  background-color: var(--beige);
  padding: 3% 5%;
  width: min(30rem, 90vw);
  height: min(30rem, 90vw);
  background-color: var(--beige);

  .circle {
    padding-bottom: min(3vw, 7%);
  }
  .dots {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    & svg {
      width: 100%;
      height: 100%;
    }
  }
`;
