import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  width: 100%;
  height: 120px;
  background-color: #e7e7e7;
  position: absolute;
  padding: 1rem 1rem;
  border-radius: 0.3rem;
  z-index: 2;
  @media ${TABLET} {
    padding: 2rem 2rem;
    height: 200px;
  }
  @media ${LAPTOP} {
    width: 840px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 800;
  padding-left: 7.5rem;
  @media ${TABLET} {
    font-size: 1.8rem;
    padding-left: 18rem;
  }
  @media ${LAPTOP} {
  }
`;

export const CloseImg = styled.img`
  cursor: pointer;
  @media ${TABLET} {
    width: 2rem;
  }
  @media ${LAPTOP} {
  }
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0.8rem;
  @media ${TABLET} {
    padding-top: 1.7rem;
  }
  @media ${LAPTOP} {
  }
`;
export const Li = styled.li`
  padding-right: 0.7rem;
  @media ${TABLET} {
    padding-right: 1.5rem;
  }
`;

export const SnsImg = styled.img`
  width: 3rem;
  cursor: pointer;
  @media ${TABLET} {
    width: 5rem;
  }
  @media ${LAPTOP} {
    width: 4rem;
  }
`;
