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
  opacity: 1;
  position: relative;
  @media ${TABLET} {
    display: none;
  }
`;
export const ProfileMobileImg = styled.img`
  width: 100%;
  padding: 0.5rem 0 0 0;
  z-index: 99;
  height: 100%;
  opacity: 0.6;
  background-color: none;
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
    position: relative;
  }
  @media ${LAPTOP} {
  }
`;
export const ProfileImgDiv = styled.div`
  display: none;
  @media ${TABLET} {
    display: block;
    position: absolute;
    border: 5px solid #eb6100;
    border-radius: 50%;
    left: 38rem;
    z-index: 99;
    cursor: pointer;
  }
  @media ${LAPTOP} {
  }
`;
export const ProfileImg = styled.img`
  position: relative;
  pointer-events: none;
`;
export const BallDiv = styled.div`
  width: 22px;
  height: 22px;
  background-color: #eb6100;
  border-radius: 50%;
  position: absolute;
  top: 3.2rem;
  left: 3rem;
`;
export const FileInput = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: transparent;
  border: none;
  color: #ffffff;
  font-size: 500px;
  z-index: 0;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  position: absolute;
  opacity: 0;
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
    font-size: 0.98rem;
    background-size: 10px 10px;
    padding: 0 ${(props) => props.right} 0 0.7rem;
  }
  @media ${LAPTOP} {
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
    &::placeholder {
      padding-left: 0.5rem;
      font-size: 0.9rem;
      font-weight: 600;
    }
  }
  @media ${LAPTOP} {
  }
`;
export const EmailTop = styled.div`
  margin-top: -0.8rem;
`;
export const ErrorMessage = styled.p`
  color: #ff6b6b;
  padding: 1rem 0 1rem 0;
  font-size: 0.4rem;
  font-weight: 800;
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
  @media ${TABLET} {
    padding-left: 9rem;
  }
  @media ${LAPTOP} {
  }
`;

export const EyeImg = styled.img`
  position: absolute;
  top: 0.625rem;
  right: 1.25rem;
  @media ${TABLET} {
    top: 1.5rem;
    right: 19.5rem;
  }
  @media ${LAPTOP} {
    right: 22.5rem;
  }
`;
export const EmailFlex = styled.div`
  @media ${TABLET} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const FlexDiv = styled.div`
  padding: 1rem 0 0 0;
  display: flex;
  align-items: center;
  justify-content: start;
  @media ${TABLET} {
    padding: ${(props) => props.top} 0 0 0;
  }
`;
export const RadioDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 7rem;
  @media ${TABLET} {
    width: 6rem;
  }
`;
export const RadioInput = styled.input`
  width: 20px;
  height: 20px;
  border: 1px;
`;
export const RadioText = styled.span`
  font-size: 0.75rem;
  font-weight: 800;
  justify-content: start;
  @media ${TABLET} {
    font-size: 0.85rem;
  }
`;
export const DateDiv = styled.div``;
export const MarginAutoDiv = styled.div`
  @media ${TABLET} {
    padding-top: 3rem;
    width: 90%;
    margin: 0 auto;
  }
`;
export const BordeDiv = styled.div`
  font-size: 0.75rem;
  font-weight: 800;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid #969696;
  @media ${TABLET} {
    font-size: 0.95rem;
    padding-bottom: 2rem;
  }
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
  @media ${TABLET} {
    font-size: 0.95rem;
    border-radius: 2rem;
    background-color: white;
  }
`;
export const AgreeDiv = styled.div`
  padding-top: 2rem;
  font-size: 0.75rem;
  font-weight: 800;
  @media ${TABLET} {
    font-size: 0.95rem;
    padding: 2rem 0 1.5rem 0;
  }
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
  @media ${TABLET} {
    width: 1.4rem;
    height: 1.4rem;
    background-color: white;
  }
`;
export const CheckPtag = styled.p`
  font-size: 0.75rem;
  font-weight: 700;
  @media ${TABLET} {
    font-size: 0.88rem;
    font-weight: 800;
    word-spacing: -0.1rem;
  }
  @media ${LAPTOP} {
  }
`;
export const JobDiv = styled.div`
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;
export const JobUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: start;
  padding-bottom: 1.5rem;
`;
export const JobLi = styled.li`
  margin-top: 0.2rem;
  background-color: #f2f2f2;
  padding: 0.5rem 0.7rem;
  font-weight: 800;
  border: 1px solid #e1e1e1;
  &:hover {
    background-color: #eb6100;
    color: white;
  }
  @media ${TABLET} {
    background-color: white;
    font-size: 0.9rem;
    padding: 0.9rem 1.7rem;
  }
  @media ${LAPTOP} {
  }
`;
export const JobLiBorderLeft = styled.li`
  margin-top: 0.2rem;
  background-color: #f2f2f2;
  padding: 0.5rem 0.7rem;
  font-weight: 800;
  border: 1px solid #e1e1e1;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  &:hover {
    background-color: #eb6100;
    color: white;
  }
  @media ${TABLET} {
    background-color: white;
    font-size: 0.9rem;
    padding: 0.9rem 1.7rem;
  }
  @media ${LAPTOP} {
  }
`;
export const JobLiBorderRight = styled.li`
  margin-top: 0.2rem;
  background-color: #f2f2f2;
  padding: 0.5rem 0.7rem;
  font-weight: 800;
  border: 1px solid #e1e1e1;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  &:hover {
    background-color: #eb6100;
    color: white;
  }
  @media ${TABLET} {
    background-color: white;
    font-size: 0.9rem;
    padding: 0.9rem 1.7rem;
  }
  @media ${LAPTOP} {
  }
`;
export const ATag = styled.a`
  font-size: 0.75rem;
  font-weight: 700;
  color: #f16350;
  padding-left: 2rem;
  @media ${TABLET} {
    font-size: 0.88rem;
    font-weight: 800;
  }
`;
export const CenterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BlacSpan = styled.span`
  position: relative;
  background-color: #434343;
  color: #b7b7b7;
  font-size: 0.75rem;
  padding: 0.4rem 1rem;
  border-radius: 1rem;
  z-index: 3;
`;
export const FileMessage = styled.p`
  font-weight: 800;
  padding: 3rem 0 2rem 0;
`;
export const CancelImg = styled.img`
  position: absolute;
  top: 2.5rem;
  left: 14rem;
`;
