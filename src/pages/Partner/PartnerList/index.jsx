import FilterButton from 'components/Button/FilterButton';
import ListFreelancer from 'components/ListFreelancer';
import Footer from 'layouts/Footer';
import Header from 'layouts/Header';

import * as S from 'styles/Page';

const ListPartner = () => {
  return (
    <>
      <Header />
      <S.ContainerFrame>
        <S.FrameList>
          <S.ContainerTopLetter>
            <S.TopLetterExtra>이랜서가 보증하는 IT 파트너스 38만명</S.TopLetterExtra>
            <br />
            <S.TopLetterSubject>
              프로젝트 등록하면 <br /> 더 정확한 추천을 받을 수 있어요
            </S.TopLetterSubject>
          </S.ContainerTopLetter>
          {/* =======  FilterButton Component ======= */}
          <FilterButton />
          {/* =======  ListFreelancer Component ======= */}
          <ListFreelancer />
        </S.FrameList>
      </S.ContainerFrame>
      <Footer />
    </>
  );
};

export default ListPartner;
