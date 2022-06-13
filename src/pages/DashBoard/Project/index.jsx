import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import ProjectFinish from './Finish';
import ProjectInterview from './Interview';
import ProjectMain from './Main';
import ProjectParticipate from './Participate';
import ProjectProceeding from './Proceeding';
import * as S from './style';
import ProjectTuning from './Tuning';

import BoardCardSpan from 'components/Myboard/CardSpan';

const DashBoardProject = () => {
  const [projectData, setProjectData] = useState('');
  const [refresh, setRefresh] = useState(null);
  const [changeList, setChangeList] = useState('');

  const authAxios = axios.create({
    baseURL: 'http://ec2-13-209-114-196.ap-northeast-2.compute.amazonaws.com:8080',
    headers: {
      Authorization: `${window.localStorage.accessToken}`,
      refresh,
    },
  });

  const fetchData = async () => {
    try {
      const res = await authAxios('/project-save');
      const Data = await res.data;
      setProjectData(Data);
    } catch (err) {
      console.log(err);
      if (err.message === '만료된 토큰입니다. Refresh 토큰이 필요합니다.') {
        setRefresh(window.localStorage.refresh);
      }
    }
  };

  useEffect(() => {
    if (projectData.length < 1) {
      fetchData();
    }
  }, [projectData]);

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
