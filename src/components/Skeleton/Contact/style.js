import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Colordiv = styled.div`
  margin-top: 1rem;
  width: 100%;
  height: 100%;
  background-color: #808080;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  @media ${TABLET} {
    margin-top: 2rem;
  }
  @media ${LAPTOP} {
  }
`;

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DisplayFlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;
`;

export const NoAnwser = styled.div`
  font-size: 0.7rem;
  font-weight: 600;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  padding: 0.8rem 0.5rem;
  @media ${TABLET} {
    font-size: 0.9rem;
  }
  @media ${LAPTOP} {
  }
`;

export const TitleP = styled.p`
  width: 100%;
  color: #707070;
  font-size: 0.8rem;
  font-weight: 800;
  padding-left: 0.7rem;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;

export const DateP = styled.p`
  width: 50%;
  font-size: 0.8rem;
  font-weight: 800;
  padding-left: 0.7rem;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;

export const ButtonP = styled.p`
  padding-left: 1rem;
  cursor: pointer;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;
