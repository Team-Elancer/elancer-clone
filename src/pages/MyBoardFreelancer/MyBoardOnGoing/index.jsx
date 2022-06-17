import { Link } from 'react-router-dom';
import * as S from './style';

import OnGoingCard from 'components/Card/OnGoingCard';
import CompanyDashBoard from 'components/DashBoard/Comapany-Myboard';
import BoardCardSpan from 'components/Myboard/CardSpan';

const MyBoardOnGoing = () => {
  return (
    <>
      <S.H1 top="2rem" bottom="4rem" laptoptop="2rem" laptopBottom="4rem">
        KH님 이랜서가 응원해요
      </S.H1>
      <BoardCardSpan />
      <OnGoingCard />
      <S.H1 top="3rem" bottom="1rem" laptoptop="8rem" laptopBottom="2.5rem">
        KH 마이보드
      </S.H1>
      <S.UlTag display="flex">
        <S.LiTag>
          <Link to="/myboard-freelancer/profile">
            <S.LiPtag>📍 프로필 관리 바로가기</S.LiPtag>
          </Link>
          <CompanyDashBoard />
        </S.LiTag>
        <S.LiTag>
          <Link to="/myboard-freelancer/project">
            <S.LiPtag>🗓 수주 관리 바로가기</S.LiPtag>
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
                  지원 현황 0
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
                  인터뷰 요청 1
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
                  낙찰 프로젝트 0
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
                  찜 프로젝트 0
                </S.CardSpan>
              </S.ProjectDiv>
            </S.EcarcdPaddingDiv>
          </S.EcardDiv>
        </S.LiTag>
        <S.LiTag>
          <Link to="/myboard-freelancer/career">
            <S.LiPtag>💡 커리어 관리 바로가기</S.LiPtag>
          </Link>
          <S.EcardDiv>
            <S.EcarcdPaddingDiv>
              <h1>
                이랜서의 AutoFolio 기술은 <br />
                프리랜서가 쉽게 커리어를 등록하고 <br />
                더욱 빠르게 공유할 수 있도록 돕습니다.
              </h1>
            </S.EcarcdPaddingDiv>
          </S.EcardDiv>
        </S.LiTag>
        <S.LiTag>
          <Link to="/myboard-freelancer/conta">
            <S.LiPtag>☎️ 문의 / 요청 바로가기</S.LiPtag>
          </Link>
          <S.EcardDiv>
            <S.EcarcdPaddingDiv />
          </S.EcardDiv>
        </S.LiTag>
        <S.LiTag>
          <Link to="/myboard-freelancer/account">
            <S.LiPtag>👤 이랜서 계정 바로가기</S.LiPtag>
          </Link>
          <S.EcardDiv>
            <S.EcarcdPaddingDiv>
              <Link to="/myboard-freelancer/account">
                <S.ProfileGo>
                  <S.ProfileAccountSpan first> 업무가능일 변경 </S.ProfileAccountSpan>
                </S.ProfileGo>
                <S.ProfileGo>
                  <S.ProfileAccountSpan> 비밀번호 변경 </S.ProfileAccountSpan>
                </S.ProfileGo>
                <S.ProfileGo>
                  <S.ProfileAccountSpan> 메일 주소 변경 </S.ProfileAccountSpan>
                </S.ProfileGo>
                <S.ProfileGo>
                  <S.ProfileAccountSpan> 휴대폰 번호 변경 </S.ProfileAccountSpan>
                </S.ProfileGo>
                <S.ProfileGo>
                  <S.ProfileAccountSpan> 주소 변경 </S.ProfileAccountSpan>
                </S.ProfileGo>
              </Link>
            </S.EcarcdPaddingDiv>
          </S.EcardDiv>
        </S.LiTag>
      </S.UlTag>
    </>
  );
};

export default MyBoardOnGoing;
