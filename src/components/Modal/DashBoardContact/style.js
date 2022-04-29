import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 450px;
  padding: 20px 15px;
  background-color: #e7e7e7;
  z-index: 99;
  border-radius: 0.5rem;
  @media ${TABLET} {
    width: 740px;
    height: 500px;
    padding: 42px 35px;
    border-radius: 1rem;
  }
  @media ${LAPTOP} {
  }
`;
export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 2rem;
  border-bottom: 1px solid #cccccc;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;
export const Img = styled.img`
  cursor: pointer;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;
export const H1 = styled.h1`
  font-size: 1rem;
  font-weight: 600;
  padding-left: 7rem;
  @media ${TABLET} {
    font-size: 1.3rem;
    font-weight: 600;
    padding-left: 16rem;
  }
  @media ${LAPTOP} {
  }
`;
export const FlexInputDiv = styled.div`
  display: flex;
  align-items: center;
  padding-top: ${(props) => props.top};
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;
export const H2 = styled.h2`
  width: ${(props) => props.width};
  font-size: 0.9rem;
  font-weight: 600;
  margin-top: ${(props) => props.top};
  @media ${TABLET} {
    width: ${(props) => props.tabletWidth};
  }
  @media ${LAPTOP} {
  }
`;
export const Input = styled.input`
  border: none;
  outline: none;
  border-radius: 0.6rem;
  width: 485px;
  height: 38.5px;
  padding-left: 1rem;
  &::placeholder {
    font-weight: 600;
  }
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;
export const Textarea = styled.textarea`
  border: none;
  outline: none;
  border-radius: 0.6rem;
  width: 100%;
  height: 70px;
  margin-left: 2.6rem;
  padding: 0.5rem 0 0 1rem;
  &::placeholder {
    font-weight: 600;
  }
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;
export const BorderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #cccccc;
  margin-top: 1rem;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;
export const ButtonDiv = styled.div`
  width: 123px;
  padding-top: -8rem;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;
