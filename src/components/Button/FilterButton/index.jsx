import { useState } from 'react';

import * as S from './style';

import FreelancerFilter from 'components/Modal/FreelancerFilter';

const FilterButton = ({ handlePositionList, togglePositionType }) => {
  const [{ developer, publisher, designer, planner, etc }] = togglePositionType;

  const [isModal, setIsModal] = useState(false);

  return (
    <S.ContainerTopButton>
      <S.TopButton name="developer" type="button" onClick={handlePositionList} primary={developer}>
        ⚙️ 개발자
      </S.TopButton>
      <S.TopButton name="publisher" type="button" onClick={handlePositionList} primary={publisher}>
        🛠 퍼블리셔
      </S.TopButton>
      <S.TopButton name="designer" type="button" onClick={handlePositionList} primary={designer}>
        🎨 디자이너
      </S.TopButton>
      <S.TopButton name="planner" type="button" onClick={handlePositionList} primary={planner}>
        📝 기획자
      </S.TopButton>
      <S.TopButton name="etc" type="button" onClick={handlePositionList} primary={etc}>
        🔗 기타
      </S.TopButton>
      <S.TopButton type="button" onClick={() => setIsModal((prev) => !prev)}>
        🕹 필터 추가하기
      </S.TopButton>
      {isModal && <FreelancerFilter setIsModal={setIsModal} />}
    </S.ContainerTopButton>
  );
};

export default FilterButton;
