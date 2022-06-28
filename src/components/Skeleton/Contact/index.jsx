import Skeleton from 'react-loading-skeleton';
import * as S from './style';

import 'react-loading-skeleton/dist/skeleton.css';

const MyContactSkeleton = () => {
  return (
    <S.Colordiv>
      <S.FlexDiv>
        <S.DisplayFlexDiv>
          <S.NoAnwser>
            <Skeleton circle width={40} height={40} />
          </S.NoAnwser>
          <S.TitleP>
            <Skeleton height={35} />
          </S.TitleP>
        </S.DisplayFlexDiv>
        <S.DisplayFlexDiv>
          <S.DateP>
            <Skeleton height={35} />
          </S.DateP>
          <S.ButtonP>
            <Skeleton circle width={40} height={40} />
          </S.ButtonP>
        </S.DisplayFlexDiv>
      </S.FlexDiv>
    </S.Colordiv>
  );
};

export default MyContactSkeleton;
