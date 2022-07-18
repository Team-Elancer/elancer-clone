import { useState } from 'react';

import * as S from '../style';

import FreelancerSearchBar from 'components/Search/FreelancerFilter';

const Planner = ({ skillSTATE, handlePositionSkills }) => {
  const [isSkill, setIsSkill] = useState([
    'PM',
    'PL',
    'PMO(사업관리)',
    '시스템분석/설계',
    '웹기획',
    '앱기획',
    '컨설팅',
    '제안',
    '쇼핑몰',
    '여행사',
    '금융',
    '증권',
    '카드',
    '보험',
    '대학',
    '병원',
    '공공기관',
    '물류',
    '회계',
    '제조',
    '건설',
    '암호화폐',
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

export default Planner;
