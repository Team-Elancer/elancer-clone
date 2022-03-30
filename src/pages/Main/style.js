import styled from 'styled-components';
import mainbg from 'assets/images/main-bg.png';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  font-family: KoPubWorld Dotum, sans-serif;
`;
export const BackImg = styled.div`
  background-image: url(${mainbg});
  width: 100%;
  height: 100%;
  background-size: 120%;
  background-repeat: no-repeat;
  background-position: center;
  border-bottom: 1px solid #d3d3d3;
  padding-bottom: 50px;
  @media ${TABLET} {
    background-size: 200%;
  }
  @media ${LAPTOP} {
    background-size: 120%;
  }
`;
export const SecondDiv = styled.div`
  padding-top: 30px;
  width: 370px;
  margin: 0 auto;
  display: flex;
  align-items: end;
  justify-content: start;
  @media ${TABLET} {
    padding-top: 55px;
    width: 740px;
  }
  @media ${LAPTOP} {
    width: 800px;
  }
`;
export const Img = styled.img`
  width: 219px;
  border-radius: 7px;
  @media ${TABLET} {
    width: 413px;
  }
  @media ${LAPTOP} {
    width: 480px;
  }
`;
export const TextDiv = styled.div`
  font-family: 'KoPubWorldDotum' sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  bottom: 0;
  padding-left: 10px;
  line-height: 3vh;
  @media ${TABLET} {
    font-size: 1.8rem;
    line-height: 5vh;
  }
  @media ${LAPTOP} {
    font-size: 1.8rem;
  }
`;
export const ThirdDiv = styled.div`
  width: 370px;
  margin: 0 auto;
  @media ${TABLET} {
    width: 730px;
  }
  @media ${LAPTOP} {
    width: 800px;
    margin: 0 auto;
  }
`;
