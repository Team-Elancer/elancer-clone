import styled from 'styled-components';
import { TABLET } from 'utils/constants/responsive';

export const ContainerEcardInfoOption = styled.div`
  display: flex;
  gap: 1.2rem;
  border-bottom: 1px solid rgba(230, 230, 230, 1);
`;

export const EcardInfo = styled.div`
  border-bottom: ${(props) => props.active && `0.3rem solid rgba(241, 99, 0, 1)`};
  color: ${(props) => props.active && `rgba(241, 99, 0, 1)`};
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 700;
  padding-bottom: 0.5rem;

  &:hover {
    border-bottom: ${(props) => !props.active && `0.3rem solid rgba(230, 230, 230, 1)`};
  }

  @media ${TABLET} {
    font-size: 1.75rem;
  }
`;

export const ContainerEcardProject = styled.div`
  width: 100%;
`;

export const EcardProject = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid rgba(230, 230, 230, 1);
`;

export const EcardProjectIndustry = styled.p`
  font-size: 0.75rem;
  font-weight: 550;
  color: rgba(121, 121, 121, 1);

  @media ${TABLET} {
    font-size: 1rem;
  }
`;

export const EcardProjectTitle = styled.p`
  font-weight: 600;
  font-size: 0.9375rem;
  margin-bottom: 0.5rem;
  margin-top: 0.625rem;

  @media ${TABLET} {
    font-size: 1.563rem;
    line-height: 2.188rem;
  }
`;

export const EcardProjectContent = styled.p`
  font-size: 0.8125rem;
  line-height: 1.625;
  font-weight: 550;

  @media ${TABLET} {
    font-size: 1rem;
  }
`;

export const ContainerStacks = styled.div`
  padding: 0.375rem 0;

  @media ${TABLET} {
    padding-bottom: 0.75rem;
    padding-top: 0.75rem;
  }
`;

export const LanguageStackBtn = styled.span`
  background-color: rgba(255, 107, 107, 1);
  border-color: rgba(255, 107, 107, 1);
  border-width: 1px;
  color: rgba(255, 255, 255, 1);
  display: inline-block;
  text-align: center;
  margin: 2px;
  border-radius: 5px;
  font-weight: 400;
  font-size: 0.625rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.4rem;
  padding-right: 0.4rem;

  @media ${TABLET} {
    font-size: 0.8rem;
    padding-top: 0.35rem;
    padding-bottom: 0.35rem;
    padding-left: 0.42rem;
    padding-right: 0.42rem;
  }
`;

export const ProjectDuration = styled.div`
  font-size: 0.8125rem;
  font-weight: 550;

  @media ${TABLET} {
    font-size: 1rem;
  }
`;

export const ContainerEcardResume = styled.div`
  width: 100%;
  padding: 1rem 0;
  line-height: 2;
`;
export const EcardResume = styled.div`
  width: 100%;
`;

export const EcardResumeWork = styled.div`
  font-size: 0.95rem;
  font-weight: 700;
`;

export const ContainerWorkDetail = styled.div`
  display: flex;
  flex-direction: column;

  @media ${TABLET} {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const WorkTime = styled.span`
  font-size: 0.75rem;
  width: 15rem;

  @media ${TABLET} {
    font-size: 0.938rem;
  }
`;

export const WorkName = styled.span`
  font-size: 0.938rem;

  @media ${TABLET} {
    font-size: 1.125rem;
  }
`;

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
