import * as S from './style';

import FilterButton from 'components/Button/FilterButton';
import Header from 'components/Header';
import ListFreelancer from 'components/ListFreelancer';

const ListPartner = () => {
  return (
    <>
      <Header />
      <S.FrameListPartner>
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
      </S.FrameListPartner>
    </>
  );
};

export default ListPartner;
