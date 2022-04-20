import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const SizeDiv = styled.div`
  width: 96%;
  height: 96%;
  margin: auto;
  padding: 2rem 0;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    width: 1240px;
  }
`;

export const H1 = styled.h1`
  font-size: 0.9rem;
  font-weight: 800;
  padding: ${(props) => props.top} 0 ${(props) => props.bottom} 0;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    font-size: 2.2rem;
    padding: ${(props) => props.laptoptop} 0 ${(props) => props.laptopBottom} 0;
  }
`;

export const OverFlowDiv = styled.div`
  overflow: auto;
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    overflow: visible;
  }
`;

export const FlexDiv = styled.div`
  display: flex;
  justify-content: start;
  width: ${(props) => props.width};
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    width: ${(props) => props.width};
  }
`;

export const BoardDiv = styled.div`
  width: 100%;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    width: 80%;
    margin: 0 auto;
  }
`;
export const MiddleDiv = styled.div`
  display: none;
  @media ${TABLET} {
    display: block;
  }
  @media ${LAPTOP} {
    width: 120px;
  }
`;

export const CardSpan = styled.span`
  color: white;
  font-weight: 800;
  padding: 0.7rem 0.6rem;
  background-color: ${(props) => props.bgcolor};
  margin-right: 0.5rem;
  border-radius: 0.3rem;
  text-align: center;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    font-size: ${(props) => props.textSize};
    padding: ${(props) => props.paddingHeight} ${(props) => props.paddingWidth};
    border-radius: ${(props) => props.radius};
    margin-right: 0.8rem;
  }
`;

export const UlTag = styled.ul`
  display: block;
  @media ${TABLET} {
    display: ${(props) => props.display};
    align-items: center;
    justify-content: start;
    flex-wrap: wrap;
  }
  @media ${LAPTOP} {
  }
`;
export const MenuLi = styled.li`
  font-size: 1.3rem;
  font-weight: 600;
  padding: 1rem 1rem;
  border-radius: 0.6rem;
  margin-bottom: 0.2rem;
  &:hover {
    background-color: #f2f2f2;
  }
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;

export const LiTag = styled.li`
  margin: 0 1rem 0.4rem 0;
`;
export const LiPtag = styled.p`
  font-size: 0.8rem;
  font-weight: 800;
  background-color: #e1e1e1;
  padding: 0.8rem 0.6rem;
  border-radius: 0.4rem;
  @media ${TABLET} {
    width: 25.7rem;
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  @media ${LAPTOP} {
    width: 25.7rem;
  }
`;
export const EcardDiv = styled.div`
  display: none;
  @media ${TABLET} {
    width: 100%;
    height: 100%;
    display: block;
    background-color: #f2f2f2;
    border-bottom-left-radius: 0.4rem;
    border-bottom-right-radius: 0.4rem;
  }
  @media ${LAPTOP} {
  }
`;
export const EcarcdPaddingDiv = styled.div`
  @media ${TABLET} {
    display: ${(props) => props.display};
    align-items: center;
    padding: 1.5rem 1.5rem;
    margin: 0 auto;
  }
  @media ${LAPTOP} {
  }
`;

export const ProjectDiv = styled.div`
  width: 100%;
  height: 100%;
  margin-top: ${(props) => props.top};
`;
export const ProfileGo = styled.p`
  text-align: center;
  background-color: #ff6b6b;
  color: white;
  padding: 0.5rem 0.6rem;
  font: 1rem;
  font-weight: 800;
`;
