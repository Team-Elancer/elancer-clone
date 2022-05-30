import styled from 'styled-components';
import redStar from 'assets/images/redstar.png';
import { TABLET, LAPTOP } from 'utils/constants/responsive';

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
`;

export const FrameAccount = styled.div`
  width: 100%;
`;

export const FirstContainer = styled.section``;
export const SecondContainer = styled.section``;

export const ContainerAccountSave = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  font-weight: bold;

  @media ${TABLET} {
    justify-content: start;
    font-size: 2rem;
  }
`;

export const SaveSpan = styled.div`
  cursor: pointer;

  @media ${TABLET} {
    display: none;
  }
`;

export const ContainerImageProfile = styled.div`
  background: #a5a5a5;
  border-color: rgba(196, 196, 196, 1);
  border-top-width: 1px;
  margin-top: 2.5rem;
  margin-left: -0.75rem;
  margin-right: -0.75rem;
  height: 14rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media ${TABLET} {
    display: none;
  }
`;

export const ImageProfile = styled.img`
  bottom: 0.875rem;
  height: 100%;
`;

export const ImageUpload = styled.img`
  position: absolute;
  bottom: 0.875rem;
  right: 0.875rem;
`;

export const FrameInfo = styled.div``;
export const ContainerName = styled.div``;

/*
===================================
===================================
===================================
===================================
*/

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
  z-index: 99;
  cursor: none;
  @media ${TABLET} {
    display: none;
  }
`;
export const ProfileMobileImg = styled.img`
  width: 13rem;
  padding: 0.5rem 0 0 0;
  opacity: 1;
  max-height: 13.5rem;
  z-index: 99;
`;
export const CameraImg = styled.img`
  position: absolute;
  top: 11.5rem;
  left: 22rem;
  z-index: 2;
`;
export const MobileFileInput = styled.input`
  width: 35px;
  height: 35px;
  background-color: transparent;
  border: none;
  font-size: 500px;
  z-index: 0;
  left: 21.5rem;
  top: 11rem;
  opacity: 5;
  position: absolute;
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
    height: 100%;
    position: relative;
    margin-top: 2rem;
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
    height: 6rem;
    width: 6rem;
    cursor: pointer;
  }
  @media ${LAPTOP} {
    left: 43rem;
  }
`;
export const ProfileImg = styled.img`
  position: relative;
  pointer-events: none;
  max-height: 5rem;
  min-width: 5rem;
  max-width: 5rem;
  min-height: 100%;
  border-radius: 50%;
  left: 0.2rem;
`;
export const BallDiv = styled.div`
  width: 22px;
  height: 22px;
  background-color: #eb6100;
  border-radius: 50%;
  position: absolute;
  top: 3.7rem;
  left: 4rem;
