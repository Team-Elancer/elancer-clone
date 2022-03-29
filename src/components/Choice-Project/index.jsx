import * as S from './style';
import MoreButton from 'components/Button/MoreButton';
import Ecard from 'components/Project-Ecard';

const ChoiceProject = () => {
  const liTag = ['⚙️  개발 프로젝트', '🛠  퍼블리싱', '🎨  디자인', '📝  기획', '🕹  기타 프로젝트'];

  return (
    <S.Container>
      <S.UlTag>
        {liTag.map((a, i) => {
          return <S.LiTag keys={i}>{a}</S.LiTag>;
        })}
      </S.UlTag>
      <Ecard />
      <MoreButton />
    </S.Container>
  );
};

export default ChoiceProject;
