import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const EcardDiv = styled.div`
  display: ${(props) => props.display};
  padding: 1rem 0 0.5rem 0;
  @media ${TABLET} {
    width: 100%;
    height: 100%;
    display: block;
    background-color: #f2f2f2;
    border-top-left-radius: ${(props) => props.topleft};
    border-bottom-left-radius: ${(props) => props.bottomleft};
    border-bottom-right-radius: ${(props) => props.right};
  }
  @media ${LAPTOP} {
  }
`;
export const EcarcdPaddingDiv = styled.div`
  display: ${(props) => props.display};
  align-items: center;
  margin: 0 auto;
  @media ${TABLET} {
    padding: ${(props) => props.height} 1.5rem;
  }
  @media ${LAPTOP} {
  }
`;
export const ImageDiv = styled.div`
  width: 112px;
  height: 112px;
  background-color: #f2f2f2;
  border-radius: 0.8rem;
  text-align: center;
  margin-top: -2.5rem;
  @media ${TABLET} {
    width: 125px;
    height: 125px;
    margin-top: -2.1rem;
    background-color: white;
  }
  @media ${LAPTOP} {
  }
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  padding: 0.5rem 0.5rem;
`;
export const NameP = styled.p`
  font-size: 0.8rem;
  font-weight: 800;
  padding: 0.5rem 0 1rem 0;
  @media ${TABLET} {
    font-size: 1rem;
  }
  @media ${LAPTOP} {
  }
`;
export const RatingDiv = styled.div`
  padding-left: 0.8rem;
`;
export const Ratingspan = styled.span`
  font-size: 0.75rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: start;
  padding-bottom: 0.5rem;
  border-bottom: 0.5px solid #8c8c8c;
  margin-top: 0.5rem;
  @media ${TABLET} {
    font-size: 0.95rem;
    font-weight: 800;
    border-bottom: 1px solid #8c8c8c;
  }
  @media ${LAPTOP} {
  }
`;
export const RatingNumberP = styled.p`
  padding-left: ${(props) => props.mobileleft};
  color: #8c8c8c;
  font-size: ${(props) => props.mobilesize};
  font-weight: 600;
  @media ${TABLET} {
    padding-left: ${(props) => props.left};
    color: #8c8c8c;
    font-size: ${(props) => props.size};
    font-weight: 400;
  }
  @media ${LAPTOP} {
  }
`;
export const StarIcon = styled.span`
  color: ${(props) => props.color};
`;
export const RatingSmallspan = styled.span`
  font-size: 0.75rem;
  font-weight: 800;
  color: #8c8c8c;
  display: flex;
  align-items: center;
  justify-content: start;
  padding-top: 0.8rem;
  @media ${TABLET} {
    font-size: 0.85rem;
  }
  @media ${LAPTOP} {
  }
`;
