import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const FrameSummary = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  width: 100%;
  gap: 1rem;
`;

export const ContainerSummary = styled.div`
  border-radius: 10px;
  background: gray;
  color: white;
  padding: 1.25rem;
  width: 18.75rem;
  gap: 1rem;
  width: 254px;
  height: 174px;
`;

export const SummarySubject = styled.span`
  background-color: black;
  color: rgba(255, 255, 255, 1);
  font-size: 0.9rem;
  text-align: center;
  margin: 1px;
  border-radius: 5px;
  font-weight: 400;
  font-size: 0.625rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  display: inline-block;
`;

export const SummaryContent = styled.span`
  font-size: 1.125rem;
  display: block;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const ContentExtra = styled.p`
  color: rgba(165, 165, 165, 1);
  font-size: 0.8rem;
`;
