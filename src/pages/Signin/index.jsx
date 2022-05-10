import { Outlet } from 'react-router-dom';
import * as S from './style';
import GridBottom from 'components/Modal/GridBottom';
import Footer from 'layouts/Footer';
import Header from 'layouts/Header';

const Signin = () => {
  return (
    <S.Container>
      <Header />
      <S.SizeDiv>
        <Outlet />
      </S.SizeDiv>
      <Footer />
      <GridBottom />
    </S.Container>
  );
};

export default Signin;
