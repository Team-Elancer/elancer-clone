import { useEffect, useState } from 'react';
import * as S from './style';
import ProjectList from 'components/DashBoard/Project-List';
import ProjectListSkeleton from 'components/Skeleton/Dashboard-ProjectList';

const ProjectTuning = ({ Datas, setNewAxiosUrl, newAxiosUrl, newReloading, setNewReloading }) => {
  const [newTuning, setNewTuning] = useState('');
  const [newTunings, setNewTunings] = useState('');

  useEffect(() => {
    setNewAxiosUrl('/wait-project');
    if (newAxiosUrl === '/wait-project') {
      setNewTuning(Datas);
    }
    if (newTuning.length > 0) {
      const revers = newTuning.reverse();
      setNewTunings(revers);
    }
  }, [Datas, newTuning]);

  return (
    <>
      <S.H1 top="4rem" laptoptop="4rem">
        조율중 프로젝트 리스트 ({newTuning !== '' && newTuning.length})
      </S.H1>
      {newTunings ? (
        newTunings.map((data) => {
          return (
            data.waitFreelancerCount > 0 && (
              <ProjectList
                data={data}
                key={data.projectName}
                newReloading={newReloading}
                setNewReloading={setNewReloading}
                status="조율중 프로젝트"
              />
            )
          );
        })
      ) : (
        <ProjectListSkeleton />
      )}
    </>
  );
};

export default ProjectTuning;
