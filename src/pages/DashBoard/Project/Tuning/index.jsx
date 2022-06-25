import { useEffect, useState } from 'react';
import * as S from './style';
import ProjectList from 'components/DashBoard/Project-List';

const ProjectTuning = ({ Datas, setNewAxiosUrl, newAxiosUrl, newReloading }) => {
  const [newTuning, setNewTuning] = useState('');
  console.log(Datas, newTuning, newReloading);

  useEffect(() => {
    setNewAxiosUrl('/wait-project');
    if (newAxiosUrl === '/wait-project') {
      setNewTuning(Datas);
    }
  }, [Datas]);

  return (
    <>
      <S.H1 top="4rem" laptoptop="4rem">
        조율중 프로젝트 리스트 ({newTuning.length})
      </S.H1>
      {newTuning !== '' &&
        newTuning.map((data) => {
          return data.waitFreelancerCount > 0 && <ProjectList data={data} key={data.projectName} spanDisplay="block" />;
        })}
    </>
  );
};

export default ProjectTuning;
