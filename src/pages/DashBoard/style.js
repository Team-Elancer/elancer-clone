import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const SizeDiv = styled.div`
  width: 96%;
  height: 96%;
  margin: auto;
  padding: 2rem 0;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    width: 1240px;
  }
`;

export const FlexDiv = styled.div`
  display: flex;
  justify-content: start;
  width: ${(props) => props.width};
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    width: ${(props) => props.width};
  }
`;
export const BoardDiv = styled.div`
  width: 100%;
  height: 100%;
  @media ${TABLET} {
    width: 730px;
  }
  @media ${LAPTOP} {
    width: 980px;
    margin: 0 auto;
    overflow: hidden;
    margin-right: 2rem;
  }
`;
