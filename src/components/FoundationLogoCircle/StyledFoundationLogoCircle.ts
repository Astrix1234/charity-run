import styled from 'styled-components';

export const StyledLogo = styled.div`
  display: grid;
  place-items: center;
  img {
    position: relative;
    min-width: 95px;
    height: 95px;
    z-index: 1;
  }

  .whiteCircle {
    position: absolute;
    background-color: white;
    width: 130px;
    height: 130px;
    border-radius: 50%;
  }
`;
