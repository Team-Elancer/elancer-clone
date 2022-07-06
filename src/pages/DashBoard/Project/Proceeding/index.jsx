import { useState, useEffect } from 'react';
import * as S from './style';

import ProjectList from 'components/DashBoard/Project-List';
import ProjectListSkeleton from 'components/Skeleton/ProjectList';

const ProjectProceeding = ({ Datas, setNewAxiosUrl, newAxiosUrl, newReloading, setNewReloading }) => {
  const [newProcessing, setNewProcessing] = useState('');
  const [newProcessings, setNewProcessings] = useState('');

  useEffect(() => {
    setNewAxiosUrl('/processing-project');
    if (newAxiosUrl === '/processing-project') {
      setNewProcessing(Datas);
    }
    if (newProcessing.length > 0) {
      const reverse = newProcessing.reverse();
      setNewProcessings(reverse);
    }
  }, [Datas, newProcessing]);

  return (
    <>
      <S.H1 top="4rem" laptoptop="4rem">
        진행중 프로젝트 리스트 ({newProcessing !== '' && newProcessing.length})
      </S.H1>
      {newProcessings ? (
        newProcessings.map((data) => {
          return (
            <ProjectList
              data={data}
              key={data.projectName}
              newReloading={newReloading}
              setNewReloading={setNewReloading}
              finish="flex"
              status="진행중 프로젝트"
            />
          );
        })
      ) : (
        <ProjectListSkeleton />
      )}
    </>
  );
};

export default ProjectProceeding;
