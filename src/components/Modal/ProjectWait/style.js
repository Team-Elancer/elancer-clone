import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  width: 360px;
  height: 240px;
  padding: 1.5rem 1.5rem;
  position: absolute;
  background-color: #e7e7e7;
  border-radius: 1rem;
  z-index: 98;
  top: 10rem;
  @media ${TABLET} {
    width: 780px;
    height: 450px;
    padding: 3rem 3rem;
  }
  @media ${LAPTOP} {
  }
`;
export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #c4c4c4;
  padding-bottom: 2rem;
`;
export const Img = styled.img`
  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: 0.8rem;
  font-weight: 800;
  padding-left: 3.7rem;
  @media ${TABLET} {
    font-size: 1.4rem;
    padding-left: 12.7rem;
  }
  @media ${LAPTOP} {
  }
`;
export const RequesterDiv = styled.div`
  width: 100%;
  height: 80px;
  overflow-y: auto;
  border-bottom: 1px solid #c4c4c4;
  margin-top: 0.5rem;
  @media ${TABLET} {
    height: 175px;
  }
  @media ${LAPTOP} {
  }
`;
export const CountSpan = styled.span`
  font-size: 0.7rem;
  font-weight: 800;
  @media ${TABLET} {
    font-size: 1rem;
  }
  @media ${LAPTOP} {
  }
`;

export const RequesterUl = styled.ul`
  padding-top: 1rem;
  font-size: 0.5rem;
  font-weight: 600;
  @media ${TABLET} {
    font-size: 0.8rem;
  }
  @media ${LAPTOP} {
  }
`;
export const FirstSubmitDiv = styled.div`
  padding: 1rem 0;
  text-align: center;
`;
export const InfoPTag = styled.p`
  font-weight: 600;
`;
export const MobileButonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0.5rem;
  @media ${TABLET} {
    display: none;
  }
  @media ${LAPTOP} {
  }
`;
export const ButtonDiv = styled.div`
  display: none;
  @media ${TABLET} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media ${LAPTOP} {
  }
`;
export const PaddingLeftDiv = styled.div`
  padding-left: 0.5rem;
`;
export const SecondSubmitDiv = styled.div`
  display: none;
  @media ${TABLET} {
    display: block;
    padding-bottom: 1rem;
    text-align: center;
  }
  @media ${LAPTOP} {
  }
`;
export const InterviewButtonDiv = styled.div`
  padding-top: 1rem;
  text-align: center;
  @media ${TABLET} {
    display: none;
  }
  @media ${LAPTOP} {
  }
`;
export const Button = styled.button`
  border: none;
  outline: none;
  background-color: #eb6100;
  border-radius: 0.2rem;
  padding: 0.4rem 0.3rem;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

export const Ul = styled.ul`
  overflow-y: auto;
  padding-top: 0.5rem;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  padding-top: 0.5rem;
`;

export const InputCheck = styled.input`
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    zoom: 1.5;
  }
`;

export const Name = styled.h1`
  font-size: 0.8rem;
  font-weight: 600;
  @media ${TABLET} {
    font-size: 0.8rem;
  }
  @media ${LAPTOP} {
    font-size: 1.2rem;
  }
`;
export const ViewBlock = styled.span`
  background-color: ${(props) => props.color};
  padding: 0.5rem 0.5rem;
  margin: 0 0.5rem;
  font-size: 0.5rem;
  font-weight: 600;
  border-radius: 0.3rem;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;
export const ProfileSpan = styled.span`
  font-size: 0.6rem;
  color: white;
  font-weight: 800;
  padding: 0.6rem 0.4rem;
  text-align: center;
  background-color: #7485c9;
  border-radius: 0.7rem;
  margin-left: 0.5rem;
  cursor: pointer;
  @media ${LAPTOP} {
    font-size: 1rem;
    padding: 0.4rem 0.4rem;
    border-radius: 0.5rem;
  }
`;
