import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
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
  padding-top: ${(props) => props.top};
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
  cursor: pointer;
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
  cursor: pointer;
  @media ${TABLET} {
    padding: 17.5px;
    width: 200px;
    height: 183px;
    margin-right: 1rem;
  }
  @media ${LAPTOP} {
  }
`;
export const H2 = styled.h2`
  font-size: 0.85rem;
  font-weight: 800;
  padding-top: 1.6rem;
  width: 7rem;
  line-height: 1.3rem;
  @media ${TABLET} {
    padding-top: 1.7rem;
    font-size: 1rem;
    width: 8rem;
  }
  @media ${LAPTOP} {
  }
`;
export const H3 = styled.h3`
  font-size: 0.91rem;
  font-weight: 800;
  padding-top: 0.7rem;
  line-height: 1.3rem;
  word-spacing: -0.1rem;
  letter-spacing: -0.05rem;
  color: ${(props) => props.color};
  @media ${TABLET} {
    font-size: 0.8rem;
  }
  @media ${LAPTOP} {
  }
`;
export const IconDiv = styled.div`
  width: 3rem;
  color: ${(props) => props.color};
  padding-top: ${(props) => props.mobileTop};
  @media ${TABLET} {
    width: 2.7rem;
    padding-top: ${(props) => props.top};
  }
  @media ${LAPTOP} {
  }
`;
export const Title = styled.h1`
  color: ${(props) => props.color};
  font-size: 0.9rem;
  font-weight: 800;
  padding-top: ${(props) => props.top};
  @media ${TABLET} {
    font-size: 1rem;
  }
  @media ${LAPTOP} {
  }
`;
export const H4 = styled.h4`
  font-size: 0.1rem;
  font-weight: 800;
  padding-top: 0.2rem;
  color: #4b4b4b;
  @media ${TABLET} {
    letter-spacing: -0.07rem;
    line-height: 1rem;
    padding-top: ${(props) => props.top};
  }
  @media ${LAPTOP} {
  }
`;

export const RelativeDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 2rem 0;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;
export const InputDiv = styled.div`
  width: 346px;
  height: 56px;
  border: 4px solid #f16300;
  @media ${TABLET} {
    width: 822.5px;
    height: 50px;
  }
  @media ${LAPTOP} {
  }
`;
export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 100%;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;
export const Select = styled.select`
  width: 120px;
  height: 100%;
  border: none;
  outline: none;
  font-size: 0.9rem;
  font-weight: 600;
  @media ${TABLET} {
    width: 170px;
  }
  @media ${LAPTOP} {
  }
`;
export const LineDiv = styled.div`
  width: 1px;
  height: 70%;
  background-color: #f16300;
  margin: 0 0.5rem;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;
export const Img = styled.img`
  position: absolute;
  left: 20rem;
  top: 2.5rem;
  width: 2.6rem;
  @media ${TABLET} {
    left: 50rem;
    top: 2.4rem;
    width: 2.3rem;
  }
  @media ${LAPTOP} {
  }
`;
export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 1rem;
  font-weight: 500;
  &::placeholder {
    font-size: 1rem;
    font-weight: 800;
    color: #6b7280;
  }
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;
export const BorderDiv = styled.div`
  display: none;
  @media ${TABLET} {
    display: block;
    height: 50px;
    width: 100%;
    border-bottom: 1px solid #cccccc;
  }
  @media ${LAPTOP} {
  }
`;
