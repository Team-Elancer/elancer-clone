import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import * as S from './style';

import ProjectList from 'components/DashBoard/Project-List';
import ProjectListSkeleton from 'components/Skeleton/ProjectList';

const ProjectMain = ({ Datas, newReloading, setNewReloading, setNewAxiosUrl, newAxiosUrl }) => {
  const [newData, setNewData] = useState('');

  useEffect(() => {
    setNewAxiosUrl('/enterprise-project');
    if (newAxiosUrl === '/enterprise-project') {
      setNewData(Datas);
    }
  }, [Datas]);

  return (
    <>
      <S.H1 top="4rem" laptoptop="4rem">
        프로젝트 리스트 ({Datas && Datas.length})
      </S.H1>
      {newData.length > 0 ? (
        newData.map((data) => {
          return (
            <ProjectList
              display="block"
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
      <S.H1 top="4rem" laptoptop="4rem">
        헤드헌팅 리스트 (0)
      </S.H1>
    </>
  );
};

export default ProjectMain;
