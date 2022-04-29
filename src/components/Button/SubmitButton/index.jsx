import * as S from './style';

const SubmitButton = ({ text, sides, heights, marginTop = '3rem' }) => {
  return (
    <S.Container side={sides} height={heights} marginTop={marginTop}>
      {text}
    </S.Container>
  );
};

export default SubmitButton;
