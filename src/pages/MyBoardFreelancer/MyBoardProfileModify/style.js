import styled from 'styled-components';
import redStar from 'assets/images/redstar.png';

import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const HRline = styled.hr`
  border: 1px solid rgba(235, 97, 0, 1);
  width: 100%;
`;

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonAddExtra = styled.button`
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  font-size: 0.75rem;
  font-weight: bold;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 5px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  text-align: center;
  margin: 0.3rem;
  cursor: pointer;
`;

export const RemoveButton = styled.span`
  background-color: rgba(60, 60, 60, 1);
  border-color: rgba(255, 255, 255, 1);
  border-width: 1px;
  cursor: pointer;
  color: rgba(255, 255, 255, 1);
  display: inline-block;
  text-align: center;

  border-radius: 5px;
  font-weight: 400;
  font-size: 0.7rem;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  margin-left: 0.4rem;
`;

export const ProfileButton = styled.button`
  background-color: rgba(235, 97, 0, 1);
  border-radius: 5px;
  color: rgba(255, 255, 255, 1);
  display: inline-block;
  font-size: 0.75rem;
  margin-bottom: 0.75rem;
  padding: 0.5rem 1rem;
  text-align: center;
  border: none;
  cursor: pointer;

  @media ${TABLET} {
    border-radius: 10px;
    font-size: 0.938rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 1rem;
  }
`;

export const FrameProfile = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(246, 246, 246, 1);
  padding: 1rem;
  border-radius: 15px;
`;

export const ContainerTop = styled.div`
  display: flex;
  justify-content: center;

  @media ${TABLET} {
    border-bottom: none;
    font-size: 1.9rem;
    justify-content: flex-start;
  }
`;

export const FontLarge = styled.p`
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-weight: bold;
  font-size: 0.8rem;

  @media ${TABLET} {
    font-size: 1.9rem;
  }
`;

export const FontLargeSpan = styled.span`
  display: none;
  margin-top: 2rem;

  @media ${TABLET} {
    display: block;
    font-weight: bold;
    margin-right: 1rem;
  }
`;

export const ContainerImageProfile = styled.div`
  display: block;
  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #ffffff), color-stop(1, #a5a5a5));

  border-top: 1px solid #a5a5a5;
  border-bottom: 1px solid #a5a5a5;

  margin-top: 1.5rem;
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
  display: block;
  bottom: 0.875rem;
  height: 100%;

  @media ${TABLET} {
    display: none;
  }
`;

export const ImageUpload = styled.img`
  display: block;
  position: absolute;
  bottom: 0.875rem;
  right: 0.875rem;

  @media ${TABLET} {
    display: none;
  }
`;

export const BlankContainer = styled.div`
  margin-top: 5rem;
`;

export const ContainerSubject = styled.div`
  margin-top: 1.5rem;
  width: 100%;
`;

export const FontLargeSubject = styled(FontLarge)`
  @media ${TABLET} {
    display: none;
  }
`;

export const SubjectInput = styled.input`
  margin-top: 0.5rem;
  width: 100%;
  background-color: rgba(255, 255, 255, 1);
  color: rgba(140, 140, 140, 1);
  border-radius: 10px;
  border-width: 0px;
  font-weight: 600;
  font-size: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  outline: none;

  @media ${TABLET} {
    width: 535px;
  }
`;

export const BoxFrame = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const FrameIntro = styled.div`
  width: 100%;
`;

export const IntroLetters = styled(FontLarge)`
  font-size: 0.8rem;

  @media ${TABLET} {
    font-size: 1rem;
    margin-top: 0.5rem;
    width: 126px;
  }
`;

export const IntroStarLetters = styled(IntroLetters)`
  font-weight: 800;
  background: url(${redStar}) left top no-repeat;
  background-size: 5px 5px;
  padding-top: 0.1rem;
  padding-left: 0.4rem;
  margin-bottom: ${(props) => props.marginBottom}rem;

  @media ${TABLET} {
    font-size: 0.98rem;
    background-size: 10px 10px;
    padding-left: 0.8rem;
    width: ${(props) => props.fullWidth}%;
    margin-bottom: ${(props) => props.marginBottom}rem;
  }

  @media ${LAPTOP} {
  }
`;

export const ContainerIntro = styled.div`
  width: 100%;

  @media ${TABLET} {
    display: flex;
    align-items: center;
    margin-top: 2rem;
  }
`;

export const IntroInput = styled.input`
  width: 100%;
  background-color: rgba(246, 246, 246, 1);
  border-color: rgba(196, 196, 196, 1);
  color: rgba(0, 0, 0, 1);
  display: inline-block;
  border-bottom-width: 1px;
  border-top-width: 0;
  border-right-width: 0;
  border-left-width: 0;
  font-weight: 600;
  font-size: 1.125rem;
  padding-left: 0px;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  outline: none;
