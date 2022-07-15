import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  width: 100px;
  height: 40px;
  border: solid 2px #d7d7d7;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.5rem;
  font-size: 0.75rem;
  font-weight: 800;
  @media ${TABLET} {
    width: 150px;
    height: 50px;
    font-size: 1rem;
  }
  @media ${LAPTOP} {
  }
`;
