import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const BorderDiv = styled.div`
  height: 2px;
  background: linear-gradient(white, gray);
`;

export const SizeDiv = styled.div`
  width: 370px;
  height: 100%;
  margin: 0 auto;
  @media ${TABLET} {
    width: 747px;
  }
  @media ${LAPTOP} {
    width: 800px;
  }
`;

export const H1Div = styled.div`
  display: none;
  @media ${TABLET} {
    display: block;
    font-size: 2.1rem;
    font-weight: 600;
    padding-top: 8rem;
  }
  @media ${LAPTOP} {
  }
`;
export const TextDiv = styled.div`
  padding-top: 7rem;
  font-size: 1.13rem;
  font-weight: 600;
  letter-spacing: -0.2mm;
  line-height: 1.7rem;
  @media ${TABLET} {
    text-align: center;
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: -0.3mm;
  }
  @media ${LAPTOP} {
  }
`;
export const LoginError = styled.div`
  color: #cc3838;
  font-size: 1rem;
  font-weight: 800;
  padding-bottom: 2rem;
  letter-spacing: -0.4mm;
  @media ${TABLET} {
    text-align: center;
    font-size: 0.8rem;
    padding-bottom: 1rem;
    padding-right: 5rem;
  }
  @media ${LAPTOP} {
  }
`;
export const IdForm = styled.form`
  font-size: 0.75rem;
  padding-top: 4rem;
  @media ${TABLET} {
    background-color: #f2f2f2;
    padding-top: 2rem;
    border-radius: 8px;
    margin: 3rem 0 7rem 0;
  }
  @media ${LAPTOP} {
  }
`;
export const FlexDiv = styled.div`
  display: block;
  @media ${TABLET} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media ${LAPTOP} {
  }
`;
export const Label = styled.label`
  font-weight: 700;
  @media ${TABLET} {
    font-size: 1rem;
    padding-right: 0.5rem;
  }
  @media ${LAPTOP} {
  }
`;
export const PaddingDiv = styled.div``;
export const IdInput = styled.input`
  border: none;
  outline: none;
  padding: 0.8rem 0 0.625rem 0;
  font-size: 1.12rem;
  font-weight: 700;
  color: #707070;
  display: inline-block;
  &::placeholder {
    font-size: 1.12rem;
    font-weight: 700;
    color: #707070;
    margin-top: -3rem;
    padding-left: 0.5rem;
  }
  @media ${TABLET} {
    width: 336px;
    border-radius: 8px;
    font-size: 0.9rem;
    &::placeholder {
      font-size: 0.9rem;
      padding-bottom: 35px;
    }
  }
  @media ${LAPTOP} {
  }
`;
export const ErrorMessageDiv = styled.div`
  border-top: 1px solid #c4c4c4;
  padding: 0.6rem 0 2.5rem 0;
  font-size: 0.3rem;
  color: #ff6b6b;
  font-weight: 700;
  @media ${TABLET} {
    border: none;
    text-align: center;
    padding-right: 9rem;
  }
  @media ${LAPTOP} {
  }
`;
export const AlignCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 5rem;
  @media ${TABLET} {
    width: 345px;
    margin: 0 0 0 14rem;
  }
  @media ${LAPTOP} {
    margin: 0 0 0 16rem;
  }
`;
export const CheckBox = styled.input`
  margin-right: 0.5rem;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;
export const CheckLabel = styled.label`
  font-size: 0.75rem;
  font-weight: 800;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;
export const SpaceBetween = styled.div``;

export const Span = styled.span`
  color: #f16300;
  font-size: 0.75rem;
  font-weight: 800;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;
export const MarginAuto = styled.div`
  width: 100%;
  display: block;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;

export const CenterDiv = styled.div`
  margin: 0 auto;
  @media ${TABLET} {
    width: 30%;
  }
  @media ${LAPTOP} {
    width: 30%;
  }
`;

export const TextSpan = styled.span`
  padding: 0 0 0 ${(props) => props.mobilePadding};
  @media ${TABLET} {
    padding: 0 0 0 ${(props) => props.tabletPadding};
  }
  @media ${LAPTOP} {
    padding: 0 0 0 ${(props) => props.laptoppadding};
  }
`;
export const LoginButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.content};
  width: 366px;
  padding: 0.7rem 0;
  background-color: ${(props) => props.mobileBg};
  border: 1px solid ${(props) => props.border};
  color: ${(props) => props.mobileColor};
  border-radius: 5px;
  margin-bottom: 0.2rem;
  font-weight: 800;
  position: relative;
  cursor: pointer;
  @media ${TABLET} {
    width: 224px;
    background-color: ${(props) => props.tabletBg};
    color: ${(props) => props.tabletColor};
    font-weight: 800;
    margin-bottom: 0.2rem;
    border-radius: 8px;
  }
  @media ${LAPTOP} {
    margin-bottom: 0.08rem;
    padding: 0.68rem 0;
    border-radius: 8px;
  }
`;
export const PTag = styled.p`
  width: 366px;
  @media ${TABLET} {
    width: 224px;
  }
`;
export const Icon = styled.p`
  position: absolute;
  padding: 0 0 0 1rem;
`;
export const NaverImg = styled.img`
  width: 2rem;
  vertical-align: middle;
  position: absolute;
  margin: -1rem 0 0 0;
`;
export const SigninDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;
  font-size: 0.9rem;
  @media ${TABLET} {
    font-size: 0.7rem;
  }
  @media ${LAPTOP} {
  }
`;
export const SigninSpan = styled.span`
  font-weight: 800;
  cursor: pointer;
`;
