import * as S from './style';

// const FilterButton = ({ setDeveloperLists, setPublisherLists, setDesignerLists, setPlannerLists }) => {
const FilterButton = ({ handlePositionList }) => {
  return (
    <S.ContainerTopButton>
      <S.TopButton name="developer" type="button" onClick={handlePositionList} primary>
        ⚙️ 개발자
      </S.TopButton>
      <S.TopButton name="publisher" type="button" onClick={handlePositionList}>
        🛠 퍼블리셔
      </S.TopButton>
      <S.TopButton name="designer" type="button" onClick={handlePositionList}>
        🎨 디자이너
      </S.TopButton>
      <S.TopButton name="planner" type="button" onClick={handlePositionList}>
        📝 기획자
      </S.TopButton>
      <S.TopButton type="button">🔗 기타</S.TopButton>
      <S.TopButton type="button">🕹 필터 추가하기</S.TopButton>
    </S.ContainerTopButton>
  );
};

export default FilterButton;
