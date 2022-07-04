import { useEffect, useState } from 'react';
import * as S from './style';
import ProjectList from 'components/DashBoard/Project-List';
import ProjectListSkeleton from 'components/Skeleton/ProjectList';

const ProjectInterview = ({ Datas, setNewAxiosUrl, newAxiosUrl }) => {
  const [newData, setNewData] = useState('');

  console.log(newData);

  useEffect(() => {
    setNewAxiosUrl('/interview-project');
    if (newAxiosUrl === '/interview-project') {
      setNewData(Datas);
    }
  }, [Datas]);

  return (
    <>
      <S.H1 top="4rem" laptoptop="4rem">
        인터뷰요청 프로젝트 리스트 ({newData.length})
      </S.H1>
      {newData ? (
        newData.map((data) => {
          return <ProjectList data={data} key={data.projectName} display="block" />;
        })
      ) : (
        <ProjectListSkeleton />
      )}
    </>
  );
};

export default ProjectInterview;
