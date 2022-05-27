import styled from 'styled-components';

import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

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
  width: 100%;
  height: 29px;
  background-color: ${(props) => props.bgColor};
  border: 1px solid #e6e6e6;
  outline: none;
  appearance: none;

  @media ${TABLET} {
    background-color: ${(props) => props.tabletColor};
  }

  @media ${LAPTOP} {
    height: 44px;
  }
`;

export const JobInputRight = styled.input`
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
