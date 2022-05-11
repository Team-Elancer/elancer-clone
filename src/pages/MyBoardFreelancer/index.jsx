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
      <S.SizeDiv>
        <S.FlexDiv>
          <LeftMenuMyBoard />
          <S.BoardDiv>
            <Outlet />
          </S.BoardDiv>
        </S.FlexDiv>
      </S.SizeDiv>
      <Footer />
      <GridBottom />
    </S.Container>
  );
};

export default MyBoardFreelancer;
