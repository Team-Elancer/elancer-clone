import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const EcardDiv = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid #d7d7d7;
  border-radius: 7px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #fff;
  color: #000000;
  @media ${LAPTOP} {
    height: 269px;
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
  @media ${TABLET} {
    width: 2rem;
    height: 2rem;
  }
  @media ${LAPTOP} {
    width: 2rem;
    height: 2rem;
  }
`;
export const HeartDiv = styled.div`
  font-size: 0.775rem;
  color: #9e9e9e;
  margin-top: 4px;
  cursor: pointer;
  @media ${TABLET} {
    margin-top: 6px;
    font-size: 0.87rem;
  }
  @media ${LAPTOP} {
    font-size: 0.9rem;
  }
`;
export const FirstDiv = styled.div`
  width: 100%;
  height: 100%;
  margin: 35px 10px;
  cursor: pointer;
  @media ${TABLET} {
    margin: 0 auto;
    padding: 25px 30px;
  }
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
  font-size: 0.625rem;
  padding: 7px 5px 7px 5px;
  margin: 0 6px 3px 0;
  @media ${TABLET} {
    font-size: 0.75rem;
    padding: 6px 5px 5px 5px;
  }
  @media ${LAPTOP} {
    font-size: 0.65rem;
  }
`;
export const EcardRedLiTag = styled.li`
  display: inline-block;
  color: white;
  background-color: #ff6b6b;
  border-radius: 5px;
  font-size: 0.625rem;
  padding: 7px 5px 7px 5px;
  margin-right: 6px;
  @media ${TABLET} {
    font-size: 0.75rem;
    padding: 6px 5px 5px 5px;
  }
  @media ${LAPTOP} {
    font-size: 0.65rem;
  }
`;
export const HoneTag = styled.h1`
  font-weight: 700;
  font-size: 0.9375rem;
  width: 100%;
  height: 0.95rem;
  overflow: hidden;
  @media ${TABLET} {
    font-size: 1.56rem;
    height: 1.5rem;
  }
  @media ${LAPTOP} {
    font-size: 1.3rem;
    font-weight: 600;
    margin-top: 1rem;
    height: 1.3rem;
  }
`;
export const Ptag = styled.p`
  color: #9e9e9e;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.2rem;
  padding-top: 15px;
  overflow-y: hidden;
  height: 6.8rem;
  @media ${TABLET} {
    font-size: 0.9rem;
  }
  @media ${LAPTOP} {
    font-size: 0.93rem;
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
  @media ${TABLET} {
    font-size: 0.88rem;
  }
  @media ${LAPTOP} {
    font-size: 11px;
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
  @media ${TABLET} {
    font-size: 0.78rem;
    letter-spacing: 0px;
    margin-right: 20px;
  }
  @media ${LAPTOP} {
    font-size: 9px;
    letter-spacing: 0px;
  }
`;
