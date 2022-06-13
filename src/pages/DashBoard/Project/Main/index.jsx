import * as S from './style';
import ProjectList from 'components/DashBoard/Project-List';

const ProjectMain = () => {
  return (
    <>
      <S.H1 top="4rem" laptoptop="4rem">
        프로젝트 리스트 (0)
      </S.H1>
      <ProjectList />
      <S.H1 top="4rem" laptoptop="4rem">
        헤드헌팅 리스트 (0)
      </S.H1>
    </>
  );
};

export default ProjectMain;
