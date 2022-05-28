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
  position: relative;
  margin-top: ${(props) => props.top};
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
  width: ${(props) => props.Mobilesize};
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
  color: black;
  padding: 1rem 0 1rem 0;
  font-size: 0.4rem;
  font-weight: 600;
  pointer-events: none;
  user-select: none;
  line-height: 1rem;
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
    margin-bottom: 3.5rem;
  }
`;
export const ProfileInput = styled.input`
  border: none;
  outline: none;
  background-color: #f2f2f2;
  width: 95%;
  padding: 0.7rem 0.7rem;
  font-size: 1.1rem;
  font-weight: 800;
  border-radius: 0.5rem;
  color: #707070;
  position: absolute;
  margin: 1rem 0;
  &::placeholder {
    font-size: 1.1rem;
    font-weight: 600;
    word-spacing: -0.1rem;
    color: #707070;
  }
  @media ${TABLET} {
    width: 66%;
  }
  @media ${LAPTOP} {
    padding: 0.9rem 0.9rem;
    font-size: 0.8rem;
    font-weight: 800;
    border-radius: 0.5rem;
    color: #707070;
    width: 53rem;
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
  margin-top: 4rem;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    font-size: 2.2rem;
    padding: ${(props) => props.top} 0 2rem 0;
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
    height: 100%;
  }
`;
export const MarginAutoDiv = styled.div`
  @media ${TABLET} {
    padding: 3rem 0;
    width: 90%;
    margin: 0 auto;
  }
`;
export const CancelImg = styled.img`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  cursor: pointer;
  @media ${TABLET} {
    top: 3.8rem;
    left: 7rem;
  }
  @media ${LAPTOP} {
    top: ${(props) => props.laptopTop};
    left: ${(props) => props.laptopLeft};
  }
`;
export const FileInput = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: transparent;
  border: none;
  color: #ffffff;
  font-size: 500px;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  position: absolute;
  opacity: 0;
  z-index: 2;
  @media ${TABLET} {
    cursor: pointer;
    left: ${(props) => props.tabletLeft};
    top: ${(props) => props.tabletTop};
  }
  @media ${LAPTOP} {
    left: ${(props) => props.laptopLeft};
  }
`;
export const BlacSpan = styled.span`
  background-color: #434343;
  color: #b7b7b7;
  font-size: 0.75rem;
  padding: 0.4rem 1rem;
  border-radius: 1rem;
  z-index: 3;
  margin: 0 ${(props) => props.margiRight} 0 0;
  cursor: pointer;
  position: relative;
  @media ${TABLET} {
    font-size: 0.95rem;
    padding: 0.7rem 0.9rem;
    border-radius: 1.5rem;
    letter-spacing: -0.1rem;
    margin-left: 1rem;
  }
`;
export const BorderDiv = styled.div`
  @media ${TABLET} {
    width: 100%;
    height: 1px;
    margin: 4rem 0;
    background-color: #969696;
  }
`;
export const Ul = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0.7rem 1rem;
  color: #8c8c8c;
  background-color: #f2f2f2;
  border-radius: 0.5rem;
  margin-top: 0.3rem;
  flex-wrap: wrap;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    width: 80%;
    background-color: white;
  }
`;
export const Li = styled.li`
  font-weight: 600;
  font-size: 0.75rem;
  padding: 0.5rem ${(props) => props.right} 0.5rem 0;
  display: flex;
  align-items: center;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    font-size: 1rem;
    padding-right: ${(props) => props.LaptopRight};
  }
`;
export const CheckInput = styled.input.attrs({ type: 'checkbox' })`
  width: 0.6rem;
  height: 0.6rem;
  border: 1px solid #999;
  margin-right: 0.6rem;
  appearance: none;
  cursor: pointer;
  &:checked {
    background-color: orange;
  }
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    width: 1rem;
    height: 1rem;
  }
`;
export const BottomInput = styled.input`
  padding: 1rem 1.3rem;
  background-color: #f2f2f2;
  border: none;
  outline: none;
  width: 100%;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  &::placeholder {
    font-size: 1.2rem;
    font-weight: 500;
  }
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    margin-left: 8.9rem;
    width: 80%;
    background-color: white;
  }
`;
export const MarginTopDiv = styled.div`
  margin-top: 1rem;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    margin-top: 0;
  }
`;
export const CenterDiv = styled.div`
  display: none;
  @media ${TABLET} {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;
  }
  @media ${LAPTOP} {
  }
`;
