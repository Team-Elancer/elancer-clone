import * as S from './style';

const FilterButtonDark = () => {
  return (
    <S.ContainerTopButton darkMode>
      <form>
        <S.TopButtonDark type="submit" primary>
          ⚙️ 개발
        </S.TopButtonDark>
      </form>
      <form>
        <S.TopButtonDark type="submit">🛠 퍼블리싱 </S.TopButtonDark>
      </form>
      <form>
        <S.TopButtonDark type="submit"> 🎨 디자인 </S.TopButtonDark>
      </form>
      <form>
        <S.TopButtonDark type="submit"> 📝 기획 </S.TopButtonDark>
      </form>
      <form>
        <S.TopButtonDark type="submit"> 🔗 기타 </S.TopButtonDark>
      </form>
      <form>
        <S.TopButtonDark type="submit"> 🕹 필터 추가하기 </S.TopButtonDark>
      </form>
    </S.ContainerTopButton>
  );
};

// const TopButtonDark = styled.div(TopButtonDark)`
//   background: 'red';
// `;

// console.log(TopButtonDark);

export default FilterButtonDark;
