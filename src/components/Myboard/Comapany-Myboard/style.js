import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const EcardDiv = styled.div`
  display: none;
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
  @media ${TABLET} {
    display: ${(props) => props.display};
    align-items: center;
    padding: 1.5rem 1.5rem;
    margin: 0 auto;
  }
  @media ${LAPTOP} {
  }
`;
export const ImageDiv = styled.div`
  @media ${TABLET} {
    width: 125px;
    height: 125px;
    background-color: white;
    border-radius: 0.8rem;
    text-align: center;
    margin-top: -2.1rem;
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
  font-size: 1rem;
  font-weight: 800;
  padding: 0.5rem 0 1rem 0;
`;
export const RatingDiv = styled.div`
  padding-left: 0.8rem;
`;
export const Ratingspan = styled.span`
  font-size: 0.95rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: start;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #8c8c8c;
  text-align: center;
  margin-top: 0.5rem;
`;
export const RatingNumberP = styled.p`
  padding-left: ${(props) => props.left};
  color: #8c8c8c;
  font-size: ${(props) => props.size};
  font-weight: 400;
`;
export const StarIcon = styled.span`
  color: ${(props) => props.color};
`;
export const RatingSmallspan = styled.span`
  font-size: 0.85rem;
  font-weight: 800;
  color: #8c8c8c;
  display: flex;
  align-items: center;
  justify-content: start;
  padding-top: 0.8rem;
`;
