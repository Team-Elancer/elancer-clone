import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  min-width: 350px;
  max-width: 380px;
  height: 430px;
  background-color: white;
  padding: 0.8rem;
  position: absolute;
  z-index: 99;
  left: 1rem;
  border-radius: 2rem;
  color: black;
  top: 10rem;
  @media ${TABLET} {
    min-width: 580px;
    max-width: 600px;
    left: 6rem;
    height: 530px;
    top: 15rem;
  }
  @media ${LAPTOP} {
    min-width: 660px;
    max-width: 680px;
    left: 19rem;
    top: 15rem;
  }
`;

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.center};
  width: 100%;
  @media ${TABLET} {
    padding: 0 1rem;
  }
  @media ${LAPTOP} {
    padding: 0 2.5rem;
  }
`;

export const FlexnoPadding = styled.div`
  display: flex;
  align-items: center;
`;

export const CancelImg = styled.img`
  width: 2rem;
  cursor: pointer;
  @media ${TABLET} {
    width: 2.5rem;
  }
  @media ${LAPTOP} {
  }
`;

export const Title = styled.h1`
  font-size: 0.9rem;
  font-weight: 800;
  @media ${TABLET} {
    font-size: 1.3rem;
  }
  @media ${LAPTOP} {
    font-size: 1.3rem;
  }
`;

export const SubTitle = styled.h1`
  font-size: 0.6rem;
  font-weight: 800;
  color: #a5a5a5;
  margin-left: 0.5rem;
  @media ${TABLET} {
    font-size: 1rem;
  }
  @media ${LAPTOP} {
    font-size: 0.9rem;
  }
`;
export const ContentDiv = styled.div`
  min-width: 300px;
  max-width: 330px;
  height: 300px;
  margin: 0 auto;
  border-top: solid 2px #c4c4c4;
  border-bottom: solid 2px #c4c4c4;
  margin-top: 1rem;
  overflow-y: auto;
  @media ${TABLET} {
    min-width: 500px;
    max-width: 530px;
    height: 380px;
  }
  @media ${LAPTOP} {
  }
`;

export const InsideContentDiv = styled.div`
  padding: 1rem 0.8rem;
  border-bottom: solid 1px #c4c4c4;
  @media ${TABLET} {
    padding: 1.5rem 0.8rem;
  }
  @media ${LAPTOP} {
    padding: 1.5rem 0.5rem;
  }
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 1rem;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;

export const Li = styled.li`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 0.5rem 0.7rem;
  border: solid 2px ${(props) => props.color};
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 800;
  margin: 0.5rem 0.5rem 0 0;
  background-color: ${(props) => props.bgColor};
  @media ${TABLET} {
    font-size: 1.3rem;
    padding: 0.7rem 0.9rem;
    border-radius: 1.3rem;
  }
  @media ${LAPTOP} {
    font-size: 1rem;
  }
`;

export const ButtonDiv = styled.div`
  padding-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: end;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    margin-right: 2.5rem;
  }
`;
