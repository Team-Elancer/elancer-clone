import styled from 'styled-components';
import { TABLET } from 'utils/constants/responsive';

export const ContainerFrame = styled.div`
  background: ${({ dark }) => dark && 'rgba(32, 32, 32, 1)'};
  color: ${({ dark }) => dark && 'rgba(255, 255, 255, 1)'};
  width: 100%;
  height: 100%;
`;

export const Main = styled.div`
  @media ${TABLET} {
    width: 832px;
    margin: auto;
    padding: 2rem;
  }
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
  background-color: rgba(24, 24, 24, 1);
  border: 2px solid rgba(24, 24, 24, 1);

  color: rgba(255, 255, 255, 1);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  font-weight: 700;
  font-size: 0.9375rem;
  line-height: 1.438rem;
  margin-bottom: 20px;
  padding: 2.5rem 0;

  @media ${TABLET} {
    border-radius: 10px;
    margin: 3rem 0;
    padding: 2rem 0;
  }
`;

export const ContainerTitleImg = styled.img`
  width: 16rem;
  margin: 2.5rem auto;
`;

export const ContainerDetail = styled.div`
  width: 100%;
`;

export const DetailDeadline = styled.div`
  background-color: rgba(60, 60, 60, 1);
  border: 1px solid rgba(255, 107, 107, 1);
  color: rgba(255, 107, 107, 1);
  display: inline-block;
  text-align: center;
  margin: 1px;
  border-radius: 5px;
  font-weight: 400;
  font-size: 0.625rem;
  width: 7.5rem;
  padding: 0.7rem 0;
`;

export const DetailSubject = styled.div`
  font-size: 1.25rem;
  margin: 1rem 0;
`;

export const ContainerDetailPay = styled.div`
  display: flex;
  gap: 1rem;
`;

export const DetailPay = styled.div`
  font-family: 'Futura', sans-serif;
  font-weight: 400;
  font-size: 1.438rem;
  margin-bottom: 0.5rem;
  letter-spacing: 0;
`;

export const DetailDailyPay = styled.div`
  color: rgba(158, 158, 158, 1);
  font-size: 0.75rem;
  line-height: 2.5;
  letter-spacing: 0;
`;

export const ContainerStackBtn = styled.div`
  display: flex;
  margin: 0.5rem 0;
`;

export const StackBtn = styled.span`
  background-color: rgba(255, 107, 107, 1);
  border-color: rgba(255, 107, 107, 1);
  border-width: 1px;
  color: rgba(255, 255, 255, 1);
  display: inline-block;
  text-align: center;
  margin: 0.2rem;
  border-radius: 5px;
  font-weight: 400;
  font-size: 0.8rem;
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

export const ContainerProject = styled.div`
  width: 100%;
`;

export const ProjectSubject = styled.h1`
  color: rgba(255, 255, 255, 1);
  margin-top: 3.5rem;
  margin-bottom: 0.625rem;
  font-size: 0.875rem;
`;

export const ProjectContent = styled.div`
  font-size: 0.8125rem;
  color: rgba(183, 183, 183, 1);
  line-height: 1.625;

  margin-bottom: 0.625rem;
`;

export const ContainerShareSM = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.3rem;
  margin-top: 3.5rem;
  padding-bottom: 6rem;

  @media ${TABLET} {
    margin-top: 10rem;
    margin-bottom: 12rem;
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
