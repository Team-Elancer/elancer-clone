import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const MenuDiv = styled.div`
  display: none;
  @media ${TABLET} {
    display: block;
  }
  @media ${LAPTOP} {
    width: 290px;
  }
`;
export const UlTag = styled.ul`
  display: block;
  @media ${TABLET} {
    display: ${(props) => props.display};
    align-items: center;
    justify-content: start;
    flex-wrap: wrap;
  }
  @media ${LAPTOP} {
  }
`;

export const MenuLi = styled.li`
  font-size: 1.3rem;
  font-weight: 600;
  padding: 1rem 1rem;
  border-radius: 0.6rem;
  margin-bottom: 0.2rem;
  background-color: ${(props) => props.bgColor};
  &:hover {
    background-color: #f2f2f2;
  }
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;
export const MiddleDiv = styled.div`
  display: none;
  @media ${TABLET} {
    display: block;
  }
  @media ${LAPTOP} {
    width: 120px;
  }
`;
