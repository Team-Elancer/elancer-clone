import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  width: ${({ searchPage }) => !searchPage && '380px'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  @media ${TABLET} {
    width: ${({ searchPage }) => (!searchPage ? '730px' : '400px')};
  }

  @media ${LAPTOP} {
    width: ${({ searchPage }) => (!searchPage ? '800px' : '500px')};
  }
`;

export const FaBarDiv = styled.div`
  display: ${({ searchPage }) => (searchPage ? 'none' : 'block')};

  @media ${MOBILE} {
    display: none;
  }
`;

export const InputForm = styled.form`
  width: 160px;
  width: ${({ searchPage }) => (!searchPage ? '305px' : '160px')};
  height: 44px;
  height: ${({ searchPage }) => !searchPage && '44px'};
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
    width: ${({ searchPage }) => (!searchPage ? '747px' : '305px')};
    height: ${({ searchPage }) => (!searchPage ? '63px' : '50px')};
    margin: 0 auto;
  }
  @media ${LAPTOP} {
    width: ${({ searchPage }) => (!searchPage ? '840px' : '305px')};
    height: ${({ searchPage }) => (!searchPage ? '63px' : '50px')};
    margin: 0 auto;
    border: 3px solid transparent;
    border-radius: 8vh;
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
  @media ${TABLET} {
    font-size: ${({ searchPage }) => !searchPage && '1.2rem'};
  }
  @media ${LAPTOP} {
    font-size: ${({ searchPage }) => !searchPage && '1.3rem'};
  }
  &::placeholder {
    font-size: 0.813rem;
    font-weight: 600;
    @media ${TABLET} {
      font-size: ${({ searchPage }) => !searchPage && '1.2rem'};
      font-weight: 800;
      text-align: start;
      word-spacing: 2px;
    }
    @media ${LAPTOP} {
      font-size: ${({ searchPage }) => !searchPage && '1.3rem'};
      font-weight: 800;
      color: #6b7280;
      text-align: start;
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
