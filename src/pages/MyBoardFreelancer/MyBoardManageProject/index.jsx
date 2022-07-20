import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

import * as S from './style';

import OnGoingCard from 'components/Card/OnGoingCard';
import ListPortfolio from 'components/ListPortfolio';
import FreelancerMyboard from 'components/Myboard/FreelancerMyboard';
import MyBoardEcards from 'components/Myboard/MyBoardEcards';

const MyBoardManageProject = () => {
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

  const [cardList, setCardList] = useState('새소식');

  const [applyProjectResponses, setApplyProjectResponses] = useState([]);
  const [interviewProjectResponses, setInterviewProjectResponses] = useState([]);
  const [joinedProjectResponses, setJoinedProjectResponses] = useState([]);
  const [wishProjectResponses, setWishProjectResponses] = useState([]);

  useEffect(() => {
    setApplyProjectResponses(obtainOrderData.applyProjectResponses);
    setInterviewProjectResponses(obtainOrderData.interviewProjectResponses);
    setJoinedProjectResponses(obtainOrderData.joinedProjectResponses);
    setWishProjectResponses(obtainOrderData.wishProjectResponses);
  }, [obtainOrderData]);

  return (
    <div>
      <S.H1 top="2rem" bottom="4rem" laptoptop="2rem" laptopBottom="4rem">
        {userData.name} 님 이랜서가 응원해요
      </S.H1>
      <MyBoardEcards cardList={cardList} setCardList={setCardList} />
      <OnGoingCard />

      {cardList === '새소식' && (
        <>
          <S.H1 marginTop="5rem" top="2rem" bottom="4rem" laptoptop="2rem" laptopBottom="4rem">
            지원한 프로젝트 리스트 ({applyProjectResponses?.length})
          </S.H1>
          <FreelancerMyboard Datas={applyProjectResponses} />
        </>
      )}

      {cardList === '지원현황' && (
        <>
          <S.H1 marginTop="5rem" top="2rem" bottom="4rem" laptoptop="2rem" laptopBottom="4rem">
            지원한 프로젝트 리스트 ({applyProjectResponses?.length})
          </S.H1>
          <FreelancerMyboard Datas={applyProjectResponses} />
        </>
      )}
      {cardList === '인터뷰요청' && (
        <>
          <S.H1 marginTop="5rem" top="2rem" bottom="4rem" laptoptop="2rem" laptopBottom="4rem">
            인터뷰 요청 리스트 ({interviewProjectResponses?.length})
          </S.H1>
          <FreelancerMyboard accept Datas={interviewProjectResponses} />
        </>
      )}
      {cardList === '낙찰프로젝트' && (
        <>
          <S.H1 marginTop="5rem" top="2rem" bottom="4rem" laptoptop="2rem" laptopBottom="4rem">
            낙찰프로젝트 리스트 ({joinedProjectResponses?.length})
          </S.H1>

          <FreelancerMyboard Datas={joinedProjectResponses} />
        </>
      )}
      {cardList === '찜' && (
        <>
          <S.H1 marginTop="5rem" top="2rem" bottom="4rem" laptoptop="2rem" laptopBottom="4rem">
            찜 리스트 ({wishProjectResponses?.length})
          </S.H1>

          <FreelancerMyboard Datas={wishProjectResponses} remove />
        </>
      )}
    </div>
  );
};

export default MyBoardManageProject;
