import { useState } from 'react';
import * as S from './style';
import zoom from 'assets/images/zoom.png';

const FreelancerSearchBar = ({ width = '380px', isSkill, setIsSkill }) => {
  const [value, setValue] = useState('');

  const handleSkills = (e) => {
    e.preventDefault();

    const noUniqueSkill = isSkill?.find((item) => item.toLowerCase() === value.toLowerCase());

    if (noUniqueSkill) {
      alert(`${noUniqueSkill} 기술을 옵션에서 선택하세요.`);
    }

    if (value.length > 0 && !noUniqueSkill) setIsSkill((prev) => [...prev, value]);

    setValue('');
  };

  return (
    <S.Container>
      <S.InputForm width={width} onSubmit={handleSkills}>
        <S.Input
          placeholder="원하시는 스킬을 적은후 엔터를 쳐주세요."
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <S.Img src={zoom} alt="zoom" />
      </S.InputForm>
    </S.Container>
  );
};

export default FreelancerSearchBar;
