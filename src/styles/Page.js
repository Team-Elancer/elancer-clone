import styled from 'styled-components';
import { TABLET, LAPTOP } from 'utils/constants/responsive';

export const ContainerHeader = styled.div`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 10px;
`;
export const ContainerFrame = styled.div`
  background: ${({ dark }) => dark && 'black'};
  color: ${({ dark }) => dark && 'white'};
  /* width: 100%; */
  width: 360px;
  height: 100%;
  margin: auto;
  margin-top: 5rem;

  @media ${TABLET} {
    width: 730px;
  }
  @media ${TABLET} {
    width: 840px;
  }
`;

export const FrameList = styled.div`
  width: 100%;
  max-width: 64rem;

  @media ${TABLET} {
    width: 100%;
    max-width: 55rem;
    margin: auto;
  }
`;

export const ContainerTopLetter = styled.div`
  margin-bottom: 24.5px;
`;

export const TopLetterExtra = styled.h3`
  font-size: 13.5px;
  font-weight: 600;

  @media ${TABLET} {
    font-size: 17.5px;
  }
`;

export const TopLetterSubject = styled.div`
  display: flex;

  font-size: 20px;
  line-height: 1.25;
  font-weight: bold;

  @media ${TABLET} {
    justify-content: space-between;
    font-size: 30.6px;
  }
`;

export const RegisterButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 38px;
  position: relative;
  top: 5px;
  left: 0.7rem;
  border-radius: 10px;
  background-color: #fff;
  border: 2px solid #f76a22;
  color: #000;
  font-size: 13px;
  cursor: pointer;

  @media ${TABLET} {
    width: 158px;
    height: 38px;
    margin-right: 6rem;
    font-size: 15px;
  }
  :hover {
    opacity: 0.8;
    box-shadow: rgba(0, 0, 0, 0.1) 5px 5px 10px;
    transition: 0.1s;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 35px 0;
`;

export const ButtonLastSpan = styled.span`
  border: 2px solid #d7d7d7;
  border-radius: 25px;
  padding: 10px 6px;
  font-size: 0.6875rem;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    border: 2px solid black;
    background-color: #d7d7d7;
  }
  @media ${TABLET} {
    padding: 15px 17px;
    font-size: 0.9rem;
    font-weight: 500;
  }
  @media ${LAPTOP} {
    padding: 12px 13px;
    font-size: 1rem;
  }
`;
