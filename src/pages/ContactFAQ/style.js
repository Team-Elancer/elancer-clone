import styled from 'styled-components';
import { TABLET } from 'utils/constants/responsive';

export const FrameFAQ = styled.div`
  width: 100%;
  max-width: 64rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;

  display: flex;
  justify-content: center;
  flex-direction: column;

  @media ${TABLET} {
    width: 100%;
    max-width: 55rem;
    /* padding: 28px; */
    margin: auto;
  }
`;
