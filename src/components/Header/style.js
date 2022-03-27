import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const HeaderDiv = styled.div`
  width: 43%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px auto;
  @media ${LAPTOP} {
    width: 62%;
  }
`;
export const Img = styled.img`
  width: 20vh;
  @media ${LAPTOP} {
    width: 27vh;
  }
`;
export const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ThreeTag = styled.div`
  padding: 0 5px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 800;
  @media ${LAPTOP} {
    font-size: 0.8rem;
  }
`;
export const Menu = styled.div`
  width: 85px;
  height: 40px;
  background-color: white;
  border: 2px solid #dcdcdc;
  border-radius: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${LAPTOP} {
    width: 70px;
    height: 34px;
  }
`;

export const Image = styled.img`
  width: 25px;
  @media ${LAPTOP} {
    margin: 3px -3px 0 0;
  }
`;

export const Span = styled.span`
  margin: 0 auto;
`;
