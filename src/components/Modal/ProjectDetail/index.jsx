import * as S from './style';

import ProjectButton from 'components/Button/ProjectButton';

const ProjectDetailModal = ({ checkToken }) => {
  return (
    <S.BackColorDiv>
      <S.TextDiv>
        <S.PTag color="white" bottom="0.5rem">
          0명이 지원했습니다
        </S.PTag>
        <S.PTag color="#ff6b6b">마감 3일전</S.PTag>
      </S.TextDiv>
      <div>
        <S.SpanButton bgColor="#cc3838" right="0.5rem" border="none" padding="1.5rem" onClick={checkToken}>
          바로 지원하기
        </S.SpanButton>
        <S.SpanButton bgColor="#3c3c3c" border="white" padding="3rem">
          문의하기
        </S.SpanButton>
      </div>
    </S.BackColorDiv>
  );
};

export default ProjectDetailModal;
