import { useEffect, useState } from 'react';

import * as S from './style';

import ProjectList from 'components/DashBoard/Project-List';
import ProjectListSkeleton from 'components/Skeleton/ProjectList';

const ProjectParticipate = ({ Datas, setNewAxiosUrl, newAxiosUrl }) => {
  const [newData, setNewData] = useState('');
  const [newDatas, setNewDatas] = useState('');

  useEffect(() => {
    setNewAxiosUrl('/apply-project');
    if (newAxiosUrl === '/apply-project') {
      setNewData(Datas);
    }
    if (newData.length > 0) {
      const reverse = newData.reverse();
      setNewDatas(reverse);
    }
  }, [Datas, newData]);

  return (
    <>
      <S.H1 top="4rem" laptoptop="4rem">
        지원현황 프로젝트 리스트 ({newData.length !== undefined ? newData.length : 0})
      </S.H1>
      {newDatas ? (
        newDatas.map((data) => {
          return <ProjectList data={data} key={data.projectName} display="block" />;
        })
      ) : (
        <ProjectListSkeleton />
      )}
    </>
  );
};

export default ProjectParticipate;
