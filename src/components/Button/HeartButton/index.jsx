import * as S from './style';

const HeartButton = ({ position = 'absolute' }) => {
  return (
    <S.HeartBackDiv position={position}>
      <S.HeartDiv>🤍</S.HeartDiv>
    </S.HeartBackDiv>
  );
};

export default HeartButton;
