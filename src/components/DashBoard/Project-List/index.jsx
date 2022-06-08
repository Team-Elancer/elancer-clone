import * as S from './style';

const ProjectList = () => {
  return (
    <S.Container>
      <S.ColorDiv>
        <S.BetweenDiv>
          <S.SpanTag bgColor="#8a7fa4">지원현황 프로젝트</S.SpanTag>
          <S.SpanTag bgColor="#3c3c3c" cursor="pointer">
            등록 취소
          </S.SpanTag>
        </S.BetweenDiv>
        <S.Title>test11</S.Title>
        <S.FlexDiv>
          <S.ProjectSpan bgColor="#6b9bff">기타/무관 10명</S.ProjectSpan>
          <S.ProjectSpan bgColor="#6b9bff">2022-06-09 ~ 2022-06-29</S.ProjectSpan>
          <S.ProjectSpan bgColor="#6b9bff">월단가: 10~1만원</S.ProjectSpan>
        </S.FlexDiv>
        <S.BetweenDiv top="1rem">
          <S.DayPTag>프로젝트를 20222-06-08에 등록하였습니다.</S.DayPTag>
          <S.FlexDiv>
            <S.ProjectSpan bgColor="#ff6b6b">지원자 0</S.ProjectSpan>
            <S.ProjectSpan bgColor="#ff6b6b">인터뷰요청자 0</S.ProjectSpan>
          </S.FlexDiv>
        </S.BetweenDiv>
      </S.ColorDiv>
    </S.Container>
  );
};

export default ProjectList;
