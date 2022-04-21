import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
`;

export const SizeDiv = styled.div`
  width: 96%;
  height: 96%;
  margin: auto;
  padding: 2rem 0;
  @media ${TABLET} {
    width: 770px;
  }
  @media ${LAPTOP} {
    width: 1240px;
  }
`;

export const FlexDiv = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;

export const BoardDiv = styled.div`
  width: 100%;
  @media ${TABLET} {
    width: 730px;
  }
  @media ${LAPTOP} {
    width: 960px;
    margin: 0 auto;
    padding-right: 2rem;
    overflow: hidden;
  }
`;
export const SpacebetweenDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 3.5rem;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;
export const H1 = styled.h1`
  font-size: 0.8rem;
  font-weight: 800;
  padding: ${(props) => props.top} 0 ${(props) => props.bottom} 0;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    font-size: 2.2rem;
    padding: ${(props) => props.laptoptop} 0 ${(props) => props.laptopBottom} 0;
  }
`;
export const LinkP = styled.p`
  font-size: 0.8rem;
  font-weight: 800;
  width: 100%;
  height: 100%;
  @media ${TABLET} {
    font-size: 1.4rem;
  }
  @media ${LAPTOP} {
    font-size: 1.4rem;
  }
`;
