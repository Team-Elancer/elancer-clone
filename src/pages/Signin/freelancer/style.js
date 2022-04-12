import styled from 'styled-components';
import redStar from 'assets/images/redstar.png';
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
export const MobilePhoto = styled.div`
  width: 390px;
  height: 223px;
  border-top: 1px solid #c4c4c4;
  margin: 1.5rem -0.6rem 0 -0.6rem;
  text-align: center;
  background-image: linear-gradient(to bottom, white 0%, #a5a5a5 100%);
  opacity: 0.5;
  position: relative;
  @media ${TABLET} {
    display: none;
  }
`;
export const ProfileImg = styled.img`
  width: 13rem;
  padding: 0.5rem 0 0 0;
  z-index: 99;
  opacity: 1;
`;
export const CameraImg = styled.img`
  position: absolute;
  top: 11.5rem;
  left: 22rem;
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
    display: block;
    background-color: #f2f2f2;
    border-radius: 10px;
    height: 63rem;
  }
  @media ${LAPTOP} {
  }
`;

export const SubmitDiv = styled.div`
  @media ${TABLET} {
    display: block;
    margin-top: 2.6rem;
    background-color: #f2f2f2;
    border-radius: 10px;
    height: 35.7rem;
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
export const SpanTag = styled.span`
  font-size: 0.75rem;
  font-weight: 800;
  background: url(${redStar}) left top no-repeat;
  background-size: 5px 5px;
  padding-left: 0.3rem;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
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
  }
  @media ${LAPTOP} {
  }
`;
export const CapsMessage = styled.p`
  color: #ff6b6b;
  padding: 0 0 1rem 0;
  font-size: 0.4rem;
  font-weight: 800;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;

export const EyeImg = styled.img`
  position: absolute;
  top: 0.625rem;
  right: 1.25rem;
`;
export const FlexDiv = styled.div`
  padding: 1rem 0 0 0;
  display: flex;
  align-items: center;
  justify-content: start;
`;
export const RadioDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 7rem;
`;
export const RadioInput = styled.input`
  width: 20px;
  height: 20px;
  border: 1px;
`;
export const RadioText = styled.span`
  font-size: 0.75rem;
  font-weight: 800;
`;
export const DateDiv = styled.div``;
export const BordeDiv = styled.div`
  font-size: 0.75rem;
  font-weight: 800;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid #969696;
`;
export const UlTag = styled.ul`
  display: inline-block;
  padding-top: 1.8rem;
`;
export const LiTag = styled.li`
  display: inline-block;
  padding: 0.5rem 0.7rem;
  border: 2px solid #d7d7d7;
  border-radius: 1rem;
  text-align: center;
  font-size: 0.7rem;
  font-weight: 600;
  margin: 0.5rem 0.3rem 0 0;
  cursor: pointer;
  &:hover {
    border: 2px solid black;
    background-color: #e7e7e7;
  }
`;
export const AgreeDiv = styled.div`
  padding-top: 2rem;
  font-size: 0.75rem;
  font-weight: 800;
`;
export const CheckDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding-top: 0.4rem;
`;
export const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  border: 1px solid #999;
  appearance: none;
  cursor: pointer;
  &:checked {
    background-color: red;
  }
`;
export const CheckPtag = styled.p`
  font-size: 0.75rem;
  font-weight: 700;
`;
export const ATag = styled.a`
  font-size: 0.75rem;
  font-weight: 700;
  color: #f16350;
  padding-left: 2rem;
`;
export const CenterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
