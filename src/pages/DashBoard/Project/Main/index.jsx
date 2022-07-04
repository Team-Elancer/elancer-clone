import { useEffect, useState } from 'react';
import * as S from './style';

import ProjectListMain from 'components/DashBoard/ProjextListMain';
import ProjectListSkeleton from 'components/Skeleton/ProjectList';

const ProjectMain = ({ Datas, newReloading, setNewReloading, setNewAxiosUrl, newAxiosUrl }) => {
  const [newData, setNewData] = useState('');
  const [newDatas, setNewDatas] = useState('');

  useEffect(() => {
    setNewAxiosUrl('/enterprise-project');
    if (newAxiosUrl === '/enterprise-project') {
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
        프로젝트 리스트 ({Datas && Datas.length})
      </S.H1>
      {newDatas.length > 0 ? (
        newDatas.map((data) => {
          return (
            <ProjectListMain
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
