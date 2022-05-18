import styled from 'styled-components';
import { TABLET } from 'utils/constants/responsive';

export const ContainerTopButton = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  margin-bottom: 1rem;
  width: 100%;
`;

export const FAQH1 = styled.h1`
  font-size: 1rem;
  padding-bottom: 2.5rem;

  @media ${TABLET} {
    font-size: 2.7rem;
    padding-top: 5rem;
    padding-bottom: 6rem;
  }
`;

export const ContainerOptions = styled.ul`
  margin-bottom: 2rem;
  width: 100%;
`;

export const ContainerList = styled.li`
  display: inline-block;
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
    font-size: 1.2rem;
    border: ${({ active }) => (active ? '3px solid rgba(0, 0, 0, 1)' : '3px solid rgba(215, 215, 215, 1)')};
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    padding-left: 0.8rem;
    padding-right: 0.8rem;
    margin-right: 0.8rem;
  }
`;

export const ButtonOption = styled.input`
  display: none;
`;
