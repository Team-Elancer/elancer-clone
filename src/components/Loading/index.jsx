import React from 'react';

import PuffLoader from 'react-spinners/PuffLoader';

import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

const Loading = () => {
  return (
    <Container>
      <SpinerDiv>
        <PuffLoader color="#C63DEE" size={80} />
      </SpinerDiv>
      <SpinerDivSecond>
        <PuffLoader color="#C63DEE" size={160} />
      </SpinerDivSecond>
      <SpinerDivThird>
        <PuffLoader color="#50E3C2  " size={300} />
      </SpinerDivThird>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${TABLET} {
    height: 800px;
  }
  @media ${LAPTOP} {
  }
`;

const SpinerDiv = styled.div`
  position: relative;
  top: -10%;
  left: -10%;
  @media ${TABLET} {
    display: none;
  }
`;
const SpinerDivSecond = styled.div`
  display: none;
  position: relative;
  top: -15%;
  left: -10%;
  @media ${TABLET} {
    display: block;
  }
  @media ${LAPTOP} {
    display: none;
  }
`;

const SpinerDivThird = styled.div`
  display: none;
  position: relative;
  top: -20%;
  left: -10%;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    display: block;
  }
`;

export default Loading;
