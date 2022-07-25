import { useState, useEffect, useCallback } from 'react';

import ListFreelancer from 'components/ListFreelancer';

import Loader from 'components/Loader';

import * as S from 'styles/Page';

import { FILTERED_DATA } from 'utils/config/api';

const FreelancerSearch = ({ searchValue }) => {
  // For infinite scroll

  const [hasMore, setHasMore] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // For position API data
  const [filteredPosition, setFilteredPosition] = useState([]);

  // ============ Default API - testing ============
  useEffect(() => {
    if (pageNumber === 0) {
      getPositionLists();
    }
  }, [searchValue]);

  // ============ Check the position type + Hit API accordingly ============
  useEffect(() => {
    if (pageNumber > 0 && hasMore) getNextPage();
  }, [pageNumber]);

  // ============ Set page to 0 for new category when clicked + active CSS ============

  // ============ Get default data  ============
  const getPositionLists = async () => {
    setIsLoading(true);

    try {
      const {
        data: { freelancerSimpleResponseList, hasNext },
        data,
      } = await FILTERED_DATA(`/freelancers/search?searchKey=${searchValue}`);

      setFilteredPosition([...freelancerSimpleResponseList]);
      setHasMore(hasNext);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  // ============ Get next page data => old data + new data ============
  const getNextPage = useCallback(async () => {
    setIsLoading(true);
    try {
      const {
        data: { freelancerSimpleResponseList, hasNext },
      } = await FILTERED_DATA(`/freelancers/search?searchKey=${searchValue}&page=${pageNumber}`);

      setFilteredPosition((prev) => [...prev, ...freelancerSimpleResponseList]);
      setHasMore(hasNext);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  }, [pageNumber]);

  //  ============ Get more data when clicked ============

  const onAddData = () => {
    if (hasMore) {
      setPageNumber((prev) => prev + 1);
    }
  };

  return (
    <S.ContainerFrame>
      <S.FrameList>
        <S.ContainerTopLetter>
          <S.TopLetterExtra>이랜서가 보증하는 IT 파트너스 39만명</S.TopLetterExtra>
          <S.TopLetterSubject> {searchValue} 관련 프로젝트</S.TopLetterSubject>
        </S.ContainerTopLetter>

        {/* =======  ListFreelancer Component ======= */}

        <ListFreelancer filteredPosition={filteredPosition} />
        {isLoading && <Loader />}

        {filteredPosition.length === 0 && (
          <S.TopLetterExtra style={{ borderBottom: '1px solid rgba(215,215,215,1)' }}>
            검색 결과가 없습니다.
          </S.TopLetterExtra>
        )}
        {filteredPosition.length > 0 && hasMore && (
          <S.ButtonContainer onClick={onAddData}>
            <S.ButtonLastSpan>더보기 </S.ButtonLastSpan>
          </S.ButtonContainer>
        )}
      </S.FrameList>
    </S.ContainerFrame>
  );
};

export default FreelancerSearch;
