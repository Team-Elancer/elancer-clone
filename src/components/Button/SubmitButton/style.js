import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.button`
  background-color: #eb6100;
  color: white;
  border: none;
  outline: none;
  padding: ${(props) => props.height} ${(props) => props.side};
  font-size: 0.8rem;
  font-weight: 800;
  border-radius: 0.5rem;
  margin-top: ${(props) => props.marginTop};
  text-align: center;
  cursor: pointer;
`;
