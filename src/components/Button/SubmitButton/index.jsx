import * as S from './style';

const SubmitButton = ({ text, sides, heights }) => {
  return (
    <S.Container side={sides} height={heights}>
      {text}
    </S.Container>
  );
};

export default SubmitButton;
