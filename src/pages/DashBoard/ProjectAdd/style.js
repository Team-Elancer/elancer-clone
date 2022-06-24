import styled from 'styled-components';
import redStar from 'assets/images/redstar.png';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export const SpacebetweenDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 1.5rem;
  justify-content: space-between;
  @media ${TABLET} {
    justify-content: start;
  }
  @media ${LAPTOP} {
    padding-bottom: 3.5rem;
  }
`;
export const Img = styled.img`
  display: none;
  @media ${TABLET} {
    display: block;
    padding-right: 1rem;
  }
  @media ${LAPTOP} {
  }
`;
export const H1 = styled.h1`
  font-size: 0.8rem;
  font-weight: 800;
  padding: 2rem 0;
  @media ${TABLET} {
    font-size: 2.2rem;
  }
  @media ${LAPTOP} {
    font-size: ${(props) => props.ftszie};
  }
`;
export const Save = styled.div`
  font-size: 0.75rem;
  font-weight: 500;
  @media ${TABLET} {
    display: none;
  }
  @media ${LAPTOP} {
  }
`;
export const JobUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 1rem 0;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;

export const Title = styled.div`
  font-size: 0.9rem;
  font-weight: 800;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    font-size: 2.2rem;
  }
`;
export const ColorUl = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;

export const Boxli = styled.li`
  width: 5rem;
  height: 4rem;
  background-color: ${(props) => props.liColor};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.1rem 0.1rem 0 0;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;
export const ColorInput = styled.input`
  width: 4.5rem;
  height: 3.5rem;
  border-radius: 0.3rem;
  margin: -0.03rem 0 0 0;
  border: none;
  outline: none;
  appearance: none;
  cursor: pointer;
  background-color: ${(props) => props.bgColor};
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    margin: 0 0 0 0;
  }
`;
export const ResultColor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #e1e1e1;
  width: 100%;
  background-color: ${(props) => props.bgColor};
  margin-top: 1.5rem;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    border-radius: 0.5rem;
  }
`;
export const LogImage = styled.img`
  width: 16rem;
  padding: 5rem 0;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    width: 32rem;
  }
`;
export const BlacSpan = styled.span`
  background-color: #434343;
  color: #b7b7b7;
  font-size: 0.75rem;
  padding: 0.4rem 1rem;
  border-radius: 1rem;
  cursor: pointer;
  position: relative;
  @media ${TABLET} {
    font-size: 0.95rem;
    padding: 0.7rem 0.9rem;
    border-radius: 1.5rem;
    letter-spacing: -0.1rem;
  }
`;
export const FileInput = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: transparent;
  border: none;
  color: #ffffff;
  font-size: 500px;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  position: absolute;
  opacity: 0;
  z-index: 2;
  @media ${TABLET} {
    cursor: pointer;
    left: ${(props) => props.tabletLeft};
    top: ${(props) => props.tabletTop};
  }
  @media ${LAPTOP} {
    left: ${(props) => props.laptopLeft};
    top: ${(props) => props.laptopTop};
  }
`;
export const ColorDiv = styled.div`
  @media ${TABLET} {
    display: block;
    background-color: #f2f2f2;
    border-radius: 10px;
    height: 63rem;
    position: relative;
  }
  @media ${LAPTOP} {
    height: 100%;
  }
`;
export const MarginAutoDiv = styled.div`
  @media ${TABLET} {
    padding: 3rem 0;
    width: 90%;
    margin: 0 auto;
  }
`;

export const InputDiv = styled.div`
  padding-top: 1rem;
  position: relative;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    margin-left: ${(props) => props.left};
  }
`;
export const BlockDiv = styled.div`
  display: block;
  position: relative;
  margin-top: ${(props) => props.top};
  @media ${TABLET} {
    display: flex;
    align-items: center;
    justify-content: start;
  }
  @media ${LAPTOP} {
  }
`;
export const SpanTag = styled.span`
  font-size: 0.75rem;
  font-weight: 800;
  background: url(${redStar}) left top no-repeat ${(props) => props.star};
  background-size: 5px 5px;
  padding-left: 0.3rem;
  @media ${TABLET} {
    width: 100%;
    font-size: 0.98rem;
    background-size: 10px 10px;
    padding: 0 ${(props) => props.right} 0 0.7rem;
  }
  @media ${LAPTOP} {
    display: ${(props) => props.display};
  }
`;
export const InputTag = styled.input`
  width: 100%;
  outline: none;
  border: none;
  padding: 0.8rem 0 0.6rem 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: #707070;
  width: ${(props) => props.Mobilesize};
  margin-top: 0.5rem;
  border-bottom: 1px solid #c4c4c4;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: textfield;
    margin: 0;
  }
  &::placeholder {
    font-size: 1.125rem;
    font-weight: 600;
    border-bottom: none;
  }
  @media ${TABLET} {
    width: ${(props) => props.size};
    font-size: 0.9rem;
    border-radius: 0.5rem;
    padding: 0.75rem 0 0.6rem 0;
    border-bottom: none;
    &::placeholder {
      font-size: 0.9rem;
      font-weight: 600;
    }
  }
  @media ${LAPTOP} {
    padding-left: 1rem;
    width: ${(props) => props.laptopSize};
  }
`;
export const JobRadioLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-left: ${(props) => props.left};
  width: 100%;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;
