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
    height: 300px;
  }
`;
export const SecondDiv = styled.div`
  width: 100%;
  height: 70%;
  padding: 50px 0 0 10px;
  position: relative;
  display: inline-block;

  @media ${TABLET} {
    display: block;
    padding: 0;
    width: 97%;
    margin: 0 auto;
  }
  @media ${LAPTOP} {
    width: 800px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const MarginBottomP = styled.p`
  padding-bottom: 30px;
  @media ${TABLET} {
    padding: 50px 0 30px 0;
  }
  @media ${LAPTOP} {
    width: 500px;
    margin: 0 auto;
  }
`;
export const ThirdDiv = styled.div`
  width: 90%;
  position: absolute;
  display: inline-block;
  @media ${TABLET} {
    width: 100%;
    display: block;
  }
  @media ${TABLET} {
    padding: 50px 0 30px 0;
  }
`;
export const FourthDiv = styled.div`
  display: inline-block;
  @media ${TABLET} {
    display: block;
  }
  @media ${LAPTOP} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 30px;
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
  @media ${LAPTOP} {
    font-size: 0.7rem;
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
  @media ${LAPTOP} {
    width: 896px;
    padding-top: 30px;
    margin: 0 auto;
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
