import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  margin: 40px auto;
  color: #8c8c8c;
  font-size: 1.125rem;
  font-weight: 600;
  @media ${LAPTOP} {
    font-size: 0.8rem;
  }
`;
export const FirstDiv = styled.div`
  text-align: center;
  padding-bottom: 15px;
`;
export const SeconddDiv = styled.div`
  text-align: center;
  margin: 0 auto;
  border-right: 1px solid #d3d3d3;
  border-left: 1px solid #d3d3d3;
  padding-bottom: 15px;
`;
export const ThirdDiv = styled.div`
  text-align: center;
  padding: 0 40px;
`;
export const WordSpan = styled.span`
  display: block;
  font-size: 1.125rem;
  font-weight: 600;
  padding-bottom: 15px;
  @media ${LAPTOP} {
    font-size: 13px;
  }
`;
export const NumberSpan = styled.span`
  color: #252525;
  font-size: 2rem;
  padding-right: 5px;
  display: inline-block;
  @media ${LAPTOP} {
    font-size: 20px;
  }
`;
