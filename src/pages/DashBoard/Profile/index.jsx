import { Link } from 'react-router-dom';
import * as S from './style';
import GridBottom from 'components/Modal/GridBottom';
import CompanyMyboard from 'components/Myboard/Comapany-Myboard';
import LeftMenu from 'components/Myboard/LeftMenu';
import Footer from 'layouts/Footer';
import CompanyHeader from 'layouts/Header/Company';

const DashBoardProfile = () => {
  return (
    <S.Container>
      <CompanyHeader width="1224px" />
      <S.SizeDiv>
        <S.FlexDiv>
          <LeftMenu />
          <S.BoardDiv>
            <S.SpacebetweenDiv>
              <S.H1 top="2rem" bottom="4rem" laptoptop="2rem" laptopBottom="4rem">
                프로필관리
              </S.H1>
              <S.LinkP>수정</S.LinkP>
            </S.SpacebetweenDiv>
            <S.FlexDiv>
              <S.EcardSize>
                <CompanyMyboard topleft="0.6rem" bottomleft="0.6rem" right="0" />
              </S.EcardSize>
              <S.EcardSize>
                <CompanyMyboard />
              </S.EcardSize>
            </S.FlexDiv>
            <S.H1 top="2rem" bottom="4rem" laptoptop="2rem" laptopBottom="4rem">
              프로젝트 리스트 (0)
            </S.H1>
          </S.BoardDiv>
        </S.FlexDiv>
      </S.SizeDiv>
      <Footer />
      <GridBottom />
    </S.Container>
  );
};

export default DashBoardProfile;
