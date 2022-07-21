import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const FrameProfile = styled.div`
  width: 100%;
`;

export const ContainerTop = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8125rem;
`;

export const ContainerFrame = styled.div`
  background: ${({ dark }) => dark && 'black'};
  color: ${({ dark }) => dark && 'white'};
  width: 100%;
  height: 100%;
`;

export const FrameList = styled.div`
  width: 100%;
  max-width: 64rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;

  @media ${TABLET} {
    width: 100%;
    max-width: 55rem;
    margin: auto;
    padding: 0;
  }
`;

export const ContainerTitle = styled.div`
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  font-weight: 700;
  font-size: 0.9375rem;
  line-height: 1.438rem;
  height: 224px;
  margin-bottom: 20px;
  padding: 0;

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

  background-image: url(${({ introBackGround }) => {
    let DBURL = 'black';

    if (introBackGround === 'PATTERN1') DBURL = 'https://www.elancer.co.kr/public/images/mask_01.png';
    if (introBackGround === 'PATTERN2') DBURL = 'https://www.elancer.co.kr/public/images/mask_02.png';
    if (introBackGround === 'PATTERN3') DBURL = 'https://www.elancer.co.kr/public/images/mask_03.png';
    if (introBackGround === 'PATTERN4') DBURL = 'https://www.elancer.co.kr/public/images/mask_04.png';
    if (introBackGround === 'PATTERN5') DBURL = 'https://www.elancer.co.kr/public/images/mask_05.png';

    return DBURL;
  }});

  @media ${TABLET} {
    border-radius: 10px;
    margin: 3rem 0;
  }
`;

export const FreelancerTitle = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;

  @media ${TABLET} {
    font-size: 1.875rem;
    line-height: 2rem;
  }
`;

export const PersonFlexCenter = styled.div`
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 230px;
  text-shadow: 1px 1px 10px black;
`;

export const FreelancerStackBtn = styled.span`
  background-color: rgba(255, 107, 107, 1);
  border-color: rgba(255, 107, 107, 1);
  border-width: 1px;
  color: rgba(255, 255, 255, 1);
  display: inline-block;
  text-align: center;
  margin: 1px;
  border-radius: 5px;
  font-weight: 400;
  font-size: 0.625rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.375rem;
  padding-right: 0.375rem;

  @media ${TABLET} {
    font-size: 0.8rem;
    padding-top: 0.35rem;
    padding-bottom: 0.35rem;
    padding-left: 0.42rem;
    padding-right: 0.42rem;
  }
`;

export const Main = styled.div`
  @media ${TABLET} {
    width: 832px;
    margin: auto;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export const ContainerFreelancer = styled.div`
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
  font-weight: bold;
`;

export const FreelancerCertificate = styled.span`
  background-color: #e6b222;
  border-color: #e6b222;
  border-radius: 5px;
  border-width: 1px;
  color: rgba(255, 255, 255, 1);
  display: inline-block;
  text-align: center;
  margin: 1px;
  font-weight: 400;
  font-size: 0.7rem;
  padding: 0.4rem;
  margin-bottom: 1rem;
`;

export const ContainerEcardProfile = styled.div`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.25rem;
  margin: 1.5rem 0;

  @media ${TABLET} {
    display: flex;
    flex-direction: row;
    background-color: rgba(246, 246, 246, 1);
    margin: 1.5rem 0;
    padding-left: 1.75rem;
    padding-right: 1.75rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
`;

export const EcardProfileLeft = styled.div`
  border-radius: 10px;
  padding: 0px;
  width: 100%;
  display: flex;

  @media ${TABLET} {
    border-radius: 0;
    border-right: 1px solid #000;
    padding-right: 1.75rem;
  }
`;

export const ContainerEcardProfileImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 112px;
  height: 145px;
`;

export const ImgContainer = styled.div``;

export const ImgFile = styled.img`
  width: 84px;
  height: 84px;
`;

export const EcardProfileName = styled.div`
  font-size: 1.125rem;
  font-weight: bold;
  margin-top: 0.5rem;
`;

export const ContainerEcardDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  width: 100%;
  padding-top: 0.4rem;
  padding-left: 0.4rem;
  padding: 0 2rem;
`;

export const EcardDescription = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  margin-bottom: 0.8rem;

  @media ${TABLET} {
    font-size: 0.9rem;
    line-height: 1.1;
  }
`;

export const EcardSubject = styled.span`
  font-weight: 600;
  color: rgba(140, 140, 140, 1);
`;

export const EcardStar = styled.span`
  color: #fbbe00;
`;

export const EcardScore = styled.span`
  color: rgba(140, 140, 140, 1);
  font-weight: 400;

  @media ${TABLET} {
    font-size: 0.9rem;
  }
`;

export const EcardFirstDescription = styled(EcardDescription)`
  @media ${TABLET} {
    font-size: 1rem;
  }
`;

export const EcardFirstSubject = styled(EcardSubject)`
  color: #000;

  @media ${TABLET} {
    font-size: 1rem;
  }
`;

export const EcardFirstScore = styled(EcardScore)`
  @media ${TABLET} {
    font-size: 1rem;
  }
`;

export const ContainerStackBtn = styled.div`
  background-color: rgba(246, 246, 246, 1);
  border-radius: 10px;
  padding: 0.75rem;
  width: 100%;

  @media ${TABLET} {
    padding: 0;
    padding-left: 1.75rem;
  }
`;

export const StackBtn = styled(FreelancerStackBtn)`
  background-color: rgba(60, 60, 60, 1);
  border-color: rgba(60, 60, 60, 1);
  border-width: 1px;
  font-size: 0.8rem;

  @media ${TABLET} {
    font-size: 0.85rem;
  }
`;

export const FontSmall = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
  margin-bottom: 0.5rem;

  @media ${TABLET} {
    font-size: 1.2rem;
  }
`;

export const FontLarge = styled.p`
  font-size: 1.3rem;
  font-weight: bold;

  @media ${TABLET} {
    font-size: 1.9rem;
  }
`;

export const EditButton = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  cursor: pointer;

  @media ${TABLET} {
    font-size: 1.4rem;
  }
`;
