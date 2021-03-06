import styled from 'styled-components';

import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: ${(props) => props.top};
  position: ${(props) => props.relative};
`;

export const BgDiv = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('https://images.pexels.com/photos/1755683/pexels-photo-1755683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;
export const WhiteDiv = styled.div``;

export const CenterDiv = styled.div`
  display: ${(props) => props.display};
  width: 100%;
  max-width: 64rem;
  margin-left: 0.5rem;
  height: 100%;
  padding-bottom: 5rem;

  @media ${TABLET} {
    display: block;
    margin: 0 auto;
    padding-bottom: 8rem;
    width: 740px;
    margin-top: 1rem;
  }
  @media ${LAPTOP} {
    margin: 0 auto;
    padding-bottom: 8rem;
    width: 840px;
    margin-top: 1rem;
  }
`;
export const H1 = styled.h1`
  color: white;
  font-family: 'KoPubWorldDotum', sans-serif;
  font-size: 1.2rem;
  padding-top: 3rem;
  @media ${TABLET} {
    font-size: 2.6rem;
    letter-spacing: -1px;
    font-weight: 800;
    line-height: 3rem;
    width: 800;
  }
  @media ${LAPTOP} {
    font-size: 2.4rem;
    line-height: 3rem;
    width: 800;
  }
`;
export const PTag = styled.p`
  padding: 0.5rem 0;
  color: white;
  background-color: black;
  font-size: 0.8rem;
  font-weight: 800;
  width: 148px;
  height: 100%;
  text-align: center;
  margin-top: 1rem;
  border-radius: 0.3rem;
  @media ${TABLET} {
    border-radius: 0.5rem;
  }
  @media ${LAPTOP} {
    border-radius: 0.5rem;
  }
`;
export const FlexDiv = styled.div`
  display: none;

  @media ${TABLET} {
    border-radius: 3rem;
    width: 740px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: start;
    background-color: ${(props) => props.color};
    margin: 0 auto;
    z-index: 98;
    position: relative;
  }
  @media ${LAPTOP} {
    width: 840px;
  }
`;
export const jobButton = styled.button`
  position: relative;
  overflow: hidden;
  top: -10px;

  @media ${TABLET} {
    width: ${(props) => props.width};
    height: 98%;
    border: none;
    outline: none;
    background-color: #0000;
    text-align: start;
    padding: 0 2rem;
    border-radius: 5rem;
    cursor: pointer;
  }
  @media ${LAPTOP} {
  }
`;
export const Span = styled.span`
  @media ${TABLET} {
    font-size: 0.8rem;
    color: ${(props) => props.color};
  }
  @media ${LAPTOP} {
  }
`;
export const ButtonP = styled.p`
  position: absolute;
  width: 100%;
  height: 20px;
  @media ${TABLET} {
    font-size: 1.3rem;
    color: ${(props) => props.color};
  }
  @media ${LAPTOP} {
  }
`;
export const LineDiv = styled.div`
  @media ${TABLET} {
    width: 1px;
    height: 3rem;
    background-color: ${(props) => props.color};
  }
  @media ${LAPTOP} {
  }
`;
export const Img = styled.img`
  width: 50px;
  cursor: pointer;
  margin-right: 15px;
`;
export const MainDiv = styled.div`
  width: 370px;
  height: 100%;
  margin: 0 auto;
  @media ${TABLET} {
    width: 750px;
  }
  @media ${LAPTOP} {
    width: 800px;
  }
`;
export const ModalDiv = styled.div`
  display: none;
  @media ${TABLET} {
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: white;
    border-radius: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 98;
    position: relative;
    margin-left: ${(props) => props.left};
  }
  @media ${LAPTOP} {
    margin-left: ${(props) => props.laptopLeft};
  }
`;

export const UlTag = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  overflow: hidden;
`;

export const LiTag = styled.li`
  padding-right: 0.5rem;
  cursor: pointer;
  overflow: hidden;

  @media ${TABLET} {
    padding-right: ${(props) => props.right};
  }
  @media ${LAPTOP} {
  }
`;
export const Input = styled.input`
  appearance: none;
  border: 2px solid ${(props) => props.brColor};
  width: 100%;
  height: 42px;
  border-radius: 3rem;
  margin: 1rem 1rem 0 0;
  background-color: ${(props) => props.bgColor};
`;
export const RadioLabel = styled.label`
  top: -1.9rem;
  left: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  position: relative;
  cursor: pointer;
`;
export const Title = styled.h1`
  font-size: 0.95rem;
  font-weight: 800;
  padding-top: 0.5rem;
  @media ${TABLET} {
    font-size: 2rem;
    padding-top: 1rem;
  }
  @media ${LAPTOP} {
  }
`;
export const SubTitle = styled.h2`
  font-size: 0.85rem;
  font-weight: 550;
  @media ${TABLET} {
    font-size: 1.2rem;
    word-spacing: -0.3rem;
  }
  @media ${LAPTOP} {
  }
`;
export const JobUl = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 1rem;
  @media ${TABLET} {
    border-bottom: 1px solid #d7d7d7;
  }
  @media ${LAPTOP} {
  }
