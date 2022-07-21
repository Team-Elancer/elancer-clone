import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TABLET } from 'utils/constants/responsive';

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
    padding: 28px;
    margin: auto;
  }
`;

export const FrameFreelancer = styled.div``;

export const ContainerFreelancer = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
  border-top: 1px solid rgba(215, 215, 215, 1);
  user-select: none;

  @media ${TABLET} {
    display: flex;
  }
`;

export const ContainerLink = styled(Link)`
  @media ${TABLET} {
    display: flex;
    user-select: none;
    width: 100%;
    gap: 1.25rem;
  }
`;

export const ContainerSwiper = styled.div`
  /* background-color: rgba(116, 133, 201, 1); */
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

  border-radius: 10px;
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

  @media ${TABLET} {
    width: 336px;
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

export const ContainerExperience = styled.div`
  width: 100%;
  @media ${TABLET} {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
`;

export const ContainerNameHeart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const FreelancerHeart = styled.div`
  font-size: 1rem;
  font-weight: 300;
  padding: 0.375rem;
  width: 2.25rem;
  height: 2.25rem;
  background-color: rgba(245, 245, 245, 1);
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
  color: ${(wishState) => wishState && 'red'};
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${TABLET} {
    font-size: 1.3rem;
  }
`;

export const FreelancerName = styled.h1`
  font-size: 0.8rem;
  font-weight: 600;

  @media ${TABLET} {
    font-size: 1rem;
    font-weight: 600;
  }
`;

export const FreelancerTitle = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  margin-top: 0.8rem;

  @media ${TABLET} {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

export const ContainerFreelancerStack = styled.div`
  /* display: flex; */
`;

export const FreelancerStack = styled.span`
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
  }
`;

export const FreelancerDescription = styled.p`
  display: inline-block;
  margin-right: 0.4rem;
  font-size: 0.75rem;
  line-height: 1.063rem;
  margin-top: 0.375rem;
  margin-bottom: 0.375rem;
  color: rgba(140, 140, 140, 1);

  @media ${TABLET} {
    font-size: 1rem;
    line-height: 1.6rem;
    font-weight: bold;
  }
`;

export const FreelancerReview = styled.div`
  font-weight: bold;
  font-size: 0.75rem;

  @media ${TABLET} {
    font-size: 1.1rem;
  }
`;

export const ReviewRate = styled.span``;
export const ReviewTotal = styled.span`
  color: rgba(140, 140, 140, 1);
  font-weight: bold;
`;
