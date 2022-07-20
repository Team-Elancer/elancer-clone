import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const OverFlowDiv = styled.div`
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    overflow: visible;
  }
`;

export const FlexDiv = styled.div`
  display: flex;
  justify-content: start;
  width: ${(props) => props.width};
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    width: ${(props) => props.width};
  }
`;
export const CardSpan = styled.span`
  color: white;
  font-weight: 800;
  padding: 1rem 0.6rem;
  background-color: ${(props) => props.bgcolor};
  margin-right: 0.5rem;
  border-radius: 0.3rem;
  text-align: center;
  cursor: pointer;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    font-size: ${(props) => props.textSize};
    padding: ${(props) => props.paddingHeight} ${(props) => props.paddingWidth};
    border-radius: ${(props) => props.radius};
    margin-right: 0.8rem;
  }
`;
