import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${TABLET} {
    margin-top: 2.2rem;
  }
  @media ${LAPTOP} {
  }
`;
export const H1 = styled.h1`
  font-size: 0.8rem;
  font-weight: 800;
  cursor: ${(props) => props.cursor};
  @media ${TABLET} {
    font-size: ${(props) => props.size};
  }
  @media ${LAPTOP} {
  }
`;

export const OverflowDiv = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 2rem 0;
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  @media ${TABLET} {
    padding: 3rem 0;
  }
  @media ${LAPTOP} {
  }
`;

export const WidthDiv = styled.div`
  width: 970px;
  height: 205px;
  display: flex;
  align-items: center;
  overflow: auto;
  @media ${TABLET} {
    width: 100%;
  }
  @media ${LAPTOP} {
  }
`;

export const EcardDiv = styled.div`
  width: 224px;
  height: 176px;
  padding: 10px;
  background-color: #f2f2f2;
  border-radius: 0.7rem;
  margin-right: ${(props) => props.mobileRight};
  @media ${TABLET} {
    padding: 17.5px;
    width: 200px;
    height: 183px;
    margin-right: ${(props) => props.tabletRight};
  }
  @media ${LAPTOP} {
  }
`;
export const WhiteEcardDiv = styled.div`
  width: 224px;
  height: 176px;
  padding: 10px;
  background-color: white;
  border: 5px solid #f2f2f2;
  border-radius: 0.7rem;
  margin-right: 1.5rem;
  @media ${TABLET} {
    padding: 17.5px;
    width: 200px;
    height: 183px;
    margin-right: 1rem;
  }
  @media ${LAPTOP} {
  }
`;
