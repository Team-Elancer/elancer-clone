import { useState, useEffect } from 'react';
import * as S from './style';

import ProjectList from 'components/DashBoard/Project-List';

const ProjectProceeding = ({ Datas, setNewAxiosUrl, newAxiosUrl, newReloading, setNewReloading }) => {
  const [newProcessing, setNewProcessing] = useState('');

  console.log(newProcessing);

  useEffect(() => {
    setNewAxiosUrl('/processing-project');
    if (newAxiosUrl === '/processing-project') {
      setNewProcessing(Datas);
    }
  }, [Datas]);

  return (
    <>
      <S.H1 top="4rem" laptoptop="4rem">
        진행중 프로젝트 리스트 ({newProcessing !== '' && newProcessing.length})
      </S.H1>
      {newProcessing.length > 0 &&
        newProcessing.map((data) => {
          return (
            <ProjectList
              data={data}
              key={data.projectName}
              newReloading={newReloading}
              setNewReloading={setNewReloading}
              finish="flex"
            />
          );
        })}
    </>
  );
};

export default ProjectProceeding;
