import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem 0;
`;

export const Text = styled.p`
  font-size: 0.8rem;
  font-weight: 800;
`;

export const ColorBox = styled.div`
  font-size: 0.7rem;
  font-weight: 800;
  background-color: #b7b7b7;
  padding: 0.3rem 0.3rem;
  border-radius: 0.5rem;
  color: white;
`;
