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
  border: 2px solid #d7d7d7;
  border-radius: 25px;
  cursor: pointer;
  &:hover {
    border: 2px solid black;
  }
  @media ${LAPTOP} {
    font-size: 13px;
    font-weight: 600;
    padding: 12px 15px;
  }
`;
export const HeartBackDiv = styled.div`
  padding: 5px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #f5f5f5;
  text-align: center;
  position: absolute;
  left: 90%;
`;
export const HeartDiv = styled.div`
  font-size: 0.775rem;
  color: #9e9e9e;
  margin-top: 4px;
  cursor: pointer;
  @media ${LAPTOP} {
    font-size: 12px;
  }
`;
export const EcardDiv = styled.div`
  width: 100%;
  height: 250px;
  border: 2px solid #d7d7d7;
  border-radius: 7px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const FirstDiv = styled.div`
  width: 100%;
  height: 100%;
  margin: 35px 0 0 10px;
  cursor: pointer;
`;
export const EcardUlTag = styled.ul`
  display: inline-block;
  list-style: none;
  width: 90%;
  padding-bottom: 20px;
`;
export const EcardBlackLiTag = styled.li`
  display: inline-block;
  color: white;
  background-color: #3c3c3c;
  border-radius: 5px;
  font-size: 1px;
  padding: 5px;
  margin: 0 6px 3px 0;
  @media ${LAPTOP} {
    font-size: 9px;
  }
`;
export const EcardRedLiTag = styled.li`
  display: inline-block;
  color: white;
  background-color: #ff6b6b;
  border-radius: 5px;
  font-size: 1px;
  padding: 5px;
  margin-right: 6px;
  @media ${LAPTOP} {
    font-size: 9px;
  }
`;
export const HoneTag = styled.h1`
  font-weight: 700;
  font-size: 0.9375rem;
  @media ${LAPTOP} {
    font-size: 18px;
    font-weight: 700;
  }
`;
export const Ptag = styled.p`
  color: #9e9e9e;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.2rem;
  padding-top: 15px;
  @media ${LAPTOP} {
    font-size: 12px;
  }
`;
export const LastDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 35px 0;
`;
export const SubDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  font-size: 0.6875rem;
  padding-right: 10px;
  @media ${LAPTOP} {
    font-size: 11px;
    margin-right: -80px;
  }
`;
export const BigSpan = styled.span`
  display: flex;
  margin-right: 5px;
`;
export const NumberTag = styled.p`
  color: #ff6b6b;
`;
export const TextpTag = styled.p`
  color: #9e9e9e;
`;
export const DaySpan = styled.span`
  background-color: #e85656;
  color: white;
  font-size: 0.625rem;
  letter-spacing: 1px;
  padding: 5px;
  border-radius: 5px;
  @media ${LAPTOP} {
    font-size: 9px;
    letter-spacing: 0px;
  }
`;
