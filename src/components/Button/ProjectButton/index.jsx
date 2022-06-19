import * as S from './style';

const ProjectButton = ({ right = '0rem', text = '더보기', checkToken }) => {
  return (
    <div>
      <S.SpanButton right={right} onClick={checkToken}>
        {text}
      </S.SpanButton>
    </div>
  );
};

export default ProjectButton;
