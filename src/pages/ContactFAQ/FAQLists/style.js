import styled from 'styled-components';
import { TABLET } from 'utils/constants/responsive';

export const ContainerUl = styled.ul`
  gap: 0.375rem;
`;

export const FAQlist = styled.li`
  background-color: rgba(242, 242, 242, 1);
  color: rgba(112, 112, 112, 1);
  border-radius: 5px;
  font-weight: 600;
  font-size: 0.625rem;
  line-height: 2;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  margin-bottom: 0.3rem;

  @media ${TABLET} {
    font-size: 1rem;
    padding: 1rem;
  }
`;

export const ContainerQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerAnswer = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

export const QuestionLetter = styled.span`
  color: rgba(246, 85, 0, 1);
  margin-right: 0.2rem;
`;

export const AnswerLetter = styled.span`
  color: rgba(107, 155, 255, 1);
  margin-right: 0.2rem;
`;

export const ArrowButton = styled.div`
  cursor: pointer;
  font-size: 0.7rem;
`;
