import * as S from './style';

const ProjectButton = ({ right = '0rem', text = '더보기' }) => {
  return (
    <div>
      <S.SpanButton right={right}>{text}</S.SpanButton>
    </div>
  );
};

export default ProjectButton;
