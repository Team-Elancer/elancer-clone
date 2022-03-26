import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 70px 0 15px 0;
`;

export const UlTag = styled.ul`
  display: flex;
  align-items: center;
  justify-content: start;
  margin: 0 0 30px 0;
`;
export const LiTag = styled.li`
  list-style: none;
  font-size: 15px;
  margin: 0 10px 0 0;
  padding: 15px 15px;
  border: 2px solid #d7d7d7;
  border-radius: 25px;
  cursor: pointer;
  &:hover {
    border: 2px solid black;
  }
`;
export const HeartBackDiv = styled.div`
  padding: 5px;
  width: 3%;
  height: 20px;
  border-radius: 50%;
  text-align: center;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 93%;
`;
export const HearDiv = styled.div`
  font-size: 15px;
  color: #9e9e9e;
  text-align: center;
  cursor: pointer;
`;
export const EcardDiv = styled.div`
  width: 100%;
  height: 250px;
  border: 2px solid #d7d7d7;
  border-radius: 7px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;
export const FirstDiv = styled.div`
  width: 80%;
  height: 80%;
  margin: 0 0 0 25px;
  cursor: pointer;
`;
export const EcardUlTag = styled.ul`
  display: flex;
  align-items: center;
  justify-content: start;
  list-style: none;
  padding-bottom: 20px;
`;
export const EcardBlackLiTag = styled.span`
  color: white;
  background-color: #3c3c3c;
  border-radius: 5px;
  font-size: 0.6rem;
  letter-spacing: 1px;
  padding: 5px;
  margin-right: 6px;
`;
export const EcardRedLiTag = styled.span`
  color: white;
  background-color: #ff6b6b;
  border-radius: 5px;
  font-size: 0.6rem;
  letter-spacing: 1px;
  padding: 5px;
  margin-right: 6px;
`;
export const HoneTag = styled.h1`
  font-weight: 500;
  font-size: 1.4rem;
`;
export const Ptag = styled.p`
  color: #9e9e9e;
  font-size: 0.96rem;
  font-weight: 600;
  line-height: 1.2rem;
  padding-top: 15px;
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
  font-size: 0.8rem;
  margin-right: -100px;
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
  font-size: 0.7rem;
  letter-spacing: 1px;
  padding: 5px;
  border-radius: 5px;
`;
export const LastSpan = styled.span`
  border: 2px solid #d7d7d7;
  border-radius: 25px;
  padding: 13px 17px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    border: 2px solid black;
    background-color: #d7d7d7;
  }
`;
