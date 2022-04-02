import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  width: 103%;
  height: 100%;
  z-index: 99;
  background: white;
  position: absolute;
  padding-top: 0.8rem;
  top: -10px;
  left: 26rem;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slide}rem);
  @media ${TABLET} {
    width: 210px;
    height: 253px;
    border: 1px solid white;
    z-index: 99;
    background: white;
    position: absolute;
    border-radius: 15px;
    top: 7rem;
    left: 32rem;
  }
  @media ${LAPTOP} {
    top: 7rem;
    left: 65rem;
  }
`;

export const Ultag = styled.ul`
  width: 90%;
  margin: 0 auto;
  list-style: none;
  color: black;
  font-size: 1rem;
  @media ${TABLET} {
    list-style: none;
    width: 85%;
    height: 85%;
    color: black;
    font-size: 0.8rem;
    padding-top: 1.4rem;
  }
`;
export const ImgLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  padding-bottom: 1.9rem;
  @media ${TABLET} {
    display: none;
  }
`;

export const UpLiTag = styled.li`
  padding-bottom: 1.9rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 300;
  @media ${TABLET} {
    padding-bottom: 0.9rem;
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
    margin: 5px 0 15px 0;
  }
`;
export const ButtonImg = styled.img`
  @media ${TABLET} {
    display: none;
  }
`;
export const DownLiTag = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  padding-bottom: 1.9rem;
  @media ${TABLET} {
    padding-top: 3px;
    font-weight: 400;
    padding-bottom: 0.9rem;
  }
`;