export const JobInputLeft = styled.input`
  width: 100%;
  height: 29px;
  border: 1px solid #e6e6e6;
  outline: none;
  appearance: none;
  background-color: ${(props) => props.bgColor};
  z-index: 0;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  cursor: pointer;
  @media ${TABLET} {
    background-color: ${(props) => props.tabletColor};
  }
  @media ${LAPTOP} {
    width: 100%;
    height: 44px;
  }
`;
export const JobLabel = styled.label`
  position: absolute;
  z-index: 1;
  font-weight: 600;
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  cursor: pointer;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    font-size: 0.9rem;
  }
`;
export const JobInput = styled.input`
  width: 100%;
  height: 29px;
  background-color: ${(props) => props.bgColor};
  border: 1px solid #e6e6e6;
  outline: none;
  appearance: none;
  position: relative;
  z-index: 0;
  cursor: pointer;
  @media ${TABLET} {
    background-color: ${(props) => props.tabletColor};
  }
  @media ${LAPTOP} {
    width: 100%;
    height: 44px;
  }
`;

export const JobInputRight = styled.input`
  width: 100%;
  height: 29px;
  background-color: ${(props) => props.bgColor};
  border: 1px solid #e6e6e6;
  outline: none;
  appearance: none;
  z-index: 0;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  cursor: pointer;
  @media ${TABLET} {
    background-color: ${(props) => props.tabletColor};
  }
  @media ${LAPTOP} {
    width: 100%;
    height: 44px;
  }
`;
export const Select = styled.select`
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 1px solid #c4c4c4;
  font-size: 1.125rem;
  color: #707070;
  font-weight: 600;
  padding: 0.5rem 0;
  @media ${TABLET} {
    font-size: 1rem;
    border-radius: 0.5rem;
    border-bottom: none;
    padding: 0.5rem 1rem;
    width: 40rem;
  }
  @media ${LAPTOP} {
    font-size: 0.9rem;
    border-radius: 0.5rem;
    border-bottom: none;
    padding: 0.5rem 1rem;
    width: 40rem;
  }
`;
export const ErrorMessage = styled.p`
  color: #ff6b6b;
  padding: 1rem 0 1rem 0;
  font-size: 0.4rem;
  font-weight: 800;
  @media ${TABLET} {
    padding-left: 9rem;
    word-spacing: -0.2rem;
  }
  @media ${LAPTOP} {
  }
`;
export const CapsMessage = styled.p`
  color: #ff6b6b;
  padding: 0 0 1rem 0;
  font-size: 0.4rem;
  font-weight: 800;
  display: ${(props) => props.Mobiledisplay};
  @media ${TABLET} {
    padding-left: 9rem;
    display: ${(props) => props.display};
  }
  @media ${LAPTOP} {
  }
`;
export const FlexDiv = styled.div`
  display: ${(props) => props.flex};
  align-items: center;
  @media ${TABLET} {
    display: flex;
    align-items: center;
    justify-content: start;
    padding-top: ${(props) => props.top};
  }
`;
export const SapnTag = styled.span`
  font-size: 1rem;
  color: #cc3838;
  font-weight: 600;
  word-spacing: 0.11rem;
  letter-spacing: -0.1rem;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    margin: 1rem 0 0 1rem;
  }
`;
export const BorderDiv = styled.div`
  @media ${TABLET} {
    padding-top: 2rem;
    border-bottom: 1px solid #969696;
  }
`;
export const PTag = styled.p`
  text-align: center;
  font-size: 1rem;
  padding: 0.6rem 0.5rem 0 1rem;
  font-weight: 600;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;
export const SelectTag = styled.select`
  width: 100%;
  outline: none;
  border: none;
  padding: 0.8rem 0 0.6rem 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: black;
  width: 7rem;
  border-bottom: 1px solid #c4c4c4;
  &::placeholder {
    font-size: 1.125rem;
    font-weight: 600;
  }
  @media ${TABLET} {
    width: ${(props) => props.size};
    font-size: 0.9rem;
    border-radius: 0.5rem;
    padding: 0.75rem 0 0.6rem 0;
    &::placeholder {
      padding-left: 0.5rem;
      font-size: 0.9rem;
      font-weight: 600;
    }
  }
  @media ${LAPTOP} {
  }
`;
export const MarginTop = styled.div`
  margin-top: 1rem;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;

export const DateDiv = styled.div`
  width: 2rem;
  .react-datepicker {
    box-shadow: 3px 2px 11px rgb(0 0 0 / 30%);
  }
  .react-datepicker__input-container input {
    margin: ${(props) => props.top} 0 0 ${(props) => props.left};
    width: ${(props) => props.width};
    position: absolute;
    opacity: 0;
    height: 2rem;
    cursor: pointer;
  }
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    margin-left: -2rem;
    z-index: 99;
    .react-datepicker {
      box-shadow: 3px 2px 11px rgb(0 0 0 / 30%);
      margin: ${(props) => props.dateTop} 0 0 0;
    }
    .react-datepicker__input-container input {
      margin: -1rem 0 0 0;
      width: 15rem;
      opacity: 0;
      height: 2rem;
      left: -13rem;
      cursor: pointer;
    }
  }
`;
export const TextArea = styled.textarea`
  width: 100%;
  border: none;
  outline: none;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: #707070;
  &::placeholder {
    color: #707070;
    font-size: 1.125rem;
    font-weight: 600;
    border-bottom: none;
  }
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    width: 33rem;
  }
`;
export const RedText = styled.p`
  padding: 1rem 0;
  font-size: 1rem;
  font-weight: 800;
  line-height: 1.5rem;
  color: #cc3838;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    padding-left: 11rem;
  }
`;
export const CancelImg = styled.img`
  position: absolute;
  top: 2.5rem;
  left: 14rem;
  @media ${TABLET} {
    top: 3.8rem;
    left: 7rem;
  }
  @media ${LAPTOP} {
    top: 1.3rem;
    left: 22rem;
  }
`;
export const ButtonDiv = styled.div`
  display: none;
  @media ${TABLET} {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media ${LAPTOP} {
  }
`;
