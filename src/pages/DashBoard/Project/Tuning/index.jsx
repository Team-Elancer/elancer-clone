import * as S from './style';
import ProjectList from 'components/DashBoard/Project-List';

const ProjectTuning = () => {
  return (
    <>
      <S.H1 top="4rem" laptoptop="4rem">
        조율중 프로젝트 리스트 (0)
      </S.H1>
      <ProjectList />
    </>
  );
};

export default ProjectTuning;
