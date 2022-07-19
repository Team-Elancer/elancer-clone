import { useState } from 'react';

import * as S from '../style';

const ETC = ({ skillSTATE, handlePositionSkills }) => {
  const [isSkill, setIsSkill] = useState([
    'PM',
    'PL',
    '시스템분석/설계',
    'DA',
    'DBA',
    'TA',
    'AA',
    'NA',
    'PMO',
    'SE',
    'QA',
    'QC',
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

export default ETC;
