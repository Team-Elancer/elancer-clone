import { useState } from 'react';

import * as S from '../style';

const Publisher = ({ skillSTATE, handlePositionSkills }) => {
  const [isSkill, setIsSkill] = useState([
    'HTML5',
    'CSS',
    'ActionScript',
    'jQuery',
    'React.js',
    'Vue.js',
    'JavaScript',
    'WordPress',
    'BootStrap',
    'Photoshop',
    'Flash',
    '웹접근성',
    '웹표준',
    'Git',
  ]);
  return (
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
  );
};

export default Publisher;
