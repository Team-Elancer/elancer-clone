import styled from 'styled-components';
import redStar from 'assets/images/redstar.png';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const ProfileDiv = styled.div`
  @media ${TABLET} {
    display: block;
    background-color: #f2f2f2;
    border-radius: 10px;
    height: 100%;
    position: relative;
    z-index: 2;
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
export const ProfileImg = styled.img`
  position: absolute;
  pointer-events: none;
  left: 30rem;
  width: 234px;
  z-index: 1;
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
  margin-left: ${(props) => props.MobileMargin};
  &::placeholder {
    font-size: 1.125rem;
    font-weight: 600;
  }
  @media ${TABLET} {
    width: ${(props) => props.size};
    font-size: 0.9rem;
    border-radius: 0.5rem;
    padding: 0.75rem 0 0.6rem 0;
    margin-right: ${(props) => props.right};
    &::placeholder {
      padding-left: 0.5rem;
      font-size: 0.9rem;
      font-weight: 600;
    }
  }
  @media ${LAPTOP} {
  }
`;
export const InputDiv = styled.div`
  padding-top: 1rem;
  position: relative;
  @media ${TABLET} {
    padding-left: ${(props) => props.left};
  }
  @media ${LAPTOP} {
  }
`;
export const BlockDiv = styled.div`
  display: block;
  @media ${TABLET} {
    display: ${(props) => props.display};
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
  }
`;
export const ErrorMessage = styled.p`
  color: #ff6b6b;
  padding: 1rem 0 1rem 0;
  font-size: 0.4rem;
  font-weight: 800;
  @media ${TABLET} {
    padding-left: 9rem;
    word-spacing: -0.2rem;
  }
  @media ${LAPTOP} {
  }
`;
export const CapsMessage = styled.p`
  color: #ff6b6b;
  padding: 0 0 1rem 0;
  font-size: 0.4rem;
  font-weight: 800;
  display: ${(props) => props.Mobiledisplay};
  @media ${TABLET} {
    padding-left: 9rem;
    display: ${(props) => props.display};
  }
  @media ${LAPTOP} {
  }
`;
export const FlexDiv = styled.div`
  @media ${TABLET} {
    display: flex;
    align-items: center;
    justify-content: start;
    padding-top: ${(props) => props.top};
  }
`;
export const EyeImg = styled.img`
  position: absolute;
  top: 0.625rem;
  right: 1.25rem;
  @media ${TABLET} {
    top: 1.5rem;
    right: 0.5rem;
  }
  @media ${LAPTOP} {
    right: 0.8rem;
  }
`;
export const SelectTag = styled.select`
  width: 100%;
  outline: none;
  border: none;
  padding: 0.8rem 0 0.6rem 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: black;
  width: 7rem;
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
      padding-left: 0.5rem;
      font-size: 0.9rem;
      font-weight: 600;
    }
  }
  @media ${LAPTOP} {
  }
`;
export const BlacSpan = styled.span`
  background-color: #434343;
  color: #b7b7b7;
  font-size: 0.75rem;
  padding: 0.4rem 1rem;
  border-radius: 1rem;
  z-index: 3;
  position: relative;
  @media ${TABLET} {
    font-size: 0.95rem;
    padding: 0.7rem 0.9rem;
    border-radius: 1.5rem;
    letter-spacing: -0.1rem;
    margin-left: 1rem;
  }
`;
export const PostCodeDiv = styled.div`
  @media ${TABLET} {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5.8rem;
  }
`;
export const CancelImg = styled.img`
  position: absolute;
  top: 2.5rem;
  left: 14rem;
  @media ${TABLET} {
    top: 3.8rem;
    left: 7rem;
  }
`;
export const FileMessage = styled.p`
  font-weight: 800;
  padding: 3rem 0 2rem 0;
  @media ${TABLET} {
    padding: 2rem 0 2rem 20rem;
  }
`;
export const BorderDiv = styled.div`
  @media ${TABLET} {
    padding-top: 4rem;
    border-bottom: 1px solid #969696;
  }
`;
