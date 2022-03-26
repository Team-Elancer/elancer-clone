import * as S from './style';
import MoreButton from 'components/Button/MoreButton';

const ChoiceProject = () => {
  const liTag = ['⚙️  개발 프로젝트', '🛠  퍼블리싱', '🎨  디자인', '📝  기획', '🕹  기타 프로젝트'];
  const eCard = [1, 2, 3];
  const blackLi = ['개발자', '상주', '9개월', '서울', '8,000 만원'];
  const redLi = ['무관', 'Javascript', 'React', 'vue.js'];

  return (
    <S.Container>
      <S.UlTag>
        {liTag.map((a, i) => {
          return <S.LiTag keys={i}>{a}</S.LiTag>;
        })}
      </S.UlTag>

      {eCard.map((item) => {
        return (
          <S.EcardDiv keys={item}>
            <S.FirstDiv>
              <S.EcardUlTag>
                <S.HeartBackDiv>
                  <S.HearDiv>🤍</S.HearDiv>
                </S.HeartBackDiv>
                {blackLi.map((title) => {
                  return <S.EcardBlackLiTag keys={title}>{title}</S.EcardBlackLiTag>;
                })}
                {redLi.map((language) => {
                  return <S.EcardRedLiTag keys={language}>{language}</S.EcardRedLiTag>;
                })}
                <S.HeartBackDiv>
                  <S.HearDiv>🤍</S.HearDiv>
                </S.HeartBackDiv>
              </S.EcardUlTag>
              <S.HoneTag>[상주] GPM 고도화 프로젝트</S.HoneTag>
              <S.Ptag>
                GPM고도화프로젝트
                <br />
                현재개발진행사항
                <br />
                총투입인력명
                <br />
                현재설계개발상태운영중인시스템의고도화프로젝트입니다.
                <br />
                담당업무...
              </S.Ptag>
              <S.SubDiv>
                <S.BigSpan>
                  <S.NumberTag>0명</S.NumberTag>
                  <S.TextpTag>이찜했습니다!</S.TextpTag>
                </S.BigSpan>
                <S.DaySpan>마감17일전</S.DaySpan>
              </S.SubDiv>
            </S.FirstDiv>
          </S.EcardDiv>
        );
      })}
      <MoreButton />
    </S.Container>
  );
};

export default ChoiceProject;
