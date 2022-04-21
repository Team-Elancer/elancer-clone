import { Link } from 'react-router-dom';
import * as S from './style';

import GridBottom from 'components/Modal/GridBottom';
import LeftMenu from 'components/Myboard/LeftMenu';
import MyBoardProject from 'components/Myboard/Project';
import Footer from 'layouts/Footer';
import CompanyHeader from 'layouts/Header/Company';

const DashBoardProject = () => {
  return (
    <S.Container>
      <CompanyHeader width="1224px" />
      <S.SizeDiv>
        <S.FlexDiv>
          <LeftMenu />
          <S.BoardDiv>
            <S.SpacebetweenDiv>
              <S.H1>프로젝트 관리</S.H1>
              <Link to="/">
                <S.LinkP>프로젝트 등록</S.LinkP>
              </Link>
            </S.SpacebetweenDiv>
            <MyBoardProject />
            <S.H1 top="4rem" laptoptop="4rem">
              헤드헌팅 리스트 (0)
            </S.H1>
          </S.BoardDiv>
        </S.FlexDiv>
      </S.SizeDiv>
      <Footer />
      <GridBottom />
    </S.Container>
  );
};

export default DashBoardProject;
