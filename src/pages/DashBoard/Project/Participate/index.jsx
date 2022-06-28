import { useEffect, useState } from 'react';

import * as S from './style';

import ProjectList from 'components/DashBoard/Project-List';
import ProjectListSkeleton from 'components/Skeleton/ProjectList';

const ProjectParticipate = ({ Datas, setNewAxiosUrl, newAxiosUrl }) => {
  const [newData, setNewData] = useState('');

  console.log(newData);

  useEffect(() => {
    setNewAxiosUrl('/enterprise-project');
    if (newAxiosUrl === '/enterprise-project') {
      setNewData(Datas);
    }
  }, [Datas]);

  return (
    <>
      <S.H1 top="4rem" laptoptop="4rem">
        지원현황 프로젝트 리스트 ({newData !== '' && newData.filter((data) => data.applicantList.length > 0).length})
      </S.H1>
      {newData ? (
        newData.map((data) => {
          return data.applicantList.length > 0 && <ProjectList data={data} key={data.projectName} display="block" />;
        })
      ) : (
        <ProjectListSkeleton />
      )}
    </>
  );
};

export default ProjectParticipate;
