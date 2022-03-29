import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  width: 100%; 
  z-index: 99;
  background: white;
  position: absolute;
  overflow-y: hidden;
  @media ${TABLET} {
    width: 210px;
    height: 253px;
    border: 1px solid white;
    z-index: 99;
    background: white;
    border-radius: 15px;
    left: 74%;
    z-index: 99;
    position: absolute;
    margin: 125px 0 0 -120px;
  }
`;
export const Ultag = styled.ul`
  width: 90%;
  margin: 0 auto;
  list-style: none;
  color: black;
  font-size: 1rem;
  @media ${TABLET} {
    width: 95%;
    height: 95%;
    margin: 25px 0 0 -20px;
    color: black;
    font-size: 14px;
  }
`;
export const UpLiTag = styled.li`
  padding-bottom: 1.9rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 300;
  @media ${TABLET} {
    padding-bottom: 8px;
    font-weight: 300;
  }
`;
export const LineTag = styled.li`
  width: 110%;
  border-bottom: 0.5rem solid #e1e1e1;
  margin: 0 0 1.9rem -20px;
  @media ${TABLET} {
    width: 85%;
    border-bottom: 0.1rem solid #e1e1e1;
    margin: 8px 0;
  }
`;
export const DownLiTag = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  padding-bottom: 1.9rem;
  @media ${TABLET} {
    padding-top: 10px;
    font-weight: 600;
  }
`;
