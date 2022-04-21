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
              <S.H1>프로필관리</S.H1>
              <Link to="/">
                <S.LinkP>수정</S.LinkP>
              </Link>
            </S.SpacebetweenDiv>
            <S.FlexDiv display="block">
              <S.EcardSize>
                <CompanyMyboard EcardDiv="block" topleft="0.6rem" bottomleft="0.6rem" right="0" />
              </S.EcardSize>
              <S.EcardSize>
                <S.LineDiv />
                <S.EcardDiv>
                  <S.EcarcdPaddingDiv height="1.5rem">
                    <S.PTag>
                      기업형태
                      <S.SpanTag textSize="0.8rem">중소기업</S.SpanTag>
                    </S.PTag>
                    <S.PTag top="1rem">
                      연간매출액
                      <S.SpanTag textSize="0.9rem">-</S.SpanTag>
                    </S.PTag>
                    <S.PTag top="1rem">
                      사업자등록번호
                      <S.SpanTag textSize="0.95rem">0000000000</S.SpanTag>
                    </S.PTag>
                  </S.EcarcdPaddingDiv>
                </S.EcardDiv>
              </S.EcardSize>
            </S.FlexDiv>
            <S.H1 top="2rem" laptoptop="2rem" laptopBottom="4rem">
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
