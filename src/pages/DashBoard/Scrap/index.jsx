import { Link } from 'react-router-dom';
import * as S from './style';

import GridBottom from 'components/Modal/GridBottom';
import LeftMenu from 'components/Myboard/LeftMenu';
import Footer from 'layouts/Footer';
import CompanyHeader from 'layouts/Header/Company';

const DashBoardScrap = () => {
  return (
    <S.Container>
      <CompanyHeader width="1224px" />
      <S.SizeDiv>
        <S.FlexDiv>
          <LeftMenu />
          <S.BoardDiv>
            <S.H1>인재 스크랩 (0)</S.H1>
          </S.BoardDiv>
        </S.FlexDiv>
      </S.SizeDiv>
      <Footer />
      <GridBottom />
    </S.Container>
  );
};

export default DashBoardScrap;
