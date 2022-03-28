import * as S from './style';
import Account from 'assets/images/account-off.png';
import Heart from 'assets/images/favorite-off.png';
import People from 'assets/images/people-off.png';
import Project from 'assets/images/project-off.png';
import Search from 'assets/images/search-off.png';

const GridBottom = () => {
  return (
    <S.Container>
      <S.Ultag>
        <S.Litag>
          <S.Img src={Search} alt="search" />
          <S.Spantag>검색</S.Spantag>
        </S.Litag>
        <S.Litag>
          <S.Img src={Heart} alt="heart" />
          <S.Spantag>찜목록</S.Spantag>
        </S.Litag>
        <S.Litag>
          <S.Img src={People} alt="people" />
          <S.Spantag>프리랜서</S.Spantag>
        </S.Litag>
        <S.Litag>
          <S.Img src={Project} alt="search" />
          <S.Spantag>프로젝트</S.Spantag>
        </S.Litag>
        <S.Litag>
          <S.Img src={Account} alt="search" />
          <S.Spantag>마이보드</S.Spantag>
        </S.Litag>
      </S.Ultag>
    </S.Container>
  );
};

export default GridBottom;
