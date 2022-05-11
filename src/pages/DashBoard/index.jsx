import { Outlet } from 'react-router-dom';
import * as S from './style';
import GridBottom from 'components/Modal/GridBottom';
import LeftMenu from 'components/Myboard/LeftMenu';
import Footer from 'layouts/Footer';
import CompanyHeader from 'layouts/Header/Company';

const Dashboard = () => {
  return (
    <S.Container>
      <CompanyHeader width="1224px" />
      <S.SizeDiv>
        <S.FlexDiv>
          <LeftMenu />
          <S.BoardDiv>
            <Outlet />
          </S.BoardDiv>
        </S.FlexDiv>
      </S.SizeDiv>
      <Footer toBottom />
      <GridBottom />
    </S.Container>
  );
};

export default Dashboard;
