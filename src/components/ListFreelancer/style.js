import styled from 'styled-components';
import { TABLET } from 'utils/constants/responsive';

export const FrameFreelancer = styled.div``;

export const ContainerFreelancer = styled.div`
  padding-top: 16px;
`;

export const ContainerSwiper = styled.div`
  background-color: rgba(116, 133, 201, 1);
  border-radius: 10px;
  color: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  font-weight: 700;
  font-size: 0.9375rem;
  line-height: 1.438rem;
  height: 224px;

  margin-bottom: 20px;
`;

export const PersonFlexCenter = styled.div`
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 230px;
  text-shadow: 1px 1px 10px black;
`;

export const ContainerExperience = styled.div``;

export const FreelancerName = styled.h1`
  font-size: 0.75rem;
  font-weight: 600;
`;

export const FreelancerTitle = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  margin-top: 0.375rem;
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
`;

export const FreelancerDescription = styled.p`
  font-size: 0.75rem;
  line-height: 1.063rem;
  margin-top: 0.375rem;
  margin-bottom: 0.375rem;
  color: rgba(140, 140, 140, 1);
`;