`;

export const IntroInputName = styled(IntroInput)`
  font-size: 1rem;

  @media ${TABLET} {
    width: 410px;

    background-color: rgba(255, 255, 255, 1);
    color: rgba(140, 140, 140, 1);
    border-radius: 10px;
    border-width: 0px;
    font-weight: 600;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
  }
`;

export const InputTextArea = styled.textarea`
  background-color: rgba(246, 246, 246, 1);
  border-color: rgba(196, 196, 196, 1);
  color: rgba(0, 0, 0, 1);
  display: inline-block;
  border-bottom-width: 1px;
  border-top-width: 0;
  border-right-width: 0;
  border-left-width: 0;
  font-weight: 600;
  font-size: 1.125rem;
  padding-left: 0px;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  position: relative;
  width: 100%;
  height: 140px;
  outline: none;

  @media ${TABLET} {
    background-color: rgba(255, 255, 255, 1);
    color: rgba(140, 140, 140, 1);
    border-radius: 10px;
    border-width: 0px;
    font-weight: 600;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
  }
`;

export const IntroInputLarge = styled(IntroInputName)`
  @media ${TABLET} {
    width: 613px;
  }
`;

export const ColorUl = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media ${TABLET} {
    width: 613px;
  }
`;

export const Boxli = styled.li`
  width: 5rem;
  height: 4rem;
  background-color: ${(props) => props.liColor};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.1rem 0.1rem 0 0;
`;

export const ColorInput = styled.input`
  width: 4.5rem;
  height: 3.5rem;
  border-radius: 0.3rem;
  margin: -0.03rem 0 0 0;
  border: none;
  outline: none;
  appearance: none;
  cursor: pointer;
  background-color: ${(props) => props.introBackGround};

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  @media ${TABLET} {
  }

  @media ${LAPTOP} {
    margin: 0 0 0 0;
  }
`;

export const ColorPatternInput1 = styled(ColorInput)`
  background-color: none;
  background-image: url('https://www.elancer.co.kr/public/images/mask_01.png');
`;
export const ColorPatternInput2 = styled(ColorInput)`
  background-color: none;
  background-image: url('https://www.elancer.co.kr/public/images/mask_02.png');
`;
export const ColorPatternInput3 = styled(ColorInput)`
  background-image: url('https://www.elancer.co.kr/public/images/mask_03.png');
`;
export const ColorPatternInput4 = styled(ColorInput)`
  background-image: url('https://www.elancer.co.kr/public/images/mask_04.png');
`;
export const ColorPatternInput5 = styled(ColorInput)`
  background-image: url('https://www.elancer.co.kr/public/images/mask_05.png');
`;

export const TextInfo = styled.span`
  display: block;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
`;

export const FrameJobSkill = styled(FrameIntro)`
  width: 100%;
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

export const EducationContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  margin-top: 2rem;

  @media ${TABLET} {
    margin-top: 3rem;
    margin-bottom: 3rem;
    display: flex;
    align-items: ${(props) => !props.noFlex && 'center'};
  }
`;

export const TextLabel = styled.label`
  font-weight: bold;
  font-size: 0.7rem;
  display: inline-block;

  @media ${TABLET} {
    font-size: 1rem;
    width: 110px;
    margin-top: ${(props) => props.marginTop}rem;
  }
`;

export const ContainerSelectOption = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media ${TABLET} {
    width: ${(props) => props.width}px;
  }
`;

export const SelectInputName = styled.select`
  background-color: rgba(246, 246, 246, 1);

  display: inline-block;
  outline: none;
  cursor: pointer;

  border-color: rgba(196, 196, 196, 1);
  border-bottom-width: 1px;
  border-top-width: 0;
  border-right-width: 0;
  border-left-width: 0;
  color: rgba(140, 140, 140, 1);

  font-weight: 600;
  font-size: 1.125rem;
  padding-left: 0px;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;

  margin-left: 0.75rem;
`;

export const BetweenInputSpan = styled.span`
  font-size: 1rem;
`;

export const MarginAutoDiv = styled.div`
  @media ${TABLET} {
    /* padding-top: 1rem; */
    width: 90%;
    margin: 0 auto;
    border-top: ${(props) => props.last && '1px solid black'};
  }
`;

export const EmailFlex = styled.div`
  @media ${TABLET} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const InputDiv = styled.div`
  /* padding-top: 0.5rem; */
  padding-top: ${(props) => props.top}rem;

  position: relative;

  @media ${TABLET} {
    padding-top: ${(props) => props.top}rem;
  }
  @media ${LAPTOP} {
  }
`;

export const FlexDiv = styled.div`
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

export const SpanTag = styled.span`
  font-size: 0.75rem;
  font-weight: 800;
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

export const InputText = styled(IntroInputName)`
  width: 5rem;

  @media ${TABLET} {
    width: 6rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
`;

export const IntroInputNameDate = styled(IntroInputName)`
  ::-webkit-calendar-picker-indicator {
    cursor: pointer;
    filter: invert(1);
  }
  color-scheme: dark;
`;

