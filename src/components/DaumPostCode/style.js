import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  z-index: 99999;
  width: 415px;
  height: 415px;
  position: absolute;
  z-index: 99;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border: none;

  @media ${TABLET} {
  }

  @media ${LAPTOP} {
  }
`;

export const Button = styled.button`
  z-index: 99999;
  position: relative;
  height: 40px;
  top: 0px;
  right: 0;
  width: 100%;
  border: none;
  font-weight: bold;
  box-shadow: rgb(0 0 0 / 6%) 0px -4px 15px;
  cursor: pointer;
`;
