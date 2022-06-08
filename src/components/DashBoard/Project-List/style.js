import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 2rem;
`;

export const ColorDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  padding: 1rem;
  border-radius: 0.5rem;
  @media ${TABLET} {
    padding: 1rem 1.5rem;
  }
  @media ${LAPTOP} {
  }
`;
export const BetweenDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${(props) => props.top};
`;
export const SpanTag = styled.span`
  padding: 0.3rem 0.5rem;
  background-color: ${(props) => props.bgColor};
  color: white;
  font-size: 0.2rem;
  font-weight: 800;
  border-radius: 0.2rem;
  cursor: ${(props) => props.cursor};
  @media ${TABLET} {
    font-size: 0.85rem;
    padding: 0.6rem 0.8rem;
    border-radius: 0.4rem;
  }
  @media ${LAPTOP} {
  }
`;
export const Title = styled.div`
  margin: 1rem 0 0.5rem 0;
  font-size: 0.85rem;
  font-weight: 800;
  @media ${TABLET} {
    margin: 1rem 0 0.7rem 0;
    font-size: 1.75rem;
  }
  @media ${LAPTOP} {
  }
`;
export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`;
export const ProjectSpan = styled.span`
  padding: 0.4rem 0.4rem;
  background-color: ${(props) => props.bgColor};
  color: white;
  font-size: 0.2rem;
  font-weight: 800;
  border-radius: 0.2rem;
  margin-right: 0.3rem;
  @media ${TABLET} {
    font-size: 0.75rem;
    padding: 0.6rem 0.8rem;
    border-radius: 0.4rem;
  }
  @media ${LAPTOP} {
  }
`;
export const DayPTag = styled.p`
  color: #8c8c8c;
  font-weight: 600;
  word-spacing: -0.2rem;
  @media ${TABLET} {
    font-size: 1rem;
  }
  @media ${LAPTOP} {
  }
`;
