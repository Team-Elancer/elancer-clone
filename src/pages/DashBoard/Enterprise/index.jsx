import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

import CompanyDashBoard from 'components/DashBoard/Comapany-Myboard';
import EnterpriseContact from 'components/DashBoard/Contact';
import BoardCardSpan from 'components/Myboard/CardSpan';

import { CLIENT_FREELANCER } from 'utils/config/api';

const DashBoardEnterprise = () => {
  const [newDatas, setNewDatas] = useState('');

  console.log(newDatas?.applyProjectCount);

  const fetchData = async () => {
    try {
      const res = await CLIENT_FREELANCER('/project-list-count');
      const data = await res.data;
      setNewDatas(data);
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  const [cardArray, setCardArray] = useState([
    { backColor: '#8a7fa4', title: '지원 현황' },
    { backColor: '#9f7985', title: '인터뷰 요청' },
    { backColor: '#b57360', title: '조율중' },
    { backColor: '#d56b2d', title: '진행중 프로젝트' },
  ]);

  useEffect(() => {
    setCardArray([
      { backColor: '#8a7fa4', title: `지원 현황 ${newDatas.applyProjectCount}` },
      { backColor: '#9f7985', title: `인터뷰 요청 ${newDatas.interviewProjectCount}` },
      { backColor: '#b57360', title: `조율중 ${newDatas.waitProjectCount}` },
      { backColor: '#d56b2d', title: `진행중 프로젝트 ${newDatas.processingProjectCount}` },
    ]);
    if (newDatas === '') {
      fetchData();
    }
  }, [newDatas]);

  return (
    <>
      <S.H1 top="2rem" bottom="4rem" laptoptop="2rem" laptopBottom="4rem">
        클론코딩님 이랜서가 응원해요
      </S.H1>
      <BoardCardSpan />
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
              {cardArray.map((data) => {
                return (
                  <S.ProjectDiv key={data.title} top="1.75rem">
                    <S.CardSpan
                      textSize="1rem"
                      paddingHeight="0.5rem"
                      paddingWidth="0.6rem"
                      bgcolor={data.backColor}
                      radiud="0.4rem"
                    >
                      {data.title}
                    </S.CardSpan>
                  </S.ProjectDiv>
                );
              })}
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
              <EnterpriseContact />
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