`;
export const FileInput = styled.input`
  width: 35px;
  height: 35px;
  background-color: transparent;
  border: none;
  color: #ffffff;
  font-size: 500px;
  z-index: 0;
  left: 1rem;
  top: 2rem;
  position: absolute;
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
  padding-top: 0.5rem;
  padding-top: ${(props) => props.top}rem;

  position: relative;

  @media ${TABLET} {
    padding-top: ${(props) => props.top}rem;
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
export const MaginDiv = styled.div`
  @media ${LAPTOP} {
    margin-top: 1rem;
  }
`;
export const SpanTag = styled.span`
  font-size: 0.75rem;
  font-weight: 800;
  background: url(${redStar}) left top no-repeat;
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
      padding-left: 0.5rem;
      font-size: 0.9rem;
      font-weight: 600;
    }
  }
  @media ${LAPTOP} {
    width: ${(props) => props.laptopSize};
  }
`;
export const EmailTop = styled.div`
  margin-top: -0.8rem;
`;
export const ErrorMessage = styled.p`
  color: #ff6b6b;
  padding: 1rem 0 1rem 0;
  font-size: 0.5rem;
  font-weight: 800;
  pointer-events: none;
  user-select: none;
  @media ${TABLET} {
    padding-left: 9rem;
    font-size: 0.6875rem;
  }
  @media ${LAPTOP} {
  }
`;
export const CapsMessage = styled.p`
  color: #ff6b6b;
  padding: 0 0 1rem 0;
  font-size: 0.5rem;
  font-weight: 800;
  pointer-events: none;
  user-select: none;
  @media ${TABLET} {
    padding-left: 9rem;
    font-size: 0.6875rem;
  }
  @media ${LAPTOP} {
  }
`;

export const EyeImg = styled.img`
  position: absolute;
  top: 30px;
  right: 1.25rem;
  cursor: pointer;

  @media ${TABLET} {
    top: 17px;
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
    width: 8rem;
  }
`;

export const RadioText = styled.label`
  font-size: 0.75rem;
  font-weight: 800;
  justify-content: start;
  margin-top: 3px;
  margin-left: 3px;

  @media ${TABLET} {
    font-size: 0.85rem;
  }
`;

export const RadioInput = styled.input`
  width: 20px;
  height: 20px;
  border: 1px;
  cursor: pointer;
`;

export const DateDiv = styled.div`
  .react-datepicker {
    box-shadow: 3px 2px 11px rgb(0 0 0 / 30%);
  }
  .react-datepicker__input-container input {
    position: relative;
    opacity: 0;
    top: -2rem;
    height: 100%;
    cursor: pointer;
  }
`;
export const MarginAutoDiv = styled.div`
  @media ${TABLET} {
    padding-top: 1rem;
    width: 90%;
    margin: 0 auto;
    border-top: ${(props) => props.last && '1px solid black'};
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
  @media ${LAPTOP} {
    font-size: 1rem;
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
  @media ${TABLET} {
    padding-top: 1rem;
  }
  @media ${LAPTOP} {
  }
`;
export const JobLi = styled.li`
  margin-top: 0.2rem;
  padding: 0.5rem 0.7rem;
  border: 1px solid #e1e1e1;
  cursor: pointer;
  &:hover {
    background-color: #eb6100;
    color: white;
  }
  @media ${TABLET} {
    background-color: white;
    padding: 0.9rem 1.7rem;
  }
  @media ${LAPTOP} {
    padding: 0.9rem 2rem;
    background-color: ${(props) => props.bg};
    color: ${(props) => props.color};
  }
`;
export const JobRadioLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-left: ${(props) => props.left};
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;
export const JobInputLeft = styled.input`
  width: 61px;
  height: 29px;
  border: 1px solid #e6e6e6;
  outline: none;
  appearance: none;
  background-color: ${(props) => props.bgColor};
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  @media ${TABLET} {
    background-color: ${(props) => props.tabletColor};
  }
  @media ${LAPTOP} {
    width: 126px;
    height: 44px;
  }
`;
export const JobLabel = styled.label`
  position: absolute;
  font-weight: 600;
  color: ${(props) => props.color};
  font-size: 0.625rem;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    font-size: 0.9rem;
  }
`;
export const JobInput = styled.input`
  width: 61px;
  height: 29px;
  background-color: ${(props) => props.bgColor};
  border: 1px solid #e6e6e6;
  outline: none;
  appearance: none;
  @media ${TABLET} {
    background-color: ${(props) => props.tabletColor};
  }
  @media ${LAPTOP} {
    width: 126px;
    height: 44px;
  }
`;

export const JobInputRight = styled.input`
  width: 61px;
  height: 29px;
  background-color: ${(props) => props.bgColor};
  border: 1px solid #e6e6e6;
  outline: none;
  appearance: none;
  z-index: 0;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  @media ${TABLET} {
    background-color: ${(props) => props.tabletColor};
  }
  @media ${LAPTOP} {
    width: 126px;
    height: 44px;
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

export const JobFieldInput = styled.input`
  margin-top: 1rem;
  width: 100%;
  background-color: rgba(246, 246, 246, 1);
  font-size: 1rem;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-bottom: 2rem;
`;

export const FrameInputNumbers = styled(SpanTag)`
  display: flex;
  flex-direction: column;
`;

export const InputNumbers = styled.input`
  border: none;
  border-bottom: 2px solid rgba(196, 196, 196, 1);
  outline: none;
  display: inline-block;
  border-top-width: 0;
  border-right-width: 0;
  border-left-width: 0;
  font-weight: 600;
  font-size: 1rem;
  padding-left: 0px;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
`;
export const SpanInput = styled.span`
  font-size: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

export const ContainerDeactivateSave = styled.div`
  border: none;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ButtonDeactivate = styled.button`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: rgba(204, 204, 204, 1);
  border-radius: 5px;
  width: 70px;
  border: none;
`;

export const ButtonSave = styled.button`
  color: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: center;
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  background-color: #eb6100;
  border-radius: 5px;
  width: 100px;
  border: none;
`;
