import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputForm = styled.form`
  width: 43%;
  height: 63px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: auto;
  border-radius: 5vh;
  border: 3px solid transparent;
  background-image: linear-gradient(#fff #fff) linear-gradient(to right blue 0 orange 100%);
  background-origin: border-box;
  background-clip: content-box border-box;
`;

export const Input = styled.input`
  margin-left: 15px;
  padding-left: 15px;
  width: 85%;
  height: 90%;
  border: none;
  outline: none;
  font-weight: bold;
  font-size: 18px;
  &::placeholder {
    font-size: 21px;
    font-weight: 600;
  }
`;

export const Img = styled.img`
  cursor: pointer;
  margin: 0 auto;
`;
