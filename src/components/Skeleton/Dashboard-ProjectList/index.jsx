import Skeleton from 'react-loading-skeleton';
import * as S from './style';

import 'react-loading-skeleton/dist/skeleton.css';

const ProjectListSkeleton = () => {
  return (
    <S.Container>
      <S.ColorDiv>
        <S.BetweenDiv>
          <S.SpanTag>
            <Skeleton circle width={50} height={50} />
          </S.SpanTag>
          <S.SpanTag>
            <Skeleton width={100} height={30} />
          </S.SpanTag>
        </S.BetweenDiv>
        <S.Title>
          <Skeleton height={40} />
        </S.Title>
        <S.UlTag>
          <S.RelativeLi>
            <Skeleton height={40} />
          </S.RelativeLi>
        </S.UlTag>
        <S.BetweenDiv top="1rem">
          <S.DayPTag>
            <Skeleton height={30} />
          </S.DayPTag>
        </S.BetweenDiv>
      </S.ColorDiv>
    </S.Container>
  );
};

export default ProjectListSkeleton;
