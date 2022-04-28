import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const FlexDiv = styled.div`
  display: ${(props) => props.display};
  justify-content: start;
  width: ${(props) => props.width};
  @media ${TABLET} {
    display: flex;
    width: ${(props) => props.width};
  }
  @media ${LAPTOP} {
  }
`;
export const H1 = styled.h1`
  font-size: 0.9rem;
  font-weight: 800;
  padding-top: ${(props) => props.top};
  @media ${TABLET} {
    font-size: 2.2rem;
    padding: ${(props) => props.laptoptop} 0 ${(props) => props.laptopBottom} 0;
  }
  @media ${LAPTOP} {
  }
`;
export const SpacebetweenDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${TABLET} {
    padding-bottom: 3.5rem;
  }
  @media ${LAPTOP} {
  }
`;

export const LinkP = styled.p`
  font-size: 0.9rem;
  font-weight: 800;
  width: 100%;
  height: 100%;
  @media ${TABLET} {
    font-size: 1.4rem;
  }
  @media ${LAPTOP} {
    font-size: 1.4rem;
  }
`;
export const EcardSize = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  @media ${TABLET} {
    width: 418.25px;
    height: 260px;
  }
  @media ${LAPTOP} {
    width: 418.25px;
    height: 260px;
  }
`;
export const EcardDiv = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  background-color: #f2f2f2;
  border-radius: 0.5rem;
  @media ${TABLET} {
    margin-left: -0.5rem;
    border-top-right-radius: ${(props) => props.topleft};
    border-bottom-right-radius: ${(props) => props.right};
  }
  @media ${LAPTOP} {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;
export const EcarcdPaddingDiv = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 1rem 0.8rem;
  margin: 0 auto;
  @media ${TABLET} {
    padding: 3.5rem 1.5rem;
  }
  @media ${LAPTOP} {
  }
`;

export const LineDiv = styled.div`
  display: none;
  @media ${TABLET} {
    display: block;
    width: 0.1rem;
    height: 13rem;
    background-color: black;
    position: absolute;
    margin: 1.8rem 0 0 0;
  }
  @media ${LAPTOP} {
  }
`;
export const PTag = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.75rem;
  font-weight: 800;
  padding-top: ${(props) => props.top};
  @media ${TABLET} {
    font-size: 0.8rem;
    padding-top: 1rem;
  }
  @media ${LAPTOP} {
  }
`;
export const SpanTag = styled.span`
  color: #8c8c8c;
  font-size: 0.75rem;
  font-weight: 500;
  @media ${TABLET} {
    font-size: ${(props) => props.textSize};
    font-weight: 500;
  }
  @media ${LAPTOP} {
  }
`;