export const FrameCareerContainer = styled.div`
  width: 100%;

  border-bottom: 1px solid black;
  margin-bottom: 1rem;
`;

export const FrameLists = styled.div`
  width: 100%;
  border-top: 1px solid #969696;
  border-bottom: 1px solid #969696;
`;

export const FrameOptions = styled.div`
  border-top: 1px solid #969696;
  border-bottom: 1px solid #969696;
  display: block;
`;

export const ContainerOptions = styled.ul`
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  border: 1px;
`;

export const ContainerList = styled.li`
  display: inline-block;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
`;

export const ButtonLabel = styled.label`
  display: inline-block;
  cursor: pointer;
  background-color: ${({ active }) => active && 'rgba(231, 231, 231, 1)'};
  border: ${({ active }) => (active ? '2px solid rgba(0, 0, 0, 1)' : '2px solid rgba(215, 215, 215, 1)')};
  border-radius: 9999px;

  text-align: center;
  font-size: 0.6rem;
  font-weight: 600;

  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  padding-left: 0.6rem;
  padding-right: 0.6rem;

  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  margin-right: 0.375rem;

  outline: none;

  @media ${TABLET} {
    border: ${({ active }) => (active ? '3px solid rgba(0, 0, 0, 1)' : '3px solid rgba(215, 215, 215, 1)')};
    font-size: 1rem;
    margin-right: 0.625rem;
    padding-left: 0.875rem;
    padding-right: 0.875rem;
  }
`;

export const ButtonOption = styled.input`
  display: none;
`;

export const SubjectTitle = styled.h2`
  font-size: 0.8rem;
  font-family: 'KoPubWorldDotum', sans-serif;

  margin-top: 1rem;

  font-weight: 550;

  @media ${TABLET} {
    font-size: 1rem;
  }
`;

export const ContainerMainLanguage = styled.div`
  width: 613px;
  background-color: rgba(246, 246, 246, 1);
  border-color: rgba(196, 196, 196, 1);
  color: rgba(0, 0, 0, 1);
  display: inline-block;
  border-bottom-width: 1px;
  border-top-width: 0;
  border-right-width: 0;
  border-left-width: 0;
  font-weight: 600;
  font-size: 1.125rem;
  padding-left: 0px;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  outline: none;
  font-size: 1rem;

  border-bottom: 1px solid rgba(196, 196, 196, 1);

  @media ${TABLET} {
    background-color: rgba(255, 255, 255, 1);
    color: rgba(140, 140, 140, 1);
    border-radius: 10px;
    border-width: 0px;
    font-weight: 600;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
  }
`;

export const InputHero = styled.input`
  position: relative;
  height: 100%;
  outline: none;
  border: none;
  background-color: rgba(246, 246, 246, 1);

  @media ${TABLET} {
    position: relative;
    height: 100%;
    width: auto;
    outline: none;
    border: none;
    background: none;
  }
`;

export const ContainerMainSpan = styled.div`
  display: absolute;
`;

export const LangaugeDIV = styled.div`
  width: 100%;
`;

export const ContainerMainContent = styled.div`
  display: inline;
  margin-right: 10px;
  background-color: #5bc0de;
  border-radius: 5px;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
`;

export const MainContentSpan = styled.span`
  display: absolute;
  color: white;

  width: 150px;
  font-size: 15px;
`;

export const MainContentDeleteSpan = styled(MainContentSpan)`
  margin-left: 5px;
  cursor: pointer;
`;

export const EtalkTriangleContainer = styled.div`
  margin-left: 5.5rem;
  width: 100%;
  border-radius: 5px;
  display: inline-block;
  font-size: 0.6875rem;

  position: relative;
  color: rgba(255, 255, 255, 1);
`;

export const EtalkTriangleSpan = styled.span`
  background-color: rgba(255, 107, 107, 1);
  position: absolute;
  left: 2.5rem;
  padding: 0.4rem;
  border-radius: 5px;
`;

export const EtalkTriangle = styled.span`
  background-color: rgba(255, 107, 107, 1);
  color: rgba(255, 107, 107, 1);
  height: 0.75rem;
  position: absolute;
  left: 4.5rem;
  width: 0.75rem;
  bottom: -29px;
  transform: rotate(-45deg);
  z-index: 0;
`;

export const EtalkTriangleDIV = styled.div`
  left: 21rem;
  top: -2.2rem;
  width: 330px;
  border-radius: 5px;
  display: inline-block;
  font-size: 0.6875rem;
  position: relative;
  color: rgba(255, 255, 255, 1);
`;

export const EtalkTriangleShape = styled.span`
  background-color: rgba(255, 107, 107, 1);
  position: absolute;
  padding: 0.4rem;
  border-radius: 5px;
`;

export const EtalkTriangleOthers = styled.span`
  background-color: rgba(255, 107, 107, 1);
  color: rgba(255, 107, 107, 1);
  height: 0.75rem;
  position: absolute;
  left: 4.5rem;
  width: 0.75rem;
  bottom: -30px;
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
  z-index: 0;
`;
