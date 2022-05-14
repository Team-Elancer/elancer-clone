import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export const SpacebetweenDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 1.5rem;
  justify-content: space-between;
  @media ${TABLET} {
    justify-content: start;
  }
  @media ${LAPTOP} {
    padding-bottom: 3.5rem;
  }
`;
export const Img = styled.img`
  display: none;
  @media ${TABLET} {
    display: block;
    padding-right: 1rem;
  }
  @media ${LAPTOP} {
  }
`;
export const H1 = styled.h1`
  font-size: 0.8rem;
  font-weight: 800;
  padding: 1rem 0;
  @media ${TABLET} {
    font-size: 2.2rem;
  }
  @media ${LAPTOP} {
    font-size: 1.2rem;
  }
`;
export const Save = styled.div`
  font-size: 0.75rem;
  font-weight: 500;
  @media ${TABLET} {
    display: none;
  }
  @media ${LAPTOP} {
  }
`;
export const JobUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: start;
  padding-bottom: 1rem;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;
export const JobLi = styled.li`
  width: 35%;
  text-align: center;
  margin-top: 0.2rem;
  padding: 0.5rem 0.7rem;
  font-weight: 800;
  border: 1px solid #e1e1e1;
  z-index: 2;
  cursor: pointer;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  &:hover {
    background-color: #eb6100;
    color: white;
  }
  @media ${TABLET} {
    font-size: 0.9rem;
    padding: 0.9rem 1.7rem;
  }
  @media ${LAPTOP} {
    padding: 0.9rem 2rem;
  }
`;
export const JobLiBorderLeft = styled.li`
  width: 35%;
  text-align: center;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  margin-top: 0.2rem;
  padding: 0.5rem 0.7rem;
  font-weight: 800;
  border: 1px solid #e1e1e1;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: ${(props) => props.bg};
  cursor: pointer;
  z-index: 2;
  position: relative;
  &:hover {
    background-color: #eb6100;
    color: white;
  }
  @media ${TABLET} {
    font-size: 0.9rem;
    padding: 0.9rem 1.7rem;
  }
  @media ${LAPTOP} {
    padding: 0.9rem 2.4rem;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
`;
export const JobLiBorderRight = styled.li`
  width: 35%;
  text-align: center;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  margin-top: 0.2rem;
  padding: 0.5rem 0.7rem;
  font-weight: 800;
  border: 1px solid #e1e1e1;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #eb6100;
    color: white;
  }
  @media ${TABLET} {
    font-size: 0.9rem;
    padding: 0.9rem 1.7rem;
  }
  @media ${LAPTOP} {
    padding: 0.9rem 2.4rem;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
export const Title = styled.div`
  font-size: 0.9rem;
  font-weight: 800;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    font-size: 2.2rem;
  }
`;
export const ColorUl = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;

export const Boxli = styled.li`
  width: 5rem;
  height: 4rem;
  background-color: ${(props) => props.liColor};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.1rem 0.1rem 0 0;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;
export const ColorInput = styled.input`
  width: 4.5rem;
  height: 3.5rem;
  border-radius: 0.3rem;
  margin: -0.03rem 0 0 0;
  border: none;
  outline: none;
  appearance: none;
  cursor: pointer;
  background-color: ${(props) => props.bgColor};
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    margin: 0 0 0 0;
  }
`;
export const ResultColor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #e1e1e1;
  width: 100%;
  background-color: ${(props) => props.bgColor};
  margin-top: 1.5rem;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    border-radius: 0.5rem;
  }
`;
export const LogImage = styled.img`
  width: 16rem;
  padding: 5rem 0;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    width: 32rem;
  }
`;
export const BlacSpan = styled.span`
  background-color: #434343;
  color: #b7b7b7;
  font-size: 0.75rem;
  padding: 0.4rem 1rem;
  border-radius: 1rem;
  cursor: pointer;
  position: relative;
  @media ${TABLET} {
    font-size: 0.95rem;
    padding: 0.7rem 0.9rem;
    border-radius: 1.5rem;
    letter-spacing: -0.1rem;
  }
`;
export const FileInput = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: transparent;
  border: none;
  color: #ffffff;
  font-size: 500px;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  position: absolute;
  opacity: 0;
  z-index: 2;
  @media ${TABLET} {
    cursor: pointer;
    left: ${(props) => props.tabletLeft};
    top: ${(props) => props.tabletTop};
  }
  @media ${LAPTOP} {
    left: ${(props) => props.laptopLeft};
  }
`;
