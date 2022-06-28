import { useEffect, useState } from 'react';
import * as S from './style';
import ProjectList from 'components/DashBoard/Project-List';
import ProjectListSkeleton from 'components/Skeleton/ProjectList';

const ProjectTuning = ({ Datas, setNewAxiosUrl, newAxiosUrl, newReloading, setNewReloading }) => {
  const [newTuning, setNewTuning] = useState('');

  useEffect(() => {
    setNewAxiosUrl('/wait-project');
    if (newAxiosUrl === '/wait-project') {
      setNewTuning(Datas);
    }
  }, [Datas]);

  return (
    <>
      <S.H1 top="4rem" laptoptop="4rem">
        조율중 프로젝트 리스트 ({newTuning !== '' && newTuning.length})
      </S.H1>
      {newTuning ? (
        newTuning.map((data) => {
          return (
            data.waitFreelancerCount > 0 && (
              <ProjectList
                data={data}
                key={data.projectName}
                newReloading={newReloading}
                setNewReloading={setNewReloading}
                spanDisplay="block"
                start="flex"
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
