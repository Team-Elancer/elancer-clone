import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import { CLIENT_FREELANCER } from 'utils/config/api';

const BoardCardSpan = ({ changeList, setChangeList }) => {
  const [newDatas, setNewDatas] = useState('');

  const fetchData = async () => {
    try {
      const res = await CLIENT_FREELANCER('/project-list-count');
      const data = await res.data;
      setNewDatas(data);
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  console.log(changeList);

  useEffect(() => {
    if (newDatas === '') {
      fetchData();
    }
  }, [newDatas]);

  return (
    <S.OverFlowDiv>
      <S.FlexDiv width="129%">
        <Link to="/dashboard/project">
          <S.CardSpan textSize="1.1rem" paddingHeight="1.2rem" paddingWidth="0.9rem" bgcolor="#7485c9" radiud="0.6rem">
            헤드헌팅 0
          </S.CardSpan>
        </Link>
        <Link to="/dashboard/project">
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
        </Link>
        <Link to="/dashboard/project">
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
        </Link>
        <Link to="/dashboard/project">
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
        </Link>
        <Link to="/dashboard/project">
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
        </Link>
        <Link to="/dashboard/project">
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
        </Link>
      </S.FlexDiv>
    </S.OverFlowDiv>
  );
};

export default BoardCardSpan;
