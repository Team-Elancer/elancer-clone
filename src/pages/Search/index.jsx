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
        <S.SubTitle>이랜서가 보증하는 IT 파트너스 39만명</S.SubTitle>
        <S.ProjectDiv>
          <SearchProjectList />
        </S.ProjectDiv>
      </S.MarginDiv>
      <Footer />
      <GridBottom />
    </S.Container>
  );
};

export default SearchList;
