import * as S from './style';

const SubmitButton = ({ text, sides, heights, marginTop = '3rem', click = null }) => {
  return (
    <S.Container side={sides} height={heights} marginTop={marginTop} onClick={click}>
      {text}
    </S.Container>
  );
};

export default SubmitButton;
