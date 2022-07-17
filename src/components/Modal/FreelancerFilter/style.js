import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Wrapper = styled.div`
  max-width: 380px;
  height: 530px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 0.8rem;
  position: fixed;
  z-index: 999;
  margin: auto 0;
  border-radius: 2rem;
  color: black;
  top: 50%;

  @media ${TABLET} {
    min-width: 580px;
    max-width: 600px;
    left: 6rem;
    height: 560px;
    top: 15rem;
  }

  @media ${LAPTOP} {
    min-width: 660px;
    max-width: 680px;
    left: 19rem;
    top: 15rem;
  }
`;

export const WrapperContainer = styled.div`
  @media ${TABLET} {
    padding: 1.5rem;
  }
`;

export const FlexDiv = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: ${(props) => props.center};
  align-items: center;
  width: 100%;

  @media ${TABLET} {
    padding: 0 1rem;
  }
  @media ${LAPTOP} {
    padding: 0 2.5rem;
  }
`;

export const FlexnoPadding = styled.div`
  display: flex;
  align-items: center;
`;

export const CancelButton = styled.span`
  width: 2rem;
  font-size: 1.3rem;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: 0.8rem;
  font-weight: 800;

  @media ${TABLET} {
    font-size: 1.2rem;
  }
  @media ${LAPTOP} {
    font-size: 1.3rem;
  }
`;

export const WrapperContent = styled.div`
  min-width: 300px;
  max-width: 330px;
  height: 300px;
  margin: 0 auto;
  border-top: solid 2px #c4c4c4;
  border-bottom: solid 2px #c4c4c4;
  margin-top: 1rem;
  overflow-y: auto;

  @media ${TABLET} {
    min-width: 500px;
    max-width: 530px;
    height: 380px;
  }
`;

export const ContainerContent = styled.div`
  padding: 1rem 0.8rem;
  border-bottom: solid 1px #c4c4c4;
  @media ${TABLET} {
    padding: 1.5rem 0.8rem;
  }
  @media ${LAPTOP} {
    padding: 1.5rem 0.5rem;
  }
`;

// ======== submit button ========
export const ButtonSubmitContainer = styled.div`
  padding-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: end;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    margin-right: 2.5rem;
  }
`;

export const ButtonContainer = styled.div`
  user-select: none;
  cursor: pointer;
  width: 100px;
  height: 40px;
  border: solid 2px #d7d7d7;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.5rem;
  font-size: 0.75rem;
  font-weight: 800;
  @media ${TABLET} {
    width: 150px;
    height: 50px;
    font-size: 1rem;
  }
`;