`;

export const TypeInput = styled.input`
  appearance: none;
  border: 2px solid ${(props) => props.brColor};
  width: 100%;
  height: 100%;
  padding: 1rem 0.2rem;
  border-radius: 3rem;
  background-color: ${(props) => props.bgColor};
  @media ${TABLET} {
    padding: 1.2rem 0.4rem;
  }
  @media ${LAPTOP} {
  }
`;
export const TypeLabel = styled.label`
  top: -1.6rem;
  left: 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  position: relative;
  cursor: pointer;
  @media ${TABLET} {
    top: -1.9rem;
    left: 0.95rem;
    font-size: 1.2rem;
  }
  @media ${LAPTOP} {
  }
`;
export const FreelancerFlexDiv = styled.div`
  width: 100%;
  overflow: hidden;
  @media ${TABLET} {
    display: flex;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid #d7d7d7;
  }
  @media ${LAPTOP} {
  }
`;
export const OverFlowDiv = styled.div`
  width: 366px;
  height: 224px;
  background-color: #434343;
  margin: 1rem auto;
  border-radius: 0.5rem;
  display: flex;
  position: relative;
  overflow: hidden;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;
export const Wrapper = styled.div`
  width: 732px;
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -366}px);
`;

export const Slide = styled.div`
  width: 366px;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #434343;
  justify-content: center;
  text-shadow: 0 2px 11px rgb(81 60 12 / 50%);
  color: rgba(255, 255, 255, 1);
  font-size: 2rem;
  font-weight: 800;
`;

export const LeftButton = styled.img`
  top: 5.5rem;
  position: absolute;
  z-index: 2;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;
export const RigtButton = styled.img`
  top: 5.5rem;
  left: 19.8rem;
  position: absolute;
  z-index: 2;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;

export const LogoImg = styled.img`
  width: 15rem;
`;

export const InfoDiv = styled.div`
  width: 366px;
  height: 100%;
  margin: 0 auto;
`;

export const InfoFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.content};
  margin-top: ${(props) => props.top};
`;
export const EcardTitle = styled.p`
  font-size: 0.95rem;
  font-weight: 800;
  padding-top: 1rem;
  @media ${TABLET} {
    font-size: 1.5rem;
  }
  @media ${LAPTOP} {
  }
`;
export const SpanSkill = styled.span`
  background-color: #ff6b6b;
  color: white;
  padding: 0.4rem 0.5rem;
  border-radius: 0.2rem;
  margin-right: 0.2rem;
`;
export const InfoPTag = styled.p`
  padding-top: 0.5rem;
  color: #8c8c8c;
  font-size: 0.8rem;
  font-weight: 600;
  line-height: 1.1rem;
  @media ${TABLET} {
    font-size: 1.1rem;
    line-height: 1.3rem;
  }
  @media ${LAPTOP} {
  }
`;

export const SectionContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem;
  gap: 0.2rem;
  margin: auto 0;
`;

export const SectionContentItem = styled.div`
  cursor: pointer;
  user-select: none;
  padding: 0.5rem 0.7rem;
  background-color: ${(props) => props.bgColor};
  border: solid 2px ${(props) => props.color};
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 800;
  margin-right: 0.5rem;
  /* margin: 1rem 1rem 0 0; */
  height: 42px;

  @media ${TABLET} {
    font-size: 1rem;
    padding: 0.7rem 0.9rem;
    border-radius: 1.3rem;
  }

  @media ${LAPTOP} {
    font-size: 1rem;
  }
`;

// ========== Search bar ==========
export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px auto;
  @media ${TABLET} {
    display: ${(props) => props.display};
  }
`;

export const SearchInputForm = styled.form`
  width: ${(props) => props.width};
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: auto;
  border-radius: 5vh;
  border: 2px solid transparent;
  background-image: linear-gradient(#fff, #fff), linear-gradient(to right, #7485c9 0, #f16300 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  margin: 0 auto;
`;

export const SearchInput = styled.input`
  margin-left: 15px;
  padding-left: 8px;
  width: 85%;
  height: 90%;
  border: none;
  outline: none;
  font-weight: bold;
  font-size: 0.813rem;
  &::placeholder {
    font-size: 0.813rem;
    font-weight: 600;
  }
`;

export const SearchImg = styled.img`
  width: 20px;
  cursor: pointer;
  margin-right: 15px;
`;
