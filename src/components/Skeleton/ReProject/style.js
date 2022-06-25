import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  width: 100%;
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
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
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
  overflow-y: hidden;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: ${(props) => props.bgColor};
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
  background-color: black;
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
  overflow: hidden;
  white-space: nowrap;
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
export const MobileCircle = styled.div`
  display: flex;
  align-items: center;
  @media ${TABLET} {
    display: none;
  }
  @media ${LAPTOP} {
  }
`;
export const TabletCircle = styled.div`
  display: none;
  @media ${TABLET} {
    display: flex;
    align-items: center;
  }
  @media ${LAPTOP} {
  }
`;
export const MarginRight = styled.div`
  margin-right: 0.5rem;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;
export const MobileTitle = styled.div`
  margin-top: 0.8rem;
  @media ${TABLET} {
    display: none;
  }
  @media ${LAPTOP} {
  }
`;
export const TabletTitle = styled.div`
  display: none;
  @media ${TABLET} {
    margin-top: 1rem;
    display: block;
  }
`;
