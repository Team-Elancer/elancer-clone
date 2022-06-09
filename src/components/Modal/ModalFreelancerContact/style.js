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
`;

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 2rem;
  border-bottom: 1px solid #cccccc;
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
  justify-content: space-between;
  padding-top: ${(props) => props.top};
`;

export const H2 = styled.h2`
  width: ${(props) => props.width};
  font-size: 0.9rem;
  font-weight: 600;
  margin-top: ${(props) => props.top};
  @media ${TABLET} {
    width: ${(props) => props.tabletWidth};
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
`;

export const Textarea = styled.textarea`
  border: none;
  outline: none;
  border-radius: 0.6rem;
  width: 485px;
  height: 70px;

  padding: 0.5rem 0 0 1rem;
  &::placeholder {
    font-weight: 600;
  }
`;

export const BorderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #cccccc;
  margin-top: 1rem;
`;

export const SubmitButton = styled.button`
  background-color: rgba(241, 99, 0, 1);
  color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  font-size: 0.9375rem;
  padding-left: 2.75rem;
  padding-right: 2.75rem;

  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  cursor: pointer;
  text-align: center;
  display: flex;
  width: 145px;
  height: 43px;
  margin: auto;
  margin-top: 1rem;
`;
