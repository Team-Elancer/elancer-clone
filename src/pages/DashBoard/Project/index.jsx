import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, Outlet, useOutletContext } from 'react-router-dom';

import ProjectFinish from './Finish';
import ProjectInterview from './Interview';
import ProjectMain from './Main';
import ProjectParticipate from './Participate';
import ProjectProceeding from './Proceeding';
import * as S from './style';
import ProjectTuning from './Tuning';

import BoardCardSpan from 'components/Myboard/CardSpan';

const DashBoardProject = () => {
  const [refresh, setRefresh] = useState(null);
  const [changeList, setChangeList] = useState('');

  const [Datas, setDatas, axiosUrl, setaxiosUrl, fetchData] = useOutletContext();

  useEffect(() => {
    setaxiosUrl('/project-save');
  }, [Datas]);

  return (
    <>
      <S.SpacebetweenDiv>
        <S.H1>프로젝트 관리</S.H1>
        <Link to="/dashboard/projectadd">
          <S.LinkP>프로젝트 등록</S.LinkP>
        </Link>
      </S.SpacebetweenDiv>
      <BoardCardSpan setChangeList={setChangeList} />
      {changeList === '' && <ProjectMain />}
      {changeList === '지원현황' && <ProjectParticipate />}
      {changeList === '인터뷰요청' && <ProjectInterview />}
      {changeList === '조율중' && <ProjectTuning />}
      {changeList === '진행중' && <ProjectProceeding />}
      {changeList === '완료프로젝트' && <ProjectFinish />}
    </>
  );
};

export default DashBoardProject;
