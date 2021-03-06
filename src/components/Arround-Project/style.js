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
  @media ${TABLET} {
    font-size: 1.8rem;
  }
  @media ${LAPTOP} {
    font-size: 1.8rem;
  }
`;
export const IconDiv = styled.div`
  width: 85.8px;
  height: 80px;
  background-color: ${(props) => props.color};
  border: 1px solid none;
  border-radius: 8px;
  margin: 0 8px 28px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  @media ${TABLET} {
    width: 174px;
    height: 4.5rem;
    margin: 0 15px 23px 0;
    flex-direction: row;
    justify-content: space-between;
  }
  @media ${LAPTOP} {
    width: 197px;
    height: 70px;
  }
`;
export const Img = styled.img`
  width: 40px;
  padding-top: 25px;
  @media ${TABLET} {
    width: 38px;
    padding: 0 0 0 8px;
  }
  @media ${LAPTOP} {
    width: 45px;
  }
`;
export const TextSpan = styled.span`
  font-size: 0.75rem;
  color: black;
  padding-top: 20px;
  border-width: 500;
  @media ${TABLET} {
    font-size: 1rem;
    padding: 0 10px 0 0;
    color: white;
  }
  @media ${LAPTOP} {
    font-size: 1.2rem;
  }
`;
