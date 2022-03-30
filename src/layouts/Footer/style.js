import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  width: 100%;
  height: 350px;
  top: 50px;
  background-color: #3c3c3c;
  @media ${TABLET} {
    height: 319px;
  }
  @media ${LAPTOP} {
    height: 240px;
  }
`;
export const SecondDiv = styled.div`
  width: 100%;
  height: 70%;
  margin: 50px 0 0 10px;
  position: relative;
  display: inline-block;
  @media ${TABLET} {
    display: block;
  }
  @media ${LAPTOP} {
    width: 62%;
  }
`;
export const MarginBottomP = styled.p`
  padding-bottom: 30px;
  @media ${TABLET} {
    padding: 50px 0 30px 0;
  }
`;
export const ThirdDiv = styled.div`
  width: 100%;
  position: absolute;
  display: inline-block;
  @media ${TABLET} {
    display: block;
  }
  @media ${TABLET} {
    display: block;
  }
`;
export const FourthDiv = styled.div`
  display: inline-block;
  @media ${TABLET} {
    display: block;
  }
`;
export const Fifth = styled.div`
  display: inline-block;
  font-size: 0.7rem;
  line-height: 15px;
  width: 100%;
  color: #b7b7b7;
  @media ${TABLET} {
    display: flex;
    align-items: bottom;
    justify-content: start;
    font-size: 0.75rem;
    line-height: 18px;
  }
`;
export const Img = styled.img`
  width: 7rem;
`;
export const Span = styled.span`
  color: #8c8c8c;
  font-size: 0.6rem;
  @media ${TABLET} {
    font-size: 0.7rem;
  }
`;
export const UlTag = styled.ul`
  display: flex;
  font-size: 0.75rem;
  font-weight: 800;
  padding-bottom: 30px;
  @media ${TABLET} {
    font-size: 0.8rem;
    align-items: center;
    justify-content: end;
    margin-right: 15px;
  }
`;
export const LiTag = styled.li`
  list-style: none;
  padding: 0 5px;
  @media ${TABLET} {
    padding: 0 13px;
  }
`;
export const Atag = styled.a`
  text-decoration: none;
  color: white;
`;
export const Ptag = styled.p`
  @media ${TABLET} {
    padding: 2.3rem 0 0 1.4rem;
  }
`;
