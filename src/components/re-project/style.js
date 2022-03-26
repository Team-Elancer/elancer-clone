import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 70px;
  overflow-x: hidden;
`;
export const FirstDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const H1 = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
  padding-bottom: 25px;
`;
export const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Img = styled.img`
  cursor: pointer;
`;
export const SecondDiv = styled.div`
  width: 360%;
  display: flex;
  align-items: center;
  justify-content: start;
  overflow-x: hidden;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -44}vw);
`;
export const ProjectDiv = styled.div`
  width: 8.8%;
  height: 305px;
  border-radius: 8px;
  margin: 15px 15px 15px 0;
`;
export const UpDiv = styled.div`
  height: 50%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: #181818;
`;
export const DownDiv = styled.div`
  height: 50%;
  background-color: #3c3c3c;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  position: relative;
`;
export const BackImg = styled.div`
  z-index: 1;
  width: 90%;
  height: 70%;
  margin: auto;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.url});
  cursor: pointer;
`;
export const DivTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const SpanTag = styled.span`
  color: white;
  font-size: 0.5rem;
  font-weight: 300;
  padding: 5px;
  border-radius: 5px;
  background-color: #3c3c3c;
  margin: 10px 0 0 15px;
`;
export const HeartBackDiv = styled.div`
  padding: 5px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  text-align: center;
  background-color: white;
  margin: 10px 15px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const HearDiv = styled.div`
  font-size: 13px;
  text-align: center;
  margin-top: 3px;
`;
export const DownSmallDiv = styled.div`
  width: 80%;
  height: 80%;
  margin: 15px 15px;
  position: absolute;
`;
export const BigSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: start;
`;
export const MiniSpan = styled.span`
  color: #ff6b6b;
  border: 1px solid #ff6b6b;
  border-radius: 5px;
  font-size: 0.5rem;
  font-weight: 300;
  padding: 5px;
  margin-right: 6px;
`;
export const MiniSecond = styled.span`
  color: white;
  background-color: #707070;
  border-radius: 5px;
  font-size: 0.6rem;
  letter-spacing: 1px;
  padding: 5px;
  margin-right: 6px;
`;
export const TextaTag = styled.a`
  color: white;
  text-decoration: none;
  position: relative;
  top: 25%;
  font-size: 0.95rem;
`;
export const Ptag = styled.p`
  color: #a5a5a5;
  top: 90%;
  font-size: 0.7rem;
  position: absolute;
`;
