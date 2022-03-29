import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: start;
  margin: 30px auto;
  @media ${TABLET} {
    width: 100%;
  }
`;

export const FaBarDiv = styled.div`
  display: block;
  @media ${MOBILE} {
    display: none;
  }
`;

export const InputForm = styled.form`
  width: 82%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: auto;
  border-radius: 5vh;
  border: 2px solid transparent;
  background-image: linear-gradient(#fff, #fff), linear-gradient(to right, #7485c9 0, #f16300 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  margin-left: 15px;
  @media ${TABLET} {
    width: 98%;
    height: 63px;
    margin: 0 auto;
  }
  @media ${LAPTOP} {
    width: 62%;
    height: 50px;
  }
`;

export const Input = styled.input`
  margin-left: 15px;
  padding-left: 8px;
  width: 85%;
  height: 90%;
  border: none;
  outline: none;
  font-weight: bold;
  font-size: 0.813rem;
  &::placeholder {
    font-size: 0.813rem;
    font-weight: 600;
    @media ${TABLET} {
      font-size: 1.2rem;
      font-weight: 800;
      text-align: start;
      word-spacing: 2px;
    }
    @media ${LAPTOP} {
      font-size: 16px;
    }
  }
`;

export const Img = styled.img`
  width: 20px;
  cursor: pointer;
  margin-right: 15px;
  @media ${TABLET} {
    width: 30px;
    margin-right: 20px;
  }
  @media ${LAPTOP} {
    width: 24px;
  }
`;
