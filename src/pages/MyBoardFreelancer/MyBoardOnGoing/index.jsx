import { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import * as S from './style';

import ProfileImgDefault from 'assets/images/signin-profile.png';

import OnGoingCard from 'components/Card/OnGoingCard';

import FreelancerMyboard from 'components/Myboard/FreelancerMyboard';
import MyBoardEcards from 'components/Myboard/MyBoardEcards';

import useBeforeUnload from 'hooks/useBeforeUnload';

const MyBoardOnGoing = () => {
  const [
    userData,
    setUserData,
    detailProfileData,
    profileSimpleData,
    profilePublisherData,
    profileETCData,
    profilePlannerData,
    profileDesignerData,
    profileDeveloperData,
    contactData,
    obtainOrderData,
  ] = useOutletContext();

  useBeforeUnload();

  const [cardList, setCardList] = useState('새소식');
  const { thumbnailPath } = userData;
  return (
    <>
      <S.H1 top="2rem" bottom="4rem" laptoptop="2rem" laptopBottom="4rem">
        {userData.name}님 이랜서가 응원해요
      </S.H1>
      <MyBoardEcards setCardList={setCardList} />
      <OnGoingCard />
      <S.H1 top="3rem" bottom="1rem" laptoptop="8rem" laptopBottom="2.5rem">
        {userData.name} 마이보드
      </S.H1>
      <S.UlTag display="flex">
        <S.LiTag>
          <Link to="/myboard-freelancer/profile">
            <S.LiPtag>📍 프로필 관리 바로가기</S.LiPtag>
            <S.EcardDiv>
              <S.EcarcdPaddingDiv>
                <S.ProjectDiv top="1rem">
                  <S.EcardDiv>
                    <S.EcarcdPaddingDiv>
                      <S.ProfileImgDiv>
                        <S.ProfileImg src={!thumbnailPath ? ProfileImgDefault : thumbnailPath} alt="profile" />
                        <S.ProfileGo>
                          <S.ProfileAccountSpan first> {userData.name} </S.ProfileAccountSpan>
                        </S.ProfileGo>
                        <S.BallDiv />
                      </S.ProfileImgDiv>
                    </S.EcarcdPaddingDiv>
                  </S.EcardDiv>
                </S.ProjectDiv>
              </S.EcarcdPaddingDiv>
            </S.EcardDiv>
          </Link>
          <FreelancerMyboard />
        </S.LiTag>
        <Link to="/myboard-freelancer/project">
          <S.LiTag>
            <S.LiPtag>🗓 수주 관리 바로가기</S.LiPtag>
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
                    지원 현황 {obtainOrderData?.applyProjectCount}
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
                    인터뷰 요청 {obtainOrderData?.interviewProjectCount}
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
                    낙찰프로젝트 {obtainOrderData?.joinedProjectCount}
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
                    찜 {obtainOrderData?.wishProjectCount}
                  </S.CardSpan>
                </S.ProjectDiv>
              </S.EcarcdPaddingDiv>
            </S.EcardDiv>
          </S.LiTag>
        </Link>
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
          <Link to="/myboard-freelancer/contact">
            <S.LiPtag>☎️ 문의 / 요청 바로가기</S.LiPtag>
            {contactData?.map((item) => (
              <S.FlexDiv key={item.num}>
                <S.ContactText>
                  Title: {item?.title}
                  Date: {item?.localDate}
                </S.ContactText>
                <S.ContactColorBox>문의</S.ContactColorBox>
              </S.FlexDiv>
            ))}
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
