import * as S from './style';

const FilterButtonDark = () => {
  return (
    <S.ContainerTopButton darkMode>
      <form>
        <S.TopButtonDark type="submit" primary>
          βοΈ κ°λ°
        </S.TopButtonDark>
      </form>
      <form>
        <S.TopButtonDark type="submit">π  νΌλΈλ¦¬μ± </S.TopButtonDark>
      </form>
      <form>
        <S.TopButtonDark type="submit"> π¨ λμμΈ </S.TopButtonDark>
      </form>
      <form>
        <S.TopButtonDark type="submit"> π κΈ°ν </S.TopButtonDark>
      </form>
      <form>
        <S.TopButtonDark type="submit"> π κΈ°ν </S.TopButtonDark>
      </form>
      <form>
        <S.TopButtonDark type="submit"> πΉ νν° μΆκ°νκΈ° </S.TopButtonDark>
      </form>
    </S.ContainerTopButton>
  );
};

export default FilterButtonDark;
