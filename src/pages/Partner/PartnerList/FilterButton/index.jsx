import { useState } from 'react';

import FreelancerFilter from '../FreelancerFilter';

import * as S from './style';

const FilterButton = ({
  matchPosition,
  setMatchPosition,
  handleDefaultPage,
  setURL,
  setIsLoading,
  PositionType,
  setPositionType,
}) => {
  const [isModal, setIsModal] = useState(false);

  return (
    <S.ContainerTopButton>
      <S.TopButton
        name="developer"
        type="button"
        onClick={handleDefaultPage}
        primary={matchPosition === '⚙️ 개발자' || PositionType === '⚙️ 개발'}
      >
        ⚙️ 개발자
      </S.TopButton>
      <S.TopButton
        name="publisher"
        type="button"
        onClick={handleDefaultPage}
        primary={matchPosition === '🛠 퍼블리셔' || PositionType === '🛠 퍼블리싱'}
      >
        🛠 퍼블리셔
      </S.TopButton>
      <S.TopButton
        name="designer"
        type="button"
        onClick={handleDefaultPage}
        primary={matchPosition === '🎨 디자이너' || PositionType === '🎨 디자인'}
      >
        🎨 디자이너
      </S.TopButton>
      <S.TopButton
        name="planner"
        type="button"
        onClick={handleDefaultPage}
        primary={matchPosition === '📝 기획자' || PositionType === '📝 기획'}
      >
        📝 기획자
      </S.TopButton>
      <S.TopButton
        name="etc"
        type="button"
        onClick={handleDefaultPage}
        primary={matchPosition === '🔗 기타' || PositionType === '🔗 기타'}
      >
        🔗 기타
      </S.TopButton>
      <S.TopButton type="button" onClick={() => setIsModal((prev) => !prev)}>
        🕹 필터 추가하기
      </S.TopButton>

      {/* ================= FILTER MODAL ================= */}
      {isModal && (
        <FreelancerFilter
          matchPosition={matchPosition}
          setIsModal={setIsModal}
          setURL={setURL}
          setIsLoading={setIsLoading}
          setMatchPosition={setMatchPosition}
          PositionType={PositionType}
          setPositionType={setPositionType}
        />
      )}
    </S.ContainerTopButton>
  );
};

export default FilterButton;
