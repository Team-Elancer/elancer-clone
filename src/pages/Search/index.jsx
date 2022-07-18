import FreelancerSearch from './FreelancerSearch';

import * as S from './style';

import GridBottom from 'components/Modal/GridBottom';
import SearchProjectList from 'components/SearchProjectList';

import Footer from 'layouts/Footer';
import Header from 'layouts/Header';

const SearchList = () => {
  return (
    <S.Container>
      <Header />
      <S.MarginDiv>
        <S.ProjectDiv>
          <FreelancerSearch />
          <SearchProjectList />
        </S.ProjectDiv>
      </S.MarginDiv>
      <Footer />
      <GridBottom />
    </S.Container>
  );
};

export default SearchList;
