import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export const ColorDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #808080;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  @media ${TABLET} {
    padding: 1rem 1.5rem;
  }
  @media ${LAPTOP} {
  }
`;
export const SpanTag = styled.span`
  padding: 0.3rem 0.5rem;
  color: white;
  font-size: 0.2rem;
  font-weight: 800;
  border-radius: 0.2rem;
  @media ${TABLET} {
    font-size: 0.85rem;
    padding: 0.6rem 0.8rem;
    border-radius: 0.4rem;
  }
  @media ${LAPTOP} {
  }
`;
export const MarginDiv = styled.div`
  margin-top: 1rem;
`;
export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
