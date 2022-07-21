import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  width: 100%;
  margin: 70px 0 15px 0;
`;

export const UlTag = styled.ul`
  display: inline-block;
  margin-bottom: 1rem;
`;
export const LiTag = styled.li`
  display: inline-block;
  list-style: none;
  font-size: 0.7rem;
  margin: 10px 10px 0 0;
  padding: 10px 10px;
  border: 2px solid ${(props) => props.boder};
  border-radius: 25px;
  cursor: pointer;
  &:hover {
    border: 2px solid black;
  }
  background-color: ${(props) => props.bgColor};
  @media ${TABLET} {
    font-size: 0.98rem;
    font-weight: 600;
    padding: 12px 15px;
    margin: 10px 15px 0 0;
  }
  @media ${LAPTOP} {
    font-size: 1rem;
    font-weight: 600;
    padding: 12px 15px;
  }
`;
