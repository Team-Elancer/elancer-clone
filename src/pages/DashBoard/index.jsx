import { Link } from 'react-router-dom';
import * as S from './style';
import GridBottom from 'components/Modal/GridBottom';
import CompanyMyboard from 'components/Myboard/Comapany-Myboard';
import LeftMenu from 'components/Myboard/LeftMenu';
import Footer from 'layouts/Footer';
import CompanyHeader from 'layouts/Header/Company';

const DashBoard = () => {
  return (
    <S.Container>
      <CompanyHeader width="1224px" />
      <S.SizeDiv>
        <S.FlexDiv>
          <LeftMenu />
          <S.BoardDiv>
            <S.H1 top="2rem" bottom="4rem" laptoptop="2rem" laptopBottom="4rem">
              클론코딩님 이랜서가 응원해요
            </S.H1>
            <S.OverFlowDiv>
              <S.FlexDiv width="129%">
                <S.CardSpan bgcolor="#7485c9">헤드헌팅 0</S.CardSpan>
                <S.CardSpan bgcolor="#8a7fa4">지원 현황 0</S.CardSpan>
                <S.CardSpan bgcolor="#9f7985">인터뷰 요청 0</S.CardSpan>
                <S.CardSpan bgcolor="#b57360">조율중 0</S.CardSpan>
                <S.CardSpan bgcolor="#d56b2d">진행중 0</S.CardSpan>
                <S.CardSpan bgcolor="#f16300">완료 프로젝트 0</S.CardSpan>
              </S.FlexDiv>
            </S.OverFlowDiv>
            <S.H1 top="3rem" bottom="1rem" laptoptop="8rem" laptopBottom="2.5rem">
              클론코딩 마이보드
            </S.H1>
            <S.UlTag display="flex">
              <Link to="/">
                <S.LiTag>
                  <S.LiPtag>📍 프로필 관리 바로가기</S.LiPtag>
                  <CompanyMyboard />
                </S.LiTag>
              </Link>
              <Link to="/">
                <S.LiTag>
                  <S.LiPtag>🗓 프로젝트 관리 바로가기</S.LiPtag>
                </S.LiTag>
              </Link>
              <Link to="/">
                <S.LiTag>
                  <S.LiPtag>💡 인재 스크랩 바로가기</S.LiPtag>
                </S.LiTag>
              </Link>
              <Link to="/">
                <S.LiTag>
                  <S.LiPtag>☎️ 문의 / 요청 바로가기</S.LiPtag>
                </S.LiTag>
              </Link>
              <Link to="/">
                <S.LiTag>
                  <S.LiPtag>👤 이랜서 계정 바로가기</S.LiPtag>
                </S.LiTag>
              </Link>
            </S.UlTag>
          </S.BoardDiv>
        </S.FlexDiv>
      </S.SizeDiv>
      <Footer />
      <GridBottom />
    </S.Container>
  );
};

export default DashBoard;
