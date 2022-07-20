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
  left: 80%;
  top: 20%;
  @media ${TABLET} {
    width: 2rem;
    height: 2rem;
    left: 85%;
    top: 2%;
  }
  @media ${LAPTOP} {
    width: 2rem;
    height: 2rem;
    top: 20%;
  }
`;
export const HeartDiv = styled.div`
  font-size: 0.775rem;
  color: #9e9e9e;
  margin-top: 1px;
  cursor: pointer;
  @media ${TABLET} {
    margin-top: 3px;
    font-size: 0.87rem;
  }
  @media ${LAPTOP} {
    margin-top: 2px;
    font-size: 1rem;
  }
`;
