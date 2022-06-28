import { useState, useEffect } from 'react';
import * as S from './style';
import ProjectList from 'components/DashBoard/Project-List';
import ProjectListSkeleton from 'components/Skeleton/ProjectList';

const ProjectFinish = ({ Datas, setNewAxiosUrl, newAxiosUrl, newReloading, setNewReloading }) => {
  const [newEnd, setNewEnd] = useState('');

  useEffect(() => {
    setNewAxiosUrl('/finish-project');
    if (newAxiosUrl === '/finish-project') {
      setNewEnd(Datas);
    }
  }, [Datas]);

  return (
    <>
      <S.H1 top="4rem" laptoptop="4rem">
        완료된 프로젝트 리스트 ({newEnd !== '' && newEnd.length})
      </S.H1>
      {newEnd ? (
        newEnd.map((data) => {
          return (
            <ProjectList
              data={data}
              key={data.projectName}
              newReloading={newReloading}
              setNewReloading={setNewReloading}
            />
          );
        })
      ) : (
        <ProjectListSkeleton />
      )}
    </>
  );
};

export default ProjectFinish;
