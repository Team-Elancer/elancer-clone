import { useState, useEffect, useRef, useCallback } from 'react';

import ListFreelancer from 'components/ListFreelancer';

import Loader from 'components/Loader';

import * as S from 'styles/Page';

import { FILTERED_DATA, CLIENT_FREELANCER } from 'utils/config/api';

const FreelancerSearch = ({ searchValue }) => {
  // For infinite scroll
  const observer = useRef();
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
  }, [URL]);

  // ============ Check the position type + Hit API accordingly ============
  useEffect(() => {
    if (pageNumber > 0 && hasMore) getNextPage();
  }, [pageNumber, URL]);

  // ============ Set page to 0 for new category when clicked + active CSS ============

  // ============ Get default data  ============
  const getPositionLists = async () => {
    setIsLoading(true);
    try {
      const {
        data: { freelancerSimpleResponseList, hasNext },
      } = await FILTERED_DATA(`URL/${searchValue}`);

      setFilteredPosition([...freelancerSimpleResponseList]);
      setHasMore(hasNext);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  // ============ Get next page data => old data + new data ============
  const getNextPage = useCallback(async () => {
    try {
      const {
        data: { freelancerSimpleResponseList, hasNext },
      } = await FILTERED_DATA(`${URL}page=${pageNumber}`);

      setFilteredPosition((prev) => [...prev, ...freelancerSimpleResponseList]);
      setHasMore(hasNext);
    } catch (err) {
      console.log(err);
    }
  }, [pageNumber]);

  //  ============ Get the last component for infinite scroll ============
  const lastComponent = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore) {
            setPageNumber((prev) => prev + 1);
          }
        },
        { threshold: 1 },
      );
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore],
  );

  return (
    <S.ContainerFrame>
      <S.FrameList>
        <S.ContainerTopLetter>
          <S.TopLetterExtra>이랜서가 보증하는 IT 파트너스 39만명</S.TopLetterExtra>
          <S.TopLetterSubject> {searchValue} 관련 프로젝트</S.TopLetterSubject>
        </S.ContainerTopLetter>

        {/* =======  ListFreelancer Component ======= */}

        <ListFreelancer filteredPosition={filteredPosition} lastComponent={lastComponent} />
        {isLoading && <Loader />}
      </S.FrameList>
    </S.ContainerFrame>
  );
};

export default FreelancerSearch;
