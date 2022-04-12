import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  background-color: #eb6100;
  color: white;
  padding: ${(props) => props.height} ${(props) => props.side};
  font-size: 0.8rem;
  font-weight: 800;
  border-radius: 0.5rem;
  margin-top: 3rem;
  text-align: center;
  cursor: pointer;
`;
