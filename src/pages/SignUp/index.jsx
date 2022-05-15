import { Outlet } from 'react-router-dom';
import * as S from './style';
import GridBottom from 'components/Modal/GridBottom';
import Footer from 'layouts/Footer';
import Header from 'layouts/Header';

const SignUp = () => {
  return (
    <S.Container>
      <Header />
      <S.SizeDiv>
        <Outlet />
      </S.SizeDiv>
      <Footer toBottom="static" />
      <GridBottom />
    </S.Container>
  );
};

export default SignUp;
