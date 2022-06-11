import styled from 'styled-components';
import mainEnterprise from 'assets/images/main-enterprise.png';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: ${(props) => props.top};
  position: ${(props) => props.relative};
`;

export const BgDiv = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${mainEnterprise});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;
export const WhiteDiv = styled.div``;

export const CenterDiv = styled.div`
  width: 100%;
  max-width: 64rem;
  margin-left: 0.5rem;
  height: 100%;
  padding-bottom: 5rem;
  @media ${TABLET} {
    margin: 0 auto;
    padding-bottom: 8rem;
    width: 740px;
  }
  @media ${LAPTOP} {
    margin: 0 auto;
    padding-bottom: 8rem;
    width: 840px;
  }
`;
export const H1 = styled.h1`
  color: white;
  font-family: 'KoPubWorldDotum', sans-serif;
  font-size: 1.2rem;
  padding-top: 3rem;
  @media ${TABLET} {
    font-size: 2.6rem;
    letter-spacing: -1px;
    font-weight: 800;
    line-height: 3rem;
    width: 800;
  }
  @media ${LAPTOP} {
    font-size: 2.4rem;
    line-height: 3rem;
    width: 800;
  }
`;
export const PTag = styled.p`
  padding: 0.5rem 0;
  color: white;
  background-color: black;
  font-size: 0.8rem;
  font-weight: 800;
  width: 148px;
  height: 100%;
  text-align: center;
  margin-top: 1rem;
  border-radius: 0.3rem;
  @media ${TABLET} {
    border-radius: 0.5rem;
  }
  @media ${LAPTOP} {
    border-radius: 0.5rem;
  }
`;
export const FlexDiv = styled.div`
  display: none;
  @media ${TABLET} {
    border-radius: 3rem;
    width: 740px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: start;
    background-color: ${(props) => props.color};
    margin: 0 auto;
    z-index: 98;
    position: relative;
  }
  @media ${LAPTOP} {
    width: 840px;
  }
`;
export const jobButton = styled.button`
  @media ${TABLET} {
    width: ${(props) => props.width};
    height: 98%;
    border: none;
    outline: none;
    background-color: #0000;
    text-align: start;
    padding: 0 2rem;
    border-radius: 5rem;
    cursor: pointer;
    overflow: hidden;
  }
  @media ${LAPTOP} {
  }
`;
export const Span = styled.span`
  @media ${TABLET} {
    font-size: 0.8rem;
    color: ${(props) => props.color};
  }
  @media ${LAPTOP} {
  }
`;
export const ButtonP = styled.p`
  @media ${TABLET} {
    font-size: 1.3rem;
    color: ${(props) => props.color};
  }
  @media ${LAPTOP} {
  }
`;
export const LineDiv = styled.div`
  @media ${TABLET} {
    width: 1px;
    height: 3rem;
    background-color: ${(props) => props.color};
  }
  @media ${LAPTOP} {
  }
`;
export const Img = styled.img`
  width: 50px;
  cursor: pointer;
  margin-right: 15px;
`;
export const MainDiv = styled.div`
  width: 390px;
  height: 100%;
  margin: 0 auto;
  @media ${TABLET} {
    width: 750px;
  }
  @media ${LAPTOP} {
    width: 800px;
  }
`;
export const ModalDiv = styled.div`
  display: none;
  @media ${TABLET} {
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: white;
    border-radius: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 98;
    position: relative;
    margin-left: ${(props) => props.left};
  }
  @media ${LAPTOP} {
    margin-left: ${(props) => props.laptopLeft};
  }
`;
export const UlTag = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
export const LiTag = styled.li`
  padding-right: 0.5rem;
`;
export const Input = styled.input`
  appearance: none;
  border: 2px solid ${(props) => props.brColor};
  width: 100%;
  height: 42px;
  border-radius: 3rem;
  margin: 1rem 1rem 0 0;
  background-color: ${(props) => props.bgColor};
`;
export const RadioLabel = styled.label`
  top: -1.9rem;
  left: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  position: relative;
  cursor: pointer;
`;
