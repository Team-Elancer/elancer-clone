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
export const BoardDiv = styled.div`
  width: 100%;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    width: 896px;
    margin: 0 auto;
    padding-right: 2rem;
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
export const SpacebetweenDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LinkP = styled.p`
  font-size: 0.9rem;
  font-weight: 800;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    font-size: 1.4rem;
  }
`;
export const EcardSize = styled.div`
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    border-top-left-radius: 1rem;
    width: 418.25px;
    height: 260px;
  }
`;
