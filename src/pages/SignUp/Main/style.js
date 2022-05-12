import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export const SizeDiv = styled.div`
  width: 370px;
  margin: 0 auto;
  padding: 3rem 0 8rem 0;
  @media ${TABLET} {
    width: 740px;
    padding: 3rem 0 15.8rem 0;
  }
  @media ${LAPTOP} {
    width: 830px;
  }
`;
export const BlockDiv = styled.div`
  display: block;
  width: 100%;
  @media ${TABLET} {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;
export const BoxSizeDiv = styled.div`
  width: 366px;
  height: 10.5rem;
  background-color: ${(props) => props.bgcolor};
  border-radius: 10px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${TABLET} {
    width: 365px;
    height: 15.5rem;
    margin-right: ${(props) => props.right};
  }
  @media ${LAPTOP} {
    width: 411px;
    height: 13rem;
    cursor: pointer;
  }
`;
export const CenterDiv = styled.div`
  width: 90%;
  height: 85%;
`;
export const ImgFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding-top: 1.7rem;
  @media ${TABLET} {
    display: inline-block;
  }
  @media ${LAPTOP} {
    display: flex;
    align-items: center;
    justify-content: start;
  }
`;
export const Img = styled.img`
  width: 7rem;
  margin-right: 0.9rem;
  @media ${TABLET} {
    margin-right: ${(props) => props.magin};
    width: 10.1rem;
  }
  @media ${LAPTOP} {
    margin-right: 0.8rem;
  }
`;
export const SmallImg = styled.img`
  width: 4rem;
  @media ${TABLET} {
    width: 5.5rem;
  }
`;
export const BigText = styled.span`
  font-size: 1.1rem;
  font-weight: 800;
  word-spacing: -0.2rem;
  @media ${TABLET} {
    font-size: 1.6rem;
  }
  @media ${LAPTOP} {
    font-size: 1.4rem;
  }
`;
export const TopP = styled.p`
  padding-top: 3.5rem;
  font-size: 0.9rem;
  font-weight: 800;
  word-spacing: -0.2rem;
  color: ${(props) => props.color};
  @media ${TABLET} {
    font-size: 1rem;
  }
`;
export const BottomP = styled.p`
  font-size: 0.7rem;
  font-weight: 800;
  padding-top: 0.7rem;
  color: ${(props) => props.color};
  @media ${TABLET} {
    font-size: 0.8rem;
    padding-top: 1.5rem;
  }
`;
