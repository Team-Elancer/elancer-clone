import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  width: 100%;
  margin-top: 70px;
`;
export const FirstDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
export const ButtonDiv = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  @media ${TABLET} {
    display: flex;
  }
`;
export const Img = styled.img`
  cursor: pointer;
  @media ${TABLET} {
    width: 2rem;
    margin-bottom: 30px;
  }
  @media ${LAPTOP} {
    width: 2.5rem;
    margin: 0 auto;
  }
`;
export const SecondDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  align-items: center;
  justify-content: start;
  @media ${LAPTOP} {
    overflow-x: hidden;
  }
`;
export const ProjectDiv = styled.div`
  width: 100%;
  height: 243.23px;
  margin: 15px 15px 15px 0;
  @media ${TABLET} {
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -46}rem);
    height: 21rem;
  }
  @media ${LAPTOP} {
    height: 334.69px;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -50}rem);
  }
`;
export const UpDiv = styled.div`
  width: 180px;
  height: 50%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: #181818;
  @media ${TABLET} {
    width: 16.4rem;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
  @media ${LAPTOP} {
    width: 16rem;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;
export const DownDiv = styled.div`
  height: 50%;
  background-color: #3c3c3c;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  position: relative;
  @media ${TABLET} {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
  @media ${LAPTOP} {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
export const BackImg = styled.div`
  z-index: 1;
  width: 90%;
  height: 70%;
  margin: auto;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.url});
  cursor: pointer;
  @media ${LAPTOP} {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
export const DivTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const SpanTag = styled.span`
  color: white;
  font-size: 0.625rem;
  font-weight: 300;
  padding: 8px;
  border-radius: 5px;
  background-color: #3c3c3c;
  margin: 10px 0 0 10px;
  @media ${TABLET} {
    font-size: 0.8rem;
  }
  @media ${LAPTOP} {
    font-size: 0.715rem;
  }
`;
export const HeartBackDiv = styled.div`
  padding: 5px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  text-align: center;
  background-color: white;
  margin: 10px 15px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media ${TABLET} {
    width: 1.8rem;
    height: 1.8rem;
  }
  @media ${LAPTOP} {
    width: 1.8rem;
    height: 1.8rem;
  }
`;
export const HearDiv = styled.div`
  font-size: 0.7rem;
  text-align: center;
  margin-top: 3px;
  @media ${TABLET} {
    font-size: 0.9rem;
  }
  @media ${LAPTOP} {
    font-size: 0.9rem;
  }
`;
export const DownSmallDiv = styled.div`
  width: 80%;
  height: 80%;
  margin: 15px 15px;
  position: absolute;
`;
export const BigSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: start;

  white-space: nowrap;
`;
export const MiniSpan = styled.span`
  color: #ff6b6b;
  border: 1px solid #ff6b6b;
  border-radius: 5px;
  font-size: 0.625rem;
  font-weight: 300;
  padding: 5px;
  margin-right: 6px;
  @media ${TABLET} {
    font-size: 0.815rem;
  }
  @media ${LAPTOP} {
    font-size: 0.7rem;
  }
`;
export const MiniSecond = styled.span`
  color: white;
  background-color: #707070;
  border-radius: 5px;
  font-size: 0.625rem;
  letter-spacing: 1px;
  padding: 5px;
  margin-right: 6px;
  @media ${TABLET} {
    font-size: 0.815rem;
  }
  @media ${LAPTOP} {
    font-size: 0.7rem;
  }
`;
export const hiddenP = styled.p`
  position: relative;
  top: 15%;
  display: flex;
  align-items: top;
  justify-content: center;
  overflow: hidden;
  height: 2rem;
  @media ${TABLET} {
    top: 20%;
    height: 2.2rem;
  }
  @media ${LAPTOP} {
    height: 2.4rem;
  }
`;
export const TextaTag = styled.a`
  color: white;
  text-decoration: none;
  font-size: 0.6875rem;
  @media ${TABLET} {
    font-size: 1.125rem;
  }
  @media ${LAPTOP} {
    font-size: 1rem;
    line-height: 1.2rem;
  }
`;
export const Ptag = styled.p`
  color: #a5a5a5;
  top: 90%;
  font-size: 0.1rem;
  position: absolute;
  overflow: hidden;
  @media ${TABLET} {
    font-size: 0.8rem;
  }
  @media ${LAPTOP} {
    top: 90%;
    font-size: 0.81rem;
  }
`;
