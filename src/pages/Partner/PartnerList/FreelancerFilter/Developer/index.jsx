import { useState } from 'react';

import * as S from '../style';

import FreelancerSearchBar from 'components/Search/FreelancerFilter';

const Developer = ({ skillSTATE, handlePositionSkills }) => {
  const [isSkill, setIsSkill] = useState([
    'JAVA',
    'iOS',
    'Android',
    'PHP',
    'ASP',
    '.NET',
    'JavaScript',
    'C',
    'C++',
    'DB',
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

export default Developer;
