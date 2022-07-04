import axios from 'axios';
import { useState, useEffect } from 'react';
import * as S from './style';

const BoardCardSpan = ({ setChangeList }) => {
  const [newDatas, setNewDatas] = useState('');
  const authAxios = axios.create({
    baseURL: 'http://ec2-13-209-114-196.ap-northeast-2.compute.amazonaws.com:8080',
    headers: {
      Authorization: `${window.localStorage.accessToken}`,
    },
  });

  const fetchData = async () => {
    try {
      const res = await authAxios('/project-list-count');
      const data = await res.data;
      setNewDatas(data);
    } catch (err) {
      console.log(err.response.data.message);
    }
  };
  console.log(newDatas);
  useEffect(() => {
    if (newDatas === '') {
      fetchData();
    }
  }, [newDatas]);

  return (
    <S.OverFlowDiv>
      <S.FlexDiv width="129%">
        <S.CardSpan textSize="1.1rem" paddingHeight="1.2rem" paddingWidth="0.9rem" bgcolor="#7485c9" radiud="0.6rem">
          헤드헌팅 0
        </S.CardSpan>
        <S.CardSpan
          textSize="1.1rem"
          paddingHeight="1.2rem"
          paddingWidth="0.9rem"
          bgcolor="#8a7fa4"
          radiud="0.6rem"
          id="지원현황"
          onClick={(e) => setChangeList(e.target.id)}
        >
          지원 현황 {newDatas !== '' && newDatas.applyProjectCount}
        </S.CardSpan>
        <S.CardSpan
          textSize="1.1rem"
          paddingHeight="1.2rem"
          paddingWidth="0.9rem"
          bgcolor="#9f7985"
          radiud="0.6rem"
          id="인터뷰요청"
          onClick={(e) => setChangeList(e.target.id)}
        >
          인터뷰 요청 {newDatas !== '' && newDatas.interviewProjectCount}
        </S.CardSpan>
        <S.CardSpan
          textSize="1.1rem"
          paddingHeight="1.2rem"
          paddingWidth="0.9rem"
          bgcolor="#b57360"
          radiud="0.6rem"
          id="조율중"
          onClick={(e) => setChangeList(e.target.id)}
        >
          조율중 {newDatas !== '' && newDatas.waitProjectCount}
        </S.CardSpan>
        <S.CardSpan
          textSize="1.1rem"
          paddingHeight="1.2rem"
          paddingWidth="0.9rem"
          bgcolor="#d56b2d"
          radiud="0.6rem"
          id="진행중"
          onClick={(e) => setChangeList(e.target.id)}
        >
          진행중 {newDatas !== '' && newDatas.processingProjectCount}
        </S.CardSpan>
        <S.CardSpan
          textSize="1.1rem"
          paddingHeight="1.2rem"
          paddingWidth="0.9rem"
          bgcolor="#f16300"
          radiud="0.6rem"
          id="완료프로젝트"
          onClick={(e) => setChangeList(e.target.id)}
        >
          완료 프로젝트{newDatas !== '' && newDatas.completionProjectCount}
        </S.CardSpan>
      </S.FlexDiv>
    </S.OverFlowDiv>
  );
};

export default BoardCardSpan;
