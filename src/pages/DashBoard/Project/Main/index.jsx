import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import * as S from './style';

import ProjectList from 'components/DashBoard/Project-List';
import Loading from 'components/Loading';

const ProjectMain = ({ Datas }) => {
  return (
    <>
      <S.H1 top="4rem" laptoptop="4rem">
        프로젝트 리스트 ({Datas && Datas.length})
      </S.H1>
      {Datas.length > 1 &&
        Datas.map((data) => {
          return <ProjectList data={data} key={data.projectName} />;
        })}
      <S.H1 top="4rem" laptoptop="4rem">
        헤드헌팅 리스트 (0)
      </S.H1>
    </>
  );
};

export default ProjectMain;
