import { Link, useNavigate } from 'react-router-dom';
import * as S from './style';

import Account from 'assets/images/account-off.png';
import Heart from 'assets/images/favorite-off.png';
import People from 'assets/images/people-off.png';
import Project from 'assets/images/project-off.png';
import Search from 'assets/images/search-off.png';

const GridBottom = () => {
  const token = window.localStorage.accessToken;
  const member = localStorage.getItem('memberType');

  const navigate = useNavigate();

  const handleHeartList = () => {
    if (!token) navigate('/login');
    if (member === '"FREELANCER"') navigate('/myboard-freelancer/project');
    if (member === '"ENTERPRISE"') navigate('/dashboard/scrap');
  };

  const handleBoardList = () => {
    if (!token) navigate('/login');
    if (member === '"FREELANCER"') navigate('/myboard-freelancer/ongoing');
    if (member === '"ENTERPRISE"') navigate('/dashboard/enterprise');
  };
  return (
    <S.Container>
      <S.Ultag>
        <S.Litag>
          <Link to="/search">
            <S.Img src={Search} alt="search" />
            <S.Spantag>검색</S.Spantag>
          </Link>
        </S.Litag>
        <S.Litag onClick={handleHeartList}>
          <S.Img src={Heart} alt="heart" />
          <S.Spantag>찜목록</S.Spantag>
        </S.Litag>
        <S.Litag>
          <Link to="/partner-list">
            <S.Img src={People} alt="people" />
            <S.Spantag>프리랜서</S.Spantag>
          </Link>
        </S.Litag>
        <S.Litag>
          <Link to="/project-list">
            <S.Img src={Project} alt="search" />
            <S.Spantag>프로젝트</S.Spantag>
          </Link>
        </S.Litag>
        <S.Litag onClick={handleBoardList}>
          <S.Img src={Account} alt="search" />
          <S.Spantag>마이보드</S.Spantag>
        </S.Litag>
      </S.Ultag>
    </S.Container>
  );
};

export default GridBottom;
