import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const MarginDiv = styled.div`
  width: 360px;
  min-height: 800px;
  margin: 0 auto;
  @media ${TABLET} {
    width: 730px;
  }
  @media ${LAPTOP} {
    width: 830px;
  }
`;

export const SubTitle = styled.h3`
  padding-top: 10rem;
  font-size: 0.8rem;
  font-weight: 800;
  @media ${TABLET} {
    font-size: 1.2rem;
  }
  @media ${LAPTOP} {
  }
`;
export const Title = styled.h1`
  font-size: 1rem;
  font-weight: 800;
  @media ${TABLET} {
    font-size: 1.4rem;
  }
  @media ${LAPTOP} {
  }
`;

export const ProjectDiv = styled.div`
  padding: 2rem 0;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;
