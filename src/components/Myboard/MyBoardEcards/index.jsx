import { useState, useEffect } from 'react';
import { Link, useOutletContext } from 'react-router-dom';

import * as S from './style';

const MyBoardEcards = ({ setCardList }) => {
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

  return (
    <S.OverFlowDiv>
      <Link to="/myboard-freelancer/project">
        <S.FlexDiv width="129%">
          <S.CardSpan
            textSize="1.1rem"
            paddingHeight="1.2rem"
            paddingWidth="0.9rem"
            bgcolor="#7485c9"
            radiud="0.6rem"
            id="새소식"
            onClick={(e) => setCardList(e.target.id)}
          >
            새소식
          </S.CardSpan>
          <S.CardSpan
            textSize="1.1rem"
            paddingHeight="1.2rem"
            paddingWidth="0.9rem"
            bgcolor="#8a7fa4"
            radiud="0.6rem"
            id="지원현황"
            onClick={(e) => setCardList(e.target.id)}
          >
            지원 현황 {obtainOrderData?.applyProjectCount}
          </S.CardSpan>
          <S.CardSpan
            textSize="1.1rem"
            paddingHeight="1.2rem"
            paddingWidth="0.9rem"
            bgcolor="#9f7985"
            radiud="0.6rem"
            id="인터뷰요청"
            onClick={(e) => setCardList(e.target.id)}
          >
            인터뷰 요청 {obtainOrderData?.interviewProjectCount}
          </S.CardSpan>
          <S.CardSpan
            textSize="1.1rem"
            paddingHeight="1.2rem"
            paddingWidth="0.9rem"
            bgcolor="#b57360"
            radiud="0.6rem"
            id="낙찰프로젝트"
            onClick={(e) => setCardList(e.target.id)}
          >
            낙찰프로젝트 {obtainOrderData?.joinedProjectCount}
          </S.CardSpan>
          <S.CardSpan
            textSize="1.1rem"
            paddingHeight="1.2rem"
            paddingWidth="1.2rem"
            bgcolor="#d56b2d"
            radiud="0.6rem"
            id="찜"
            onClick={(e) => setCardList(e.target.id)}
          >
            찜 {obtainOrderData?.wishProjectCount}
          </S.CardSpan>
        </S.FlexDiv>
      </Link>
    </S.OverFlowDiv>
  );
};

export default MyBoardEcards;
