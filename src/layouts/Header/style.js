import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const HeaderDiv = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px auto;
  overflow: hidden;
  padding-top: 1.2rem;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    width: 62%;
  }
  @media ${DESKTOP} {
    width: 42%;
  }
`;
export const Img = styled.img`
  width: 95px;
  @media ${TABLET} {
    width: 18vh;
  }
  @media ${LAPTOP} {
    width: 27vh;
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
    font-size: 1.125rem;
    font-weight: 300;
  }
  @media ${LAPTOP} {
    font-size: 0.8rem;
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
  @media ${TABLET} {
    width: 87.5px;
    height: 42px;
  }
  @media ${LAPTOP} {
    width: 70px;
    height: 34px;
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

export const Span = styled.span`
  margin: 0 auto;
`;
