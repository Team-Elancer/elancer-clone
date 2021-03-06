import React from 'react';
import * as S from 'styles/Ecard';

const ProjectCard = () => {
  return (
    <div>
      {Datas !== undefined ? (
        Datas.map((item, index) => {
          return (
            <S.EcardDiv key={item.projectNum}>
              <S.FirstDiv>
                <S.HeartBackDiv>
                  <S.HeartDiv>π€</S.HeartDiv>
                </S.HeartBackDiv>
                <S.EcardUlTag>
                  <S.EcardBlackLiTag>{positionSwitch(item.positionKind)}</S.EcardBlackLiTag>
                  <S.EcardBlackLiTag>{item.projectType === 'TELEWORKING' ? 'μ¬ν' : 'μμ£Ό'}</S.EcardBlackLiTag>
                  <S.EcardBlackLiTag>{item.projectPeriod === 0 ? 1 : item.projectPeriod}κ°μ</S.EcardBlackLiTag>
                  <S.EcardBlackLiTag>{checkAddress(item.address.mainAddress)}</S.EcardBlackLiTag>
                  <S.EcardBlackLiTag>{item.pay}</S.EcardBlackLiTag>
                  <S.EcardRedLiTag>{chageWorkShip(item.freelancerWorkmanShip)}</S.EcardRedLiTag>
                  {item.skills &&
                    item.skills.map((skill) => {
                      return skill && <S.EcardRedLiTag key={skill}>{skill}</S.EcardRedLiTag>;
                    })}
                </S.EcardUlTag>
                <Link to={`/project/${item.projectNum}`}>
                  <S.HoneTag>{item.projectName}</S.HoneTag>
                  <S.Ptag>{item.content}</S.Ptag>
                  <S.SubDiv>
                    <S.BigSpan>
                      <S.NumberTag>0λͺ</S.NumberTag>
                      <S.TextpTag>μ΄μ°νμ΅λλ€!</S.TextpTag>
                    </S.BigSpan>
                    <S.DaySpan>λ§κ°{item.endDays}μΌμ </S.DaySpan>
                  </S.SubDiv>
                </Link>
              </S.FirstDiv>
            </S.EcardDiv>
          );
        })
      ) : (
        <div>
          <ProjectSkeleton />
          <ProjectSkeleton />
          <ProjectSkeleton />
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
