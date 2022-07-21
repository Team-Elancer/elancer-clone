import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  padding-bottom: 1.5rem;
  @media ${TABLET} {
    width: 100%;
  }
`;

export const HeaderDiv = styled.div`
  color: ${({ projectList }) => projectList && '#fff'};
  width: 360px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding-top: 1.2rem;
  padding: 2rem 0;

  @media ${TABLET} {
    width: 730px;
  }

  @media ${LAPTOP} {
    width: ${(props) => props.width};
  }
`;

export const FlexDiv = styled.div`
  display: block;
  height: 100%;
  text-align: center;
  @media ${TABLET} {
    display: flex;
    align-items: center;
    justify-content: start;
  }
`;
export const Img = styled.img`
  width: 95px;
  @media ${TABLET} {
    width: 187.78px;
    padding-right: 1rem;
  }
  @media ${LAPTOP} {
    width: 187.78px;
  }
`;
export const BigText = styled.span`
  font-size: 0.75rem;
  font-weight: 800;
  word-spacing: -0.2rem;
  @media ${TABLET} {
    font-size: 1.5rem;
  }
  @media ${LAPTOP} {
    font-size: 1.4rem;
  }
`;
export const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ThreeTag = styled.div`
  padding: 0 5px;
  cursor: pointer;
  font-size: 0.65rem;
  font-weight: 800;
  @media ${TABLET} {
    font-size: 1rem;
    font-weight: 600;
  }
  @media ${LAPTOP} {
    font-size: 1rem;
    font-weight: 700;
  }
`;
export const Menu = styled.div`
  width: 56px;
  height: 32px;
  background-color: white;
  border: 2px solid #dcdcdc;
  border-radius: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media ${TABLET} {
    width: 87.5px;
    height: 42px;
  }
  @media ${LAPTOP} {
    width: 87.5px;
    height: 42px;
  }
`;

export const Image = styled.img`
  width: 25px;
  @media ${TABLET} {
    width: 30px;
    margin-right: -8px;
  }
  @media ${LAPTOP} {
    margin: 3px -3px 0 0;
  }
`;
export const LogoImage = styled.img`
  width: 50px;
  @media ${TABLET} {
    width: 80px;
    margin-right: -8px;
  }
  @media ${LAPTOP} {
    margin: 3px -3px 0 0;
  }
`;

export const Span = styled.span`
  margin: 0 auto;
`;
