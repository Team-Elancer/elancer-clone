import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  background-color: #202020;
  color: white;
  width: 100%;
  min-height: 600px;
  @media ${TABLET} {
    min-height: 750px;
  }
  @media ${LAPTOP} {
    min-height: 900px;
  }
`;
export const Ul = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const Li = styled.ul`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border-radius: 5rem;
  cursor: pointer;
  font-weight: 600;
  font-size: 11px;
  text-align: center;
  margin: 4px 8px 4px 0;
  padding: 0.6rem 0.7rem;
  color: white;
  background-color: #3c3c3c;
  border: 0.15rem solid ${(props) => props.color};
  &:hover {
    border-color: 'white';
    background-color: rgba(75, 75, 75, 1);
  }
  @media ${TABLET} {
    padding: 0.8rem 1.1rem;
    font-size: 1.2rem;
  }
`;
