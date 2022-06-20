import styled from 'styled-components';

import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

export const JobUl = styled.ul`
  width: 100%;
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
  flex: 1 1 0%;

  margin-top: 0.2rem;
  /* padding: 0.5rem 0.7rem; */
  border: 1px solid #e1e1e1;

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
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  width: 100%;

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
  cursor: pointer;

  width: 100%;
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
    height: 44px;
  }
`;

export const JobLabel = styled.label`
  cursor: pointer;
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
  cursor: pointer;
  width: 100%;
  height: 29px;
  background-color: ${(props) => props.bgColor};
  border: 1px solid #e6e6e6;
  outline: none;
  appearance: none;

  border-top-left-radius: ${({ radius }) => (radius === 0 ? '0.5rem' : 0)};
  border-bottom-left-radius: ${({ radius }) => (radius === 0 ? '0.5rem' : 0)};

  border-top-right-radius: ${({ radius }) => (radius === 2 ? '0.5rem' : 0)};
  border-bottom-right-radius: ${({ radius }) => (radius === 2 ? '0.5rem' : 0)};

  @media ${TABLET} {
    background-color: ${(props) => props.tabletColor};
  }

  @media ${LAPTOP} {
    height: 44px;
  }
`;

export const JobInputRight = styled.input`
  cursor: pointer;
  width: 100%;
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
    height: 44px;
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

export const FrameIntro = styled.div`
  width: 100%;
`;

export const ContainerIntro = styled.div`
  width: 100%;

  @media ${TABLET} {
    display: flex;
    align-items: center;
    margin-top: 2rem;
  }
`;

export const IntroLetters = styled(FontLarge)`
  font-size: 0.8rem;

  @media ${TABLET} {
    font-size: 1rem;
    margin-top: 0;
    width: 126px;
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

export const EducationContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  @media ${TABLET} {
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

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;

  :hover {
    transition: opacity 0.1s ease-in-out;
    transform: scale(1.1, 1.1);
  }

  @media ${TABLET} {
    border-radius: 10px;
    font-size: 0.938rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 1rem;
  }
`;

export const IntroInputNameDate = styled(IntroInputName)`
  ::-webkit-calendar-picker-indicator {
    cursor: pointer;
    filter: invert(1);
  }
  color-scheme: dark;
`;
