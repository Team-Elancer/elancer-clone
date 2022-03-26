import styled from 'styled-components';
import mainbg from 'assets/images/main-bg.png';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  z-index: 0;
  position: relative;
  overflow: hidden;
`;
export const BackImg = styled.div`
  background-image: url(${mainbg});
  width: 100%;
  height: 670px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  border-bottom: 1px solid #d3d3d3;
`;
export const SecondDiv = styled.div`
  padding-top: 70px;
  width: 42%;
  margin: 0 auto;
  display: flex;
  align-items: end;
  justify-content: start;
`;
export const Img = styled.img`
  width: 60vh;
  height: 60vh;
  border-radius: 15px;
`;
export const TextDiv = styled.div`
  font-family: 'KoPubWorldDotum' sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  bottom: 0;
  padding-left: 30px;
`;
export const ThirdDiv = styled.div`
  width: 62%;
  margin: 0 auto;
`;
