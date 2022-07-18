import * as S from './style';

const MoreButton = ({ MoreButtonFunction }) => {
  return (
    <S.Container>
      <S.LastSpan onClick={MoreButtonFunction}>더보기</S.LastSpan>
    </S.Container>
  );
};

export default MoreButton;
