import { Outlet } from 'react-router-dom';
import * as S from './style';

import GridBottom from 'components/Modal/GridBottom';
import LeftMenuMyBoard from 'components/Myboard/LeftMenu/Freelancer';

import Footer from 'layouts/Footer';
import Header from 'layouts/Header';

const MyBoardFreelancer = () => {
  return (
    <S.Container>
      <Header freelancerBoard />

      <LeftMenuMyBoard />
      <Footer toBottom />
      <GridBottom />
    </S.Container>
  );
};

export default MyBoardFreelancer;
