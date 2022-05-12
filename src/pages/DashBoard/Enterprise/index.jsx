import { Link } from 'react-router-dom';
import * as S from './style';
import CompanyDashBoard from 'components/DashBoard/Comapany-Myboard';
import MyBoardProject from 'components/Myboard/CardSpan';

const DashBoardEnterprise = () => {
  return (
    <>
      <S.H1 top="2rem" bottom="4rem" laptoptop="2rem" laptopBottom="4rem">
        클론코딩님 이랜서가 응원해요
      </S.H1>
      <MyBoardProject />
      <S.H1 top="3rem" bottom="1rem" laptoptop="8rem" laptopBottom="2.5rem">
        클론코딩 마이보드
      </S.H1>
      <S.UlTag display="flex">
        <S.LiTag>
          <Link to="/dashboard/profile">
            <S.LiPtag>📍 프로필 관리 바로가기</S.LiPtag>
          </Link>
          <CompanyDashBoard />
        </S.LiTag>
        <S.LiTag>
          <Link to="/dashboard/project">
            <S.LiPtag>🗓 프로젝트 관리 바로가기</S.LiPtag>
          </Link>
          <S.EcardDiv>
            <S.EcarcdPaddingDiv>
              <S.ProjectDiv top="1rem">
                <S.CardSpan
                  textSize="1rem"
                  paddingHeight="0.5rem"
                  paddingWidth="0.6rem"
                  bgcolor="#7485c9"
                  radiud="0.4rem"
                >
                  헤드헌팅 0
                </S.CardSpan>
              </S.ProjectDiv>
              <S.ProjectDiv top="2rem">
                <S.CardSpan
                  textSize="1rem"
                  paddingHeight="0.5rem"
                  paddingWidth="0.6rem"
                  bgcolor="#8a7fa4"
                  radiud="0.4rem"
                >
                  지원 현황 0
                </S.CardSpan>
              </S.ProjectDiv>
              <S.ProjectDiv top="2rem">
                <S.CardSpan
                  textSize="1rem"
                  paddingHeight="0.5rem"
                  paddingWidth="0.6rem"
                  bgcolor="#9f7985"
                  radiud="0.4rem"
                >
                  인터뷰 요청 0
                </S.CardSpan>
              </S.ProjectDiv>
              <S.ProjectDiv top="2rem">
                <S.CardSpan
                  textSize="1rem"
                  paddingHeight="0.5rem"
                  paddingWidth="0.6rem"
                  bgcolor="#d56b2d"
                  radiud="0.4rem"
                >
                  진행중 프로젝트 0
                </S.CardSpan>
              </S.ProjectDiv>
            </S.EcarcdPaddingDiv>
          </S.EcardDiv>
        </S.LiTag>
        <S.LiTag>
          <Link to="/dashboard/scrap">
            <S.LiPtag>💡 인재 스크랩 바로가기</S.LiPtag>
          </Link>
          <S.EcardDiv>
            <S.EcarcdPaddingDiv>
              <h1> </h1>
            </S.EcarcdPaddingDiv>
          </S.EcardDiv>
        </S.LiTag>
        <S.LiTag>
          <Link to="/dashboard/contact">
            <S.LiPtag>☎️ 문의 / 요청 바로가기</S.LiPtag>
          </Link>
          <S.EcardDiv>
            <S.EcarcdPaddingDiv>
              <h1> </h1>
            </S.EcarcdPaddingDiv>
          </S.EcardDiv>
        </S.LiTag>
        <S.LiTag>
          <Link to="/dashboard/account">
            <S.LiPtag>👤 이랜서 계정 바로가기</S.LiPtag>
          </Link>
          <S.EcardDiv>
            <S.EcarcdPaddingDiv>
              <Link to="/dashboard/account">
                <S.ProfileGo>이랜서 계정 수정 </S.ProfileGo>
              </Link>
            </S.EcarcdPaddingDiv>
          </S.EcardDiv>
        </S.LiTag>
      </S.UlTag>
    </>
  );
};

export default DashBoardEnterprise;
