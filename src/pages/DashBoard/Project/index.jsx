import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

import BoardCardSpan from 'components/Myboard/CardSpan';

const DashBoardProject = () => {
  const [projectData, setProjectData] = useState('');

  const authAxios = axios.create({
    baseURL: 'http://ec2-13-209-114-196.ap-northeast-2.compute.amazonaws.com:8080',
    headers: {
      Authorization: `${window.localStorage.accessToken}`,
    },
  });

  const fetchData = async () => {
    try {
      const res = await authAxios('/project-save');
      const Data = await res.data;
      setProjectData(Data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(projectData);

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
      <BoardCardSpan />
      <S.H1 top="4rem" laptoptop="4rem">
        헤드헌팅 리스트 (0)
      </S.H1>
    </>
  );
};

export default DashBoardProject;
