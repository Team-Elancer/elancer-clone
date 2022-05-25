import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const ContainerShareSM = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.3rem;
  margin-top: 3.5rem;
  margin-bottom: 7rem;

  @media ${TABLET} {
    margin-top: 10rem;
    margin-bottom: 15rem;
  }
`;

export const ShareSMButton = styled.span`
  background-color: rgba(60, 60, 60, 1);
  border-color: rgba(255, 255, 255, 1);
  border-width: 1px;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
  display: inline-block;
  text-align: center;
  margin: 1px;
  border-radius: 5px;
  font-weight: 400;
  font-size: 0.625rem;
  width: 7.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  @media ${TABLET} {
    font-size: 1.25rem;
    width: 11rem;
    padding-top: 0.875rem;
    padding-bottom: 0.875rem;
  }
`;
