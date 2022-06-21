import * as S from './style';
import ProjectList from 'components/DashBoard/Project-List';

const ProjectFinish = ({ Datas }) => {
  return (
    <>
      <S.H1 top="4rem" laptoptop="4rem">
        완료된 프로젝트 리스트 (0)
      </S.H1>
      {Datas.length > 1 &&
        Datas.map((data) => {
          return data.applicantList > 1 && <ProjectList data={data} key={data.projectName} />;
        })}
    </>
  );
};

export default ProjectFinish;
