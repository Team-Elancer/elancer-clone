import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #252525;
  position: relative;
`;

export const ImgDiv = styled.div`
  width: 100%;
  max-width: 60rem;
  background-color: #252525;
  margin: 0 auto;
  border-radius: 0.7rem;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;
export const IntroImg = styled.div`
  background-color: #181818;
  padding: 2.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.7rem;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;

export const Img = styled.img`
  width: 16rem;
  padding: 2.5rem 0;
  @media ${TABLET} {
    width: 30rem;
  }
  @media ${LAPTOP} {
  }
`;

export const DetailDiv = styled.div`
  background-color: #202020;
  width: 100%;
  height: 100%;
  padding: 3rem 0;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;
export const SizeDiv = styled.div`
  width: 360px;
  margin: 0 auto;
  @media ${TABLET} {
    width: 730px;
  }
  @media ${LAPTOP} {
    width: 840px;
  }
`;
export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.content};
  padding: ${(props) => props.padding} 0;
  @media ${TABLET} {
    padding: ${(props) => props.tabletPadding} 0;
  }
  @media ${LAPTOP} {
  }
`;

export const TitleDiv = styled.div`
  width: 75%;
`;

export const H1 = styled.h1`
  color: white;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem;
  @media ${TABLET} {
    font-size: 2.5rem;
    line-height: 3rem;
  }
  @media ${LAPTOP} {
  }
`;
export const DdaySpan = styled.span`
  width: 55%;
  text-align: center;
  background-color: #3c3c3c;
  color: #ff6b6b;
  border: 1px solid #ff6b6b;
  border-radius: 0.3rem;
  padding: 0.7rem 0.9rem;
  @media ${TABLET} {
    width: 45%;
    font-size: 1.2rem;
    padding: 1rem 0.9rem;
  }
  @media ${LAPTOP} {
    width: 35%;
  }
`;
export const PayH1 = styled.h1`
  color: white;
  padding: 1rem 0;
  font-size: 1.5rem;
  @media ${TABLET} {
    padding: 2rem 0;
    font-size: 2.5rem;
  }
  @media ${LAPTOP} {
  }
`;

export const Colorspan = styled.span`
  background-color: ${(props) => props.color};
  padding: 0.4rem;
  border-radius: 0.3rem;
  font-weight: 600;
  margin: 0 0.3rem 0.7rem 0;
  display: ${(props) => props.display};
  @media ${TABLET} {
    font-size: 1.2rem;
    padding: 0.6rem;
    margin: 0 0.5rem 0.9rem 0;
  }
  @media ${LAPTOP} {
  }
`;

export const ProjectTitle = styled.div`
  color: white;
  margin-top: 3rem;
  font-size: 0.95rem;
  font-weight: 800;
  word-spacing: -0.1rem;
  @media ${TABLET} {
    font-size: 1.5rem;
  }
  @media ${LAPTOP} {
  }
`;

export const ProjectContents = styled.div`
  padding: 1rem 0;
  color: #b7b7b7;
  font-size: 0.85rem;
  font-weight: 800;
  line-height: 1.2rem;
  @media ${TABLET} {
    font-size: 1.1rem;
    line-height: 1.5rem;
  }
  @media ${LAPTOP} {
  }
`;

export const FreelancerUl = styled.ul`
  padding: 1rem 0;
  color: white;
  font-size: 1rem;
  font-weight: 800;
  display: flex;
  align-items: center;
`;
export const FreelancerLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background-color: #9d7985;
  font-weight: 800;
  border-radius: 50%;
  font-size: 1.2rem;
  margin-top: 0.5rem;
  overflow: hidden;
  @media ${TABLET} {
    width: 6rem;
    height: 6rem;
    font-size: 1.6rem;
    margin-top: 0.7rem;
  }
  @media ${LAPTOP} {
    font-size: 1rem;
  }
`;
export const ProfileDiv = styled.div`
  width: 3rem;
  height: 3rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${TABLET} {
    width: 4rem;
    height: 4rem;
  }
  @media ${LAPTOP} {
  }
`;
export const ProfileImg = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 70%;
  @media ${TABLET} {
    width: 4rem;
    width: 4rem;
  }
  @media ${LAPTOP} {
    width: 5rem;
    height: 5rem;
  }
`;
export const SpanButton = styled.span`
  background-color: #3c3c3c;
  color: white;
  border: 1px solid white;
  border-radius: 0.3rem;
  padding: 0.7rem 1.5rem;
  font-weight: 600;
  margin-right: ${(props) => props.right};
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;
