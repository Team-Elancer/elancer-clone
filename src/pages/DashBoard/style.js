import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const SizeDiv = styled.div`
  width: 96%;
  height: 96%;
  margin: auto;
  padding: 1rem 0;
`;

export const H1 = styled.h1`
  font-size: 0.9rem;
  font-weight: 800;
  padding: ${(props) => props.top} 0 ${(props) => props.bottom} 0;
`;

export const OverFlowDiv = styled.div`
  overflow: auto;
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: nowrap;
  width: 129%;
`;

export const CardSpan = styled.span`
  color: white;
  font-weight: 800;
  padding: 0.7rem 0.6rem;
  background-color: ${(props) => props.bgcolor};
  margin-right: 0.5rem;
  border-radius: 0.3rem;
  text-align: center;
`;

export const UlTag = styled.ul``;
export const LiTag = styled.li`
  font-size: 0.8rem;
  font-weight: 800;
  background-color: #e1e1e1;
  padding: 0.8rem 0.6rem;
  border-radius: 0.4rem;
  margin-bottom: 0.4rem;
`;
