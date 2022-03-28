import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 35px 0;
`;

export const LastSpan = styled.span`
  border: 2px solid #d7d7d7;
  border-radius: 25px;
  padding: 10px 6px;
  font-size: 0.6875rem;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    border: 2px solid black;
    background-color: #d7d7d7;
  }
  @media ${LAPTOP} {
    padding: 10px 13px;
    font-size: 13px;
  }
`;
