import Skeleton from 'react-loading-skeleton';
import * as S from './style';

import 'react-loading-skeleton/dist/skeleton.css';

const ScrapSkeleton = () => {
  return (
    <S.Container>
      <S.ColorDiv>
        <S.SpanTag>
          <Skeleton width={300} height={200} />
        </S.SpanTag>
        <div>
          <S.FlexDiv>
            <S.SpanTag>
              <Skeleton width={300} height={30} />
            </S.SpanTag>
            <S.SpanTag>
              <Skeleton circle width={50} height={50} />
            </S.SpanTag>
          </S.FlexDiv>
          <S.MarginDiv>
            <S.SpanTag>
              <Skeleton width={400} height={30} />
            </S.SpanTag>
          </S.MarginDiv>
          <S.MarginDiv>
            <S.SpanTag>
              <Skeleton width={450} height={30} />
            </S.SpanTag>
          </S.MarginDiv>
          <S.MarginDiv>
            <S.SpanTag>
              <Skeleton width={450} height={30} />
            </S.SpanTag>
          </S.MarginDiv>
        </div>
      </S.ColorDiv>
    </S.Container>
  );
};

export default ScrapSkeleton;
