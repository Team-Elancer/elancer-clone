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
  font-size: 1.7rem;
  font-weight: 600;
  padding-bottom: 25px;
  @media ${LAPTOP} {
    font-size: 23px;
  }
`;
export const IconDiv = styled.div`
  width: 23%;
  height: 60px;
  background-color: ${(props) => props.color};
  border: 1px solid none;
  border-radius: 8px;
  margin: 0 15px 15px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${LAPTOP} {
    width: 160px;
    height: 55px;
  }
`;
export const Img = styled.img`
  width: 21%;
  padding-left: 8px;
  @media ${LAPTOP} {
    width: 23%;
  }
`;
export const TextSpan = styled.span`
  font-size: 1.1rem;
  color: white;
  margin-right: 7px;
  @media ${LAPTOP} {
    font-size: 15px;
  }
`;
