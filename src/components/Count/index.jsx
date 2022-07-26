import CountUp from 'react-countup';
import * as S from './style';

const Count = () => {
  return (
    <S.Container>
      <S.FirstDiv>
        <S.WordSpan>총 프리랜서 수</S.WordSpan>
        <S.NumberSpan>
          <CountUp end={23} separator="," duration={1} />
        </S.NumberSpan>
        <span>명</span>
      </S.FirstDiv>
      <S.SeconddDiv>
        <S.WordSpan>총 프로젝트 금액</S.WordSpan>
        <S.NumberSpan>
          <CountUp end={72552100} separator="," duration={1} />
        </S.NumberSpan>
        <span>원</span>
      </S.SeconddDiv>
      <S.ThirdDiv>
        <S.WordSpan>총 프로젝트 수</S.WordSpan>
        <S.NumberSpan>
          <CountUp end={31} separator="," duration={1} />
        </S.NumberSpan>
        <span>건</span>
      </S.ThirdDiv>
    </S.Container>
  );
};

export default Count;
