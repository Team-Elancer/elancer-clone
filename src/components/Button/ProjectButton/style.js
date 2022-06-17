import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const SpanButton = styled.span`
  background-color: #3c3c3c;
  color: white;
  border: 1px solid white;
  border-radius: 0.3rem;
  padding: 0.7rem 1.5rem;
  font-weight: 600;
  margin-right: ${(props) => props.right};
  cursor: pointer;
  @media ${TABLET} {
    font-size: 1.3rem;
  }
  @media ${LAPTOP} {
  }
`;
