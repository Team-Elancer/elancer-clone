import * as S from './style';

const FilterChoiceButton = ({ changeURl }) => {
  return <S.Container onClick={changeURl}>필터 적용하기</S.Container>;
};

export default FilterChoiceButton;
