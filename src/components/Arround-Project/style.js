import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  margin-top: 70px;
`;
export const FirstDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`;
export const H1 = styled.h1`
  font-size: 0.875rem;
  font-weight: 600;
  padding-bottom: 25px;
  @media ${LAPTOP} {
    font-size: 23px;
  }
`;
export const IconDiv = styled.div`
  width: 16vh;
  height: 80px;
  background-color: ${(props) => props.color};
  border: 1px solid none;
  border-radius: 8px;
  margin: 0 8px 28px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media ${LAPTOP} {
    width: 160px;
    height: 55px;
  }
`;
export const Img = styled.img`
  width: 5vh;
  padding-top: 15px;
  @media ${LAPTOP} {
    width: 23%;
  }
`;
export const TextSpan = styled.span`
  font-size: 0.75rem;
  color: black;
  padding-top: 30px;
  border-width: 500;
  @media ${LAPTOP} {
    font-size: 15px;
  }
`;
