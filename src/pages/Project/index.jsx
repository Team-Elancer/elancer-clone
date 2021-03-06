import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Logo from 'assets/images/logo_white.png';

import GridBottom from 'components/Modal/GridBottom';
import Footer from 'layouts/Footer';
import Header from 'layouts/Header';

import { TABLET, LAPTOP } from 'utils/constants/responsive';

const Project = () => {
  return (
    <Container>
      <Header margin="0" bgColor="#252525" color="white" width="840px" logo={Logo} />
      <Outlet />
      <Footer />
      <GridBottom />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: -0.6rem;
  @media ${TABLET} {
    width: 109.5%;
  }
  @media ${LAPTOP} {
    width: 100%;
  }
`;

export default Project;
