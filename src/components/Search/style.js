import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0 -23px 0;
`;

export const InputForm = styled.form`
  width: 44%;
  height: 57px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: auto;
  border-radius: 5vh;
  border: 3px solid transparent;
  background-image: linear-gradient(#fff, #fff), linear-gradient(to right, #7485c9 0, #f16300 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

export const Input = styled.input`
  margin-left: 15px;
  padding-left: 8px;
  width: 85%;
  height: 90%;
  border: none;
  outline: none;
  font-weight: bold;
  font-size: 18px;
  &::placeholder {
    font-size: 19px;
    font-weight: 600;
  }
`;

export const Img = styled.img`
  width: 28px;
  cursor: pointer;
  margin-right: 15px;
`;
