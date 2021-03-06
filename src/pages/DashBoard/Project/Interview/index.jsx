import { useEffect, useState } from 'react';
import * as S from './style';
import ProjectList from 'components/DashBoard/Project-List';
import ProjectListSkeleton from 'components/Skeleton/Dashboard-ProjectList';

const ProjectInterview = ({ Datas, setNewAxiosUrl, newAxiosUrl, setNewReloading }) => {
  const [newData, setNewData] = useState('');
  const [newDatas, setNewDatas] = useState('');

  useEffect(() => {
    setNewAxiosUrl('/interview-project');
    if (newAxiosUrl === '/interview-project') {
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
        인터뷰요청 프로젝트 리스트 ({newData.length})
      </S.H1>
      {newDatas ? (
        newDatas.map((data) => {
          return (
            <ProjectList
              data={data}
              key={data.projectName}
              setNewReloading={setNewReloading}
              status="인터뷰요청 프로젝트"
            />
          );
        })
      ) : (
        <ProjectListSkeleton />
      )}
    </>
  );
};

export default ProjectInterview;
