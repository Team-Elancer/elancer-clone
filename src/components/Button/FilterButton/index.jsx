import * as S from './style';

const FilterButton = () => {
  return (
    <S.ContainerTopButton>
      <form>
        <S.TopButton type="submit" primary>
          ⚙️ 개발자
        </S.TopButton>
      </form>
      <form>
        <S.TopButton type="submit">🛠 퍼블리셔 </S.TopButton>
      </form>
      <form>
        <S.TopButton type="submit"> 🎨 디자이너 </S.TopButton>
      </form>
      <form>
        <S.TopButton type="submit"> 📝 기획자 </S.TopButton>
      </form>
      <form>
        <S.TopButton type="submit"> 🔗 기타 </S.TopButton>
      </form>
      <form>
        <S.TopButton type="submit"> 🕹 필터 추가하기 </S.TopButton>
      </form>
    </S.ContainerTopButton>
  );
};

export default FilterButton;
