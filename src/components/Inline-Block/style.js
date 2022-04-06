import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
`;
export const H1 = styled.h1`
  font-size: 0.875rem;
  font-weight: 800;
  @media ${TABLET} {
    font-size: 2.1rem;
  }
`;
export const TextSpan = styled.span`
  font-size: 0.8rem;
  font-weight: 700;
  padding-right: 1rem;
  @media ${TABLET} {
    padding-right: 2rem;
  }
`;
export const Padding = styled.span`
  padding-right: 1rem;
`;
export const BorderSpan = styled.span`
  background-color: #e1e1e1;
  border-radius: 15px;
  padding: 0.4rem 0.7rem;
  @media ${TABLET} {
    font-size: 1.1rem;
    border-radius: 25px;
    padding: 0.5rem 1.1rem;
  }
`;
