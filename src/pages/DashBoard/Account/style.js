import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const SpacebetweenDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 3.5rem;
  justify-content: center;
  @media ${TABLET} {
    justify-content: start;
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
export const Img = styled.img`
  display: none;
  @media ${TABLET} {
    display: block;
    padding-right: 1rem;
  }
  @media ${LAPTOP} {
  }
`;
