import styled from 'styled-components';

export const StyledLogo = styled.div`
  display: grid;
  place-items: center;
  img {
    position: relative;
    width: 95px;
    height: 95px;
  }

  &::before {
    position: absolute;
    content: '';
    background-color: white;
    width: 130px;
    height: 130px;
    border-radius: 50%;
  }
`;
