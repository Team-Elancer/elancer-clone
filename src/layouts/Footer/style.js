import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  width: 100%;
  height: 300px;
  background-color: #3c3c3c;
  @media ${LAPTOP} {
    height: 240px;
  }
`;
export const SecondDiv = styled.div`
  width: 43%;
  height: 100%;
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${LAPTOP} {
    width: 62%;
  }
`;
export const ThirdDiv = styled.div`
  width: 100%;
  position: absolute;
`;
export const FourthDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: -15px 0 40px 0;
`;
export const Fifth = styled.div`
  display: inline-flex;
  align-items: end;
  justify-content: start;
  font-size: 0.7rem;
  color: #b7b7b7;
`;
export const Img = styled.img`
  width: 7rem;
`;
export const Span = styled.span`
  color: #8c8c8c;
  font-size: 0.6rem;
`;
export const UlTag = styled.ul`
  display: flex;
  font-size: 0.8rem;
  font-weight: 800;
`;
export const LiTag = styled.li`
  list-style: none;
  padding: 0 5px;
`;
export const Atag = styled.a`
  text-decoration: none;
  color: white;
`;
export const Ptag = styled.p`
  padding-left: 35px;
`;
