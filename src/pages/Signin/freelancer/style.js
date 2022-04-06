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
    width: 747px;
  }
  @media ${LAPTOP} {
    width: 800px;
  }
`;

export const ButtonDiv = styled.div`
  width: 6.5rem;
  height: 2.6rem;
  background-color: #3c3c3c;
  color: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 700;
  margin-top: 1.3rem;
  @media ${TABLET} {
    width: 8.1rem;
    height: 3.5rem;
    font-size: 1rem;
    border-radius: 10px;
  }
  @media ${LAPTOP} {
    font-size: 1.1rem;
  }
`;

export const H1 = styled.h1`
  font-size: 0.9rem;
  font-weight: 800;
  padding: 1.7rem 0 1rem 0;
  @media ${TABLET} {
    font-size: 2.2rem;
    padding: 4rem 0 1rem 0;
  }
  @media ${LAPTOP} {
    font-size: 2rem;
  }
`;
export const ProfileDiv = styled.div`
  @media ${TABLET} {
    background-color: #f2f2f2;
    border-radius: 10px;
    height: 63rem;
  }
`;

export const SubmitDiv = styled.div`
  @media ${TABLET} {
    margin-top: 2.6rem;
    background-color: #f2f2f2;
    border-radius: 10px;
    height: 35.7rem;
  }
`;
