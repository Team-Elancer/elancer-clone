import { useState } from 'react';

import * as S from '../style';

import FreelancerSearchBar from 'components/Search/FreelancerFilter';

const Designer = ({ skillSTATE, handlePositionSkills }) => {
  const [isSkill, setIsSkill] = useState([
    '웹디자인',
    '앱디자인',
    '출판/편집 디자인',
    '게임 디자인',
    '판촉물 디자인',
    '3D 디자인',
    '그래픽 디자인',
    '패키지 디자인',
    '아트 디렉션',
    '애니메이션',
    '로고 브랜딩',
  ]);
  return (
    <>
      <S.SectionContent>
        {isSkill?.map((item, index) => (
          <S.SectionContentItem
            key={`item_${index + 1}`}
            onClick={handlePositionSkills}
            bgColor={skillSTATE?.includes(item) ? '#e7e7e7' : 'white'}
            color={skillSTATE?.includes(item) ? 'black' : '#d7d7d7'}
          >
            {item}
          </S.SectionContentItem>
        ))}
      </S.SectionContent>
      <FreelancerSearchBar isSkill={isSkill} setIsSkill={setIsSkill} />
    </>
  );
};

export default Designer;
