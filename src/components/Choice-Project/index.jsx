import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import MoreButton from 'components/Button/MoreButton';
import Ecard from 'components/Project-Ecard';

const ChoiceProject = () => {
  const liTag = ['⚙️  개발 프로젝트', '🛠  퍼블리싱', '🎨  디자인', '📝  기획', '🕹  기타 프로젝트'];

  const [choiceTag, setChoiceTag] = useState('');

  const [selectId, setSelectId] = useState('');

  const changeTag = () => {
    switch (choiceTag) {
      case '⚙️  개발 프로젝트':
        setSelectId('개발');
        break;
      case '🛠  퍼블리싱':
        setSelectId('퍼블');
        break;
      case '🎨  디자인':
        setSelectId('디자인');
        break;
      case '📝  기획':
        setSelectId('기획');
        break;
      case '🕹  기타 프로젝트':
        setSelectId('기타');
        break;
      default:
        setSelectId('개발');
    }
  };

  useEffect(() => {
    changeTag();
    console.log(choiceTag);
  }, [choiceTag]);

  return (
    <S.Container>
      <S.UlTag>
        {liTag.map((a) => {
          return (
            <S.LiTag
              key={a}
              id={a}
              boder={choiceTag === a ? 'black' : '#d7d7d7'}
              bgColor={choiceTag === a ? '#e7e7e7' : 'white'}
              onClick={(e) => {
                setChoiceTag(e.target.id);
              }}
            >
              {a}
            </S.LiTag>
          );
        })}
      </S.UlTag>
      <Ecard selectId={selectId} />
      <Link to="/project-list">
        <MoreButton />
      </Link>
    </S.Container>
  );
};

export default ChoiceProject;
