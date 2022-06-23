import * as S from './style';
import ProjectList from 'components/DashBoard/Project-List';

const ProjectParticipate = ({ Datas }) => {
  const Length = Datas.filter((data) => data.applicantList.length > 0).length;

  return (
    <>
      <S.H1 top="4rem" laptoptop="4rem">
        지원현황 프로젝트 리스트 ({Length})
      </S.H1>
      {Datas.length > 0 &&
        Datas.map((data) => {
          return data.applicantList.length > 0 && <ProjectList data={data} key={data.projectName} />;
        })}
    </>
  );
};

export default ProjectParticipate;
