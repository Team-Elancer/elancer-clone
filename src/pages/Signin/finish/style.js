import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
`;
export const SizeDiv = styled.div`
  width: 370px;
  margin: 0 auto;
  padding: 3rem 0 8rem 0;
  @media ${TABLET} {
    width: 747px;
  }
  @media ${LAPTOP} {
    width: 800px;
  }
`;

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 7rem;
`;
export const H1 = styled.h1`
  font-size: 1.15rem;
  font-weight: 800;
  line-height: 1.7rem;
  text-align: center;
  letter-spacing: -0.07rem;
  @media ${TABLET} {
    font-size: 1.3rem;
    line-height: 2rem;
  }
  @media ${LAPTOP} {
    font-size: 1.4rem;
    line-height: 2rem;
    letter-spacing: -0.05rem;
  }
`;
export const Ptag = styled.p`
  padding-top: 1rem;
  text-align: center;
  color: #9e9e9e;
  font-size: 0.74rem;
  font-weight: 800;
  line-height: 1.1rem;
  letter-spacing: -0.07rem;
  @media ${TABLET} {
    font-size: 1rem;
    line-height: 1.2rem;
    padding-bottom: 4.8rem;
  }
  @media ${LAPTOP} {
    font-size: 0.9rem;
    line-height: 1.4rem;
    letter-spacing: -0.06rem;
  }
`;
export const ButtonSizeDiv = styled.div`
  width: 16rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;
