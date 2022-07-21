import { useSearchParams } from 'react-router-dom';

import FreelancerSearch from './FreelancerSearch';

import * as S from './style';

import GridBottom from 'components/Modal/GridBottom';
import SearchProjectList from 'components/SearchProjectList';

import Footer from 'layouts/Footer';
import SearchHeader from 'layouts/Header/Search';

const SearchList = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchValue = searchParams.get('searchKey');

  return (
    <S.Container searchPage>
      <SearchHeader top="2rem" searchPage searchValue={searchValue} />
      <S.MarginDiv>
        <S.ProjectDiv>
          <FreelancerSearch searchValue={searchValue} />
          <SearchProjectList searchValue={searchValue} />
        </S.ProjectDiv>
      </S.MarginDiv>
      <Footer />
      <GridBottom />
    </S.Container>
  );
};

export default SearchList;
