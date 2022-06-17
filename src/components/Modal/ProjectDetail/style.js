import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const BackColorDiv = styled.div`
  position: -webkit-sticky;
  position: fixed;
  width: 100%;
  padding: 1.5rem 0.4rem;
  background-color: #434343;
  z-index: 0;
  bottom: 62px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${TABLET} {
    bottom: 0px;
    justify-content: space-between;
    padding: 2.5rem 2.5rem;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
  }
  @media ${LAPTOP} {
    width: 100%;
    max-width: 60rem;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const TextDiv = styled.div`
  padding-right: 0.5rem;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;

export const PTag = styled.p`
  color: ${(props) => props.color};
  font-size: 0.8rem;
  font-weight: 800;
  padding-bottom: ${(props) => props.bottom};
  @media ${TABLET} {
    font-size: 1.2rem;
  }
  @media ${LAPTOP} {
  }
`;

export const SpanButton = styled.span`
  background-color: ${(props) => props.bgColor};
  color: white;
  border: 1px solid ${(props) => props.border};
  border-radius: 0.3rem;
  padding: 0.7rem 1.5rem;
  font-weight: 600;
  margin-right: ${(props) => props.right};
  cursor: pointer;
  width: 120px;
  text-align: center;
  @media ${TABLET} {
    font-size: 1.3rem;
    width: 190px;
    padding: 0.9rem ${(props) => props.padding};
  }
  @media ${LAPTOP} {
  }
`;
