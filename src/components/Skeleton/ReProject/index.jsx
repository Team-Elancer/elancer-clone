import Skeleton from 'react-loading-skeleton';
import * as S from './style';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonReProject = () => {
  const Cardmap = [1, 2, 3];

  return (
    <S.Container>
      <S.SecondDiv>
        {Cardmap.map((a) => {
          return (
            <S.ProjectDiv key={a}>
              <S.UpDiv bgColor="black">
                <Skeleton height={170} />
              </S.UpDiv>
              <S.DownDiv>
                <S.DownSmallDiv>
                  <S.BigSpan>
                    <S.MobileCircle>
                      <Skeleton circle width={30} height={30} />
                      <S.MarginRight />
                      <Skeleton circle width={30} height={30} />
                    </S.MobileCircle>
                    <S.TabletCircle>
                      <Skeleton circle width={40} height={40} />
                      <S.MarginRight />
                      <Skeleton circle width={40} height={40} />
                    </S.TabletCircle>
                  </S.BigSpan>
                  <S.MobileTitle>
                    <Skeleton width={150} height={20} />
                  </S.MobileTitle>
                  <S.TabletTitle>
                    <Skeleton width={225} height={30} />
                  </S.TabletTitle>
                  <S.MobileTitle>
                    <Skeleton width={120} height={20} />
                  </S.MobileTitle>
                  <S.TabletTitle>
                    <Skeleton width={180} height={30} />
                  </S.TabletTitle>
                </S.DownSmallDiv>
              </S.DownDiv>
            </S.ProjectDiv>
          );
        })}
      </S.SecondDiv>
    </S.Container>
  );
};

export default SkeletonReProject;
