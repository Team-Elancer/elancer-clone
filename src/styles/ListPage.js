import styled from 'styled-components';
import { TABLET } from 'utils/constants/responsive';

export const ContainerFrame = styled.div`
  background: ${({ dark }) => dark && 'black'};
  color: ${({ dark }) => dark && 'white'};
  width: 100%;
  height: 100%;
`;

export const FrameList = styled.div`
  width: 100%;
  max-width: 64rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;

  @media ${TABLET} {
    width: 100%;
    max-width: 55rem;
    padding: 28px;
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

export const TopLetterSubject = styled.h1`
  font-size: 20px;
  line-height: 1.25;
  font-weight: bold;

  @media ${TABLET} {
    font-size: 30.6px;
  }
`;