import styled from 'styled-components';
import redStar from 'assets/images/redstar.png';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export const SpacebetweenDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 3.5rem;
  justify-content: space-between;
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
    font-size: 2.2rem;
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
export const Save = styled.div`
  font-size: 0.75rem;
  font-weight: 500;
  @media ${TABLET} {
    display: none;
  }
  @media ${LAPTOP} {
  }
`;
export const InputDiv = styled.div`
  padding-top: 1rem;
  position: relative;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;
export const BlockDiv = styled.div`
  display: block;
  @media ${TABLET} {
    display: flex;
    align-items: center;
    justify-content: start;
  }
  @media ${LAPTOP} {
  }
`;
export const SpanTag = styled.span`
  font-size: 0.75rem;
  font-weight: 800;
  background: url(${redStar}) left top no-repeat ${(props) => props.star};
  background-size: 5px 5px;
  padding-left: 0.3rem;
  @media ${TABLET} {
    width: 100%;
    font-size: 0.98rem;
    background-size: 10px 10px;
    padding: 0 ${(props) => props.right} 0 0.7rem;
  }
  @media ${LAPTOP} {
    display: ${(props) => props.display};
  }
`;
export const InputTag = styled.input`
  width: 100%;
  outline: none;
  border: none;
  padding: 0.8rem 0 0.6rem 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: #707070;
  border-bottom: 1px solid #c4c4c4;
  &::placeholder {
    font-size: 1.125rem;
    font-weight: 600;
  }
  @media ${TABLET} {
    width: ${(props) => props.size};
    font-size: 0.9rem;
    border-radius: 0.5rem;
    padding: 0.75rem 0 0.6rem 0;
    &::placeholder {
      font-size: 0.9rem;
      font-weight: 600;
    }
  }
  @media ${LAPTOP} {
    padding-left: 1rem;
    width: ${(props) => props.laptopSize};
  }
`;
export const ErrorMessage = styled.p`
  color: #ff6b6b;
  padding: 1rem 0 1rem 0;
  font-size: 0.4rem;
  font-weight: 800;
  pointer-events: none;
  user-select: none;
  @media ${TABLET} {
    padding-left: 9rem;
  }
  @media ${LAPTOP} {
  }
`;
export const CapsMessage = styled.p`
  color: #ff6b6b;
  padding: 0 0 1rem 0;
  font-size: 0.4rem;
  font-weight: 800;
  pointer-events: none;
  user-select: none;
  @media ${TABLET} {
    padding-left: 9rem;
  }
  @media ${LAPTOP} {
  }
`;
export const ProfileDiv = styled.div`
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;
export const ProfileInput = styled.input`
  border: none;
  outline: none;
  background-color: #f2f2f2;
  width: 100%;
  padding: 0.7rem 0.7rem;
  font-size: 1.1rem;
  font-weight: 800;
  border-radius: 0.5rem;
  color: #707070;
  &::placeholder {
    font-size: 1.1rem;
    font-weight: 600;
    word-spacing: -0.1rem;
    color: #707070;
  }
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    padding: 0.9rem 0.9rem;
    font-size: 0.8rem;
    font-weight: 800;
    border-radius: 0.5rem;
    color: #707070;
    &::placeholder {
      font-size: 0.8rem;
      font-weight: 300;
      word-spacing: -0.1rem;
      color: #707070;
    }
  }
`;
export const Title = styled.div`
  font-size: 0.9rem;
  font-weight: 800;
  padding: 2rem 0;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    font-size: 2.2rem;
  }
`;
export const ColorDiv = styled.div`
  @media ${TABLET} {
    display: block;
    background-color: #f2f2f2;
    border-radius: 10px;
    height: 63rem;
    position: relative;
  }
  @media ${LAPTOP} {
  }
`;
export const MarginAutoDiv = styled.div`
  @media ${TABLET} {
    padding-top: 3rem;
    width: 90%;
    margin: 0 auto;
  }
`;
