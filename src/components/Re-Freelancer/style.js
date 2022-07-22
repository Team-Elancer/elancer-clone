import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  width: 100%;
  margin-top: 45px;
`;
export const FirstDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const H1 = styled.h1`
  font-size: 0.875rem;
  font-weight: 600;
  padding-bottom: 25px;
  @media ${TABLET} {
    font-size: 1.8rem;
  }
  @media ${LAPTOP} {
    font-size: 1.8rem;
  }
`;
export const ButtonDiv = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  @media ${TABLET} {
    display: flex;
  }
`;
export const Img = styled.img`
  cursor: pointer;
  @media ${TABLET} {
    width: 2rem;
    margin-bottom: 25px;
  }
  @media ${LAPTOP} {
    width: 2.5rem;
    margin: 0 auto;
  }
`;
export const ImgDiv = styled.div`
  border-radius: 70%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 80px;
  height: 80px;
  margin-top: -0.5rem;
  @media ${TABLET} {
    margin-top: -1.3rem;
    width: 150px;
    height: 150px;
  }
  @media ${LAPTOP} {
    margin-top: -1rem;
  }
`;
export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const SecondDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  align-items: center;
  justify-content: start;
  @media ${LAPTOP} {
    overflow-x: hidden;
  }
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
export const ProjectDiv = styled.div`
  width: 100%;
  height: 243.23px;
  margin: 15px 12px 15px 0;
  @media ${TABLET} {
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -50}rem);
    height: 21rem;
  }
  @media ${LAPTOP} {
    height: 334.69px;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -50}rem);
  }
`;
export const UpDiv = styled.div`
  width: 180px;
  height: 45%;
  border: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-image: url(${({ introBackGround }) => {
    let DBURL = 'black';

    if (introBackGround === 'PATTERN1') DBURL = 'https://www.elancer.co.kr/public/images/mask_01.png';
    if (introBackGround === 'PATTERN2') DBURL = 'https://www.elancer.co.kr/public/images/mask_02.png';
    if (introBackGround === 'PATTERN3') DBURL = 'https://www.elancer.co.kr/public/images/mask_03.png';
    if (introBackGround === 'PATTERN4') DBURL = 'https://www.elancer.co.kr/public/images/mask_04.png';
    if (introBackGround === 'PATTERN5') DBURL = 'https://www.elancer.co.kr/public/images/mask_05.png';

    return DBURL;
  }});
  background-color: ${({ introBackGround }) => {
    let DBColor = 'black';

    if (introBackGround === 'WHITE') DBColor = '#FFFFFF';
    if (introBackGround === 'COBALT_BLUE') DBColor = '#7485c9';
    if (introBackGround === 'LIGHT_PURPLE') DBColor = '#8a7fa4';
    if (introBackGround === 'DARK_PINK') DBColor = '#eb6100';
    if (introBackGround === 'DARK_ORANGE') DBColor = '#b57360';
    if (introBackGround === 'ORANGE') DBColor = '#d56b2d';
    if (introBackGround === 'LIGHT_ORANGE') DBColor = '#f16300';

    return DBColor;
  }};
  background-repeat: no-repeat;
  background-size: cover;

  @media ${TABLET} {
    width: 16.4rem;
    height: 50%;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
  @media ${LAPTOP} {
    width: 16rem;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;
export const TitleName = styled.div`
  color: white;
  font-size: 1rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70%;
  width: 100%;
  overflow: hidden;
  text-align: center;
  @media ${TABLET} {
    font-size: 2rem;
  }
  @media ${LAPTOP} {
  }
`;
export const DownDiv = styled.div`
  width: 100%;
  height: 55%;
  background-color: #3c3c3c;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  position: relative;
  @media ${TABLET} {
    height: 50%;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
  @media ${LAPTOP} {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
export const DivTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;
export const SpanTag = styled.span`
  color: white;
  font-size: 0.625rem;
  padding: 5px;
  border-radius: 5px;
  background-color: #3c3c3c;
  margin: 10px 0 0 15px;
  @media ${TABLET} {
    font-size: 0.8rem;
  }
  @media ${LAPTOP} {
    font-size: 0.715rem;
  }
`;
export const HeartBackDiv = styled.div`
  padding: 5px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  text-align: center;
  background-color: white;
  margin: 10px 15px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media ${TABLET} {
    width: 1.8rem;
    height: 1.8rem;
  }
`;
export const DownSmallDiv = styled.div`
  width: 80%;
  height: 80%;
  margin: 15px 15px;
  position: absolute;
`;
export const BigSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: start;
  margin: 0 auto;
  overflow: hidden;
`;
export const MiniSpan = styled.span`
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  font-size: 0.625rem;
  letter-spacing: 1px;
  padding: 5px;
  margin-right: 2px;
  width: 100%;
  height: 100%;
  @media ${TABLET} {
    font-size: 0.815rem;
  }
  @media ${LAPTOP} {
    font-size: 0.5rem;
  }
`;
export const hiddenP = styled.p`
  position: relative;
  top: 15%;
  display: flex;
  align-items: top;
  justify-content: center;
  overflow: hidden;
  height: 2rem;
  @media ${TABLET} {
    top: 20%;
    height: 2.2rem;
  }
`;
export const TextaTag = styled.span`
  color: white;
  text-decoration: none;
  font-size: 0.6875rem;
  @media ${TABLET} {
    font-size: 1.125rem;
  }
  @media ${LAPTOP} {
    font-size: 1rem;
    line-height: 1.2rem;
  }
`;
export const FlexDiv = styled.div`
  width: 110%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 90%;
`;
export const Ptag = styled.span`
  color: #a5a5a5;
  top: 80%;
  font-size: 0.625rem;
  font-weight: 200;
  @media ${TABLET} {
    font-size: 0.8rem;
  }
`;
