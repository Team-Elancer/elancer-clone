import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  width: 415px;
  height: 415px;
  position: absolute;
  z-index: 99;
  border: 1px solid black;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    left: 15rem;
  }
`;

export const Button = styled.button`
  border: 1px solid black;
  position: absolute;
  cursor: pointer;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    width: 7rem;
    margin: -2rem 0 0 18.9rem;
  }
`;
