import styled from 'styled-components';
import { TABLET } from 'utils/constants/responsive';

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

  @media ${TABLET} {
    font-size: 1rem;
  }
`;
