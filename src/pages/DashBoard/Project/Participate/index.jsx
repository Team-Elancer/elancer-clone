import * as S from './style';
import ProjectList from 'components/DashBoard/Project-List';

const ProjectParticipate = () => {
  return (
    <>
      <S.H1 top="4rem" laptoptop="4rem">
        지원현황 프로젝트 리스트 (0)
      </S.H1>
      <ProjectList />
    </>
  );
};

export default ProjectParticipate;
