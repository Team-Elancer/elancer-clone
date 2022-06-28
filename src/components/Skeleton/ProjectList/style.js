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
  background-color: #808080;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
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
export const Title = styled.div`
  width: 100%;
  padding: 1rem 0 1rem 0;
  font-size: 0.85rem;
  font-weight: 800;
  overflow: hidden;
  @media ${TABLET} {
    font-size: 1.75rem;
  }
  @media ${LAPTOP} {
  }
`;
export const DayPTag = styled.p`
  width: 60%;
  color: #8c8c8c;
  font-weight: 600;
  word-spacing: -0.2rem;
  @media ${TABLET} {
    font-size: 1rem;
  }
  @media ${LAPTOP} {
  }
`;
export const UlTag = styled.ul`
  margin: 2rem 0 1rem 0;
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const RelativeLi = styled.li`
  position: relative;
  margin-top: -2rem;
  width: 100%;
`;
export const BorderTopDiv = styled.div`
  border-color: rgba(241, 99, 0, 1);
  position: absolute;
  height: 0.25rem;
  top: 1rem;
  width: 2rem;
  @media ${TABLET} {
    border-width: 4px;
    width: 5rem;
  }
  @media ${LAPTOP} {
  }
`;
export const PTag = styled.p`
  text-align: center;
  color: #4b4b4b;
  font-weight: 600;
  line-height: 0.8rem;
  position: absolute;
  width: 30px;
  top: 1.8rem;
  @media ${TABLET} {
    font-size: 0.8rem;
    width: 50px;
    top: 2.1rem;
  }
  @media ${LAPTOP} {
  }
`;
