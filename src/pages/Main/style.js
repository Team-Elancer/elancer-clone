import styled from 'styled-components';
import mainbg from 'assets/images/main-bg.png';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  z-index: 0;
  position: relative;
  overflow: hidden;
  font-family: KoPubWorld Dotum, sans-serif;
`;
export const BackImg = styled.div`
  background-image: url(${mainbg});
  width: 100%;
  height: 100%;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  border-bottom: 1px solid #d3d3d3;
  padding-bottom: 50px;

  @media ${LAPTOP} {
    background-size: 120%;
  }
`;
export const SecondDiv = styled.div`
  padding-top: 70px;
  width: 43%;
  margin: 0 auto;
  display: flex;
  align-items: end;
  justify-content: start;
  @media ${LAPTOP} {
    width: 62%;
  }
`;
export const Img = styled.img`
  width: 45vh;
  height: 45vh;
  border-radius: 7px;
  @media ${LAPTOP} {
    width: 60vh;
    height: 60vh;
  }
`;
export const TextDiv = styled.div`
  font-family: 'KoPubWorldDotum' sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  bottom: 0;
  padding-left: 30px;
  line-height: 40px;
  @media ${LAPTOP} {
    font-size: 1.6rem;
  }
`;
export const ThirdDiv = styled.div`
  width: 44%;
  margin: 0 auto;
  @media ${LAPTOP} {
    width: 62%;
  }
`;
