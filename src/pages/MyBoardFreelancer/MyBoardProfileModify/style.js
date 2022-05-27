import styled from 'styled-components';
import redStar from 'assets/images/redstar.png';

import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
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
    margin-top: 0;
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
  background-color: ${(props) => props.bgColor};

  @media ${TABLET} {
  }

  @media ${LAPTOP} {
    margin: 0 0 0 0;
  }
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
