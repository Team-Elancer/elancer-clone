import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const HeartBackDiv = styled.div`
  padding: 5px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #f5f5f5;
  text-align: center;
  position: ${(props) => props.position};
  left: 90%;
  @media ${TABLET} {
    width: 2rem;
    height: 2rem;
  }
  @media ${LAPTOP} {
    width: 2rem;
    height: 2rem;
  }
`;
export const HeartDiv = styled.div`
  font-size: 0.775rem;
  color: #9e9e9e;
  margin-top: 4px;
  cursor: pointer;
  @media ${TABLET} {
    margin-top: 6px;
    font-size: 0.87rem;
  }
  @media ${LAPTOP} {
    font-size: 0.9rem;
  }
`;
