import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const H1 = styled.h1`
  font-size: 0.9rem;
  font-weight: 800;
  padding: ${(props) => props.top} 0 ${(props) => props.bottom} 0;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    font-size: 2.2rem;
    padding: ${(props) => props.laptoptop} 0 ${(props) => props.laptopBottom} 0;
  }
`;

export const MiddleDiv = styled.div`
  display: none;
  @media ${TABLET} {
    display: block;
  }
  @media ${LAPTOP} {
    width: 120px;
  }
`;

export const CardSpan = styled.span`
  color: white;
  font-weight: 800;
  padding: 0.7rem 0.6rem;
  background-color: ${(props) => props.bgcolor};
  margin-right: 0.5rem;
  border-radius: 0.3rem;
  text-align: center;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    font-size: ${(props) => props.textSize};
    padding: ${(props) => props.paddingHeight} ${(props) => props.paddingWidth};
    border-radius: ${(props) => props.radius};
    margin-right: 0.8rem;
  }
`;

export const UlTag = styled.ul`
  display: block;
  @media ${TABLET} {
    display: ${(props) => props.display};
    align-items: center;
    justify-content: start;
    flex-wrap: wrap;
  }
  @media ${LAPTOP} {
  }
`;
export const MenuLi = styled.li`
  font-size: 1.3rem;
  font-weight: 600;
  padding: 1rem 1rem;
  border-radius: 0.6rem;
  margin-bottom: 0.2rem;
  &:hover {
    background-color: #f2f2f2;
  }
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;

export const LiTag = styled.li`
  margin: 0 1rem 0.4rem 0;
`;
export const LiPtag = styled.p`
  font-size: 0.8rem;
  font-weight: 800;
  background-color: #e1e1e1;
  padding: 0.8rem 0.6rem;
  border-radius: 0.4rem;
  @media ${TABLET} {
    width: 25rem;
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  @media ${LAPTOP} {
    width: 25rem;
  }
`;
export const EcardDiv = styled.div`
  display: none;
  @media ${TABLET} {
    width: 100%;
    height: 100%;
    display: block;
    background-color: #f2f2f2;
    border-bottom-left-radius: 0.4rem;
    border-bottom-right-radius: 0.4rem;
  }
  @media ${LAPTOP} {
  }
`;
export const EcarcdPaddingDiv = styled.div`
  @media ${TABLET} {
    display: ${(props) => props.display};
    align-items: center;
    padding: 1.5rem 1.5rem;
    margin: 0 auto;
  }
  @media ${LAPTOP} {
  }
`;

export const ProjectDiv = styled.div`
  width: 100%;
  height: 100%;
  margin-top: ${(props) => props.top};
`;

export const ProfileGo = styled.p`
  display: block;
  margin-bottom: 1.2rem;
`;

export const ProfileAccountSpan = styled.span`
  background-color: ${(props) => (props.first ? 'rgba(255, 107, 107, 1)' : 'rgba(255, 255, 255, 1)')};
  color: ${(props) => (props.first ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)')};
  font-size: 0.8125rem;
  text-align: center;
  margin: 1px;
  border-radius: 5px;
  font-weight: 400;
  font-size: 0.625rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
`;

export const ContactContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem 1rem;
`;

export const ContactText = styled.p`
  padding: 0.3rem;
  font-size: 0.8rem;
`;

export const ContactColorBox = styled.div`
  font-size: 0.7rem;
  font-weight: 800;
  padding: 0.3rem 0.3rem;
  border-radius: 0.5rem;
`;

export const ProfileImgDiv = styled.div`
  position: relative;
  display: none;

  @media ${TABLET} {
    display: block;

    border: 5px solid #eb6100;
    border-radius: 50%;
    z-index: 99;
    height: 6rem;
    width: 6rem;
    margin: auto;
    cursor: pointer;
  }
`;
export const ProfileImg = styled.img`
  position: relative;
  pointer-events: none;
  max-height: 5rem;
  min-width: 5rem;
  max-width: 5rem;
  min-height: 100%;
  border-radius: 50%;
  left: 0.2rem;
  margin-bottom: 1.5rem;
`;
export const BallDiv = styled.div`
  width: 22px;
  height: 22px;
  background-color: #eb6100;
  border-radius: 50%;
  position: absolute;
  top: 3.7rem;
  left: 4rem;
`;
