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
  overflow: hidden;
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
  cursor: pointer;
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
export const UlTag = styled.ul`
  margin: 2rem 0 3rem 1rem;
  display: flex;
  align-items: center;
  justify-content: start;
  @media ${TABLET} {
    margin: 3rem 0 4rem 3rem;
  }
  @media ${LAPTOP} {
  }
`;

export const RelativeLi = styled.li`
  position: relative;
  margin-top: -2rem;
`;
export const BorderTopDiv = styled.div`
  border-color: rgba(241, 99, 0, 1);
  border-top: 2px ${(props) => props.type} ${(props) => props.color};
  position: absolute;
  height: 0.25rem;
  top: 1rem;
  width: 2rem;
  left: ${(props) => props.left};
  @media ${TABLET} {
    border-width: 4px;
    left: ${(props) => props.laptopLeft};
    width: 5rem;
  }
  @media ${LAPTOP} {
  }
`;
export const Circlediv = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 1);
  border: 2px solid ${(props) => props.color};
  border-radius: 50%;
  height: 0.725rem;
  left: ${(props) => props.left};
  top: 0.75rem;
  width: 0.725rem;
  @media ${TABLET} {
    border-width: 4px;
    height: 1.425rem;
    width: 1.425rem;
    top: 0.45rem;
    left: ${(props) => props.laptopLeft};
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
  left: ${(props) => props.left};
  @media ${TABLET} {
    font-size: 0.8rem;
    width: 50px;
    top: 2.1rem;
    left: ${(props) => props.laptopLeft};
  }
  @media ${LAPTOP} {
  }
`;
