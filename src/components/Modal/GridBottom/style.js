import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  width: 100%;
  height: 64px;
  background-color: white;
  position: fixed;
  z-index: 99;
  bottom: 0;
  @media ${TABLET} {
    display: none;
  }
  @media ${LAPTOP} {
    display: none;
  }
  @media ${DESKTOP} {
    display: none;
  }
`;
export const Ultag = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Litag = styled.li`
  cursor: pointer;
  text-align: center;
  color: #969696;
  margin: 6px auto;

  &:hover {
    color: rgba(213, 107, 45, 1);
    font-weight: bold;
  }
`;
export const Img = styled.img`
  width: 1.75rem;
  display: block;
  margin: 0 auto;
  padding-bottom: 5px;

  &:hover {
    color: rgba(213, 107, 45, 1);
  }
`;
export const Spantag = styled.span`
  font-size: 0.5rem;
`;
