import { useState, useEffect } from 'react';
import * as S from './style';
import ProjectList from 'components/DashBoard/Project-List';
import ProjectListSkeleton from 'components/Skeleton/ProjectList';

const ProjectFinish = ({ Datas, setNewAxiosUrl, newAxiosUrl, newReloading, setNewReloading }) => {
  const [newEnd, setNewEnd] = useState('');
  const [newEnds, setNewEnds] = useState('');

  useEffect(() => {
    setNewAxiosUrl('/finish-project');
    if (newAxiosUrl === '/finish-project') {
      setNewEnd(Datas);
    }
    if (newEnd.length > 0) {
      const reverse = newEnd.reverse();
      setNewEnds(reverse);
    }
  }, [Datas, newEnd]);

  return (
    <>
      <S.H1 top="4rem" laptoptop="4rem">
        완료된 프로젝트 리스트 ({newEnd !== '' && newEnd.length})
      </S.H1>
      {newEnds ? (
        newEnds.map((data) => {
          return (
            <ProjectList
              data={data}
              key={data.projectName}
              newReloading={newReloading}
              setNewReloading={setNewReloading}
              status="완료 프로젝트"
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
