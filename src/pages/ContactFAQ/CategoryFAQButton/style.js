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
    font-size: 2rem;
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
`;

export const ButtonOption = styled.input`
  display: none;
`;

/*
export const TopButton = styled.button`
  background: #fff;
  border: ${({ primary }) => (primary ? 'solid 2px #000000' : 'solid 2px rgba(215, 215, 215, 1)')};
  border-radius: 9999px;
  cursor: pointer;
  font-weight: 600;
  font-size: 11px;
  text-align: center;
  margin: 4px 8px 4px 0;
  padding: 0.5rem;

  &:hover {
    background: rgba(231, 231, 231, 1);
  }

  @media ${TABLET} {
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.1rem;
  }
`;

export const TopButtonDark = styled(TopButton)`
  color: #fff;
  background-color: rgba(60, 60, 60, 1);
  border-color: ${({ primary }) => (primary ? '#fff' : 'rgba(60, 60, 60, 1)')};

  &:hover {
    border-color: ${({ primary }) => primary && '#fff'};
    background-color: rgba(75, 75, 75, 1);
  }
`;
*/
