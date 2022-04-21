import { Link } from 'react-router-dom';
import * as S from './style';

import Back from 'assets/images/arrowback.png';
import GridBottom from 'components/Modal/GridBottom';
import CompanyAccount from 'components/Myboard/Company-Account';
import LeftMenu from 'components/Myboard/LeftMenu';
import Footer from 'layouts/Footer';
import CompanyHeader from 'layouts/Header/Company';

const DashBoardAccount = () => {
  return (
    <S.Container>
      <CompanyHeader width="1224px" />
      <S.SizeDiv>
        <S.FlexDiv>
          <LeftMenu />
          <S.BoardDiv>
            <S.SpacebetweenDiv>
              <S.Img src={Back} alt="arrowback" />
              <S.H1>이랜서 계정</S.H1>
            </S.SpacebetweenDiv>
            <CompanyAccount />
          </S.BoardDiv>
        </S.FlexDiv>
      </S.SizeDiv>
      <Footer />
      <GridBottom />
    </S.Container>
  );
};

export default DashBoardAccount;
