import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 70px;
`;
export const FirstDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`;
export const H1 = styled.h1`
  font-size: 1.7rem;
  font-weight: 600;
  padding-bottom: 25px;
`;
export const IconDiv = styled.div`
  width: 23%;
  height: 60px;
  background-color: ${(props) => props.color};
  border: 1px solid none;
  border-radius: 15px;
  margin: 0 15px 15px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Img = styled.img`
  width: 21%;
  padding-left: 8px;
`;
export const TextSpan = styled.span`
  font-size: 1.1rem;
  color: white;
  margin-right: 7px;
`;
