import styled from 'styled-components';
import mainEnterprise from 'assets/images/main-enterprise.png';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: -10px;
`;

export const BgDiv = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${mainEnterprise});
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;

export const CenterDiv = styled.div`
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
  margin: 0 20rem;
`;
export const H1 = styled.h1`
  color: white;
  font-family: 'KoPubWorldDotum', sans-serif;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    font-size: 2.2rem;
    line-height: 3rem;
  }
`;
export const PTag = styled.p`
  padding: 0.5rem 0;
  color: white;
  background-color: black;
  font-size: 0.8rem;
  font-weight: 800;
  width: 148px;
  text-align: center;
  margin-top: 1rem;
  border-radius: 0.5rem;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;
