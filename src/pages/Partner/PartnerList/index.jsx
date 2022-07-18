import axios from 'axios';

import { useState, useEffect, useRef, useCallback } from 'react';

import FilterButton from 'components/Button/FilterButton';
import ListFreelancer from 'components/ListFreelancer';

import Loader from 'components/Loader';

import Footer from 'layouts/Footer';
import Header from 'layouts/Header';

import * as S from 'styles/Page';

import { BaseUrl } from 'utils/config/api';

const ListPartner = () => {
  // For infinite scroll
  const observer = useRef();
  const [hasMore, setHasMore] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // For position API data
  const [filteredPosition, setFilteredPosition] = useState([]);

  const [togglePositionType, setTogglePositionType] = useState([
    {
      developer: true,
      publisher: false,
      designer: false,
      planner: false,
      etc: false,
    },
  ]);
  const [{ developer, publisher, designer, planner, etc }] = togglePositionType;

  // ============ Set page to 0 for new category when clicked ============
  const handlePositionList = (e) => {
    if (e.target.name === 'developer') {
      setTogglePositionType([
        {
          developer: true,
          publisher: false,
          designer: false,
          planner: false,
          etc: false,
        },
      ]);
    }
    if (e.target.name === 'publisher') {
      setTogglePositionType([
        {
          developer: false,
          publisher: true,
          designer: false,
          planner: false,
          etc: false,
        },
      ]);
    }
    if (e.target.name === 'designer') {
      setTogglePositionType([
        {
          developer: false,
          publisher: false,
          designer: true,
          planner: false,
          etc: false,
        },
      ]);
    }
    if (e.target.name === 'planner') {
      setTogglePositionType([
        {
          developer: false,
          publisher: false,
          designer: false,
          planner: true,
          etc: false,
        },
      ]);
    }
    if (e.target.name === 'etc') {
      setTogglePositionType([
        {
          developer: false,
          publisher: false,
          designer: false,
          planner: false,
          etc: true,
        },
      ]);
    }

    setPageNumber(0);
  };

  // ============ Check the position type + Hit API accordingly ============
  useEffect(() => {
    let positionList = [];

    if (developer) {
      positionList = ['developers', 'DEVELOPER'];
    }
    if (publisher) {
      positionList = ['publishers', 'PUBLISHER'];
    }
    if (designer) {
      positionList = ['designers', 'DESIGNER'];
    }
    if (planner) {
      positionList = ['planners', 'PLANNER'];
    }
    if (etc) {
      positionList = ['positionEtcers', 'ETC'];
    }

    const URL = `${BaseUrl}/${positionList[0]}?positionType=${positionList[1]}&majorSkillKeywords=&hopeWorkStates=&positionWorkManShips=&workArea=&`;

    if (pageNumber === 0) getPositionLists(URL);
    if (pageNumber > 0) getNextPage(URL);
  }, [developer, publisher, designer, planner, etc, pageNumber]);

  // ============ Get default data  ============
  const getPositionLists = async (URL) => {
    setIsLoading(true);
    try {
      const {
        data: { freelancerSimpleResponseList, hasNext },
      } = await axios.get(URL);
      setFilteredPosition([...freelancerSimpleResponseList]);
      setHasMore(hasNext);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  // ============ Get next page data => old data + new data ============
  const getNextPage = async (URL) => {
    if (pageNumber === 0) return;
    setIsLoading(true);

    try {
      const {
        data: { freelancerSimpleResponseList, hasNext },
      } = await axios.get(`${URL}page=${pageNumber}`);

      setFilteredPosition((prev) => [...prev, ...freelancerSimpleResponseList]);
      setHasMore(hasNext);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

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
          <FilterButton togglePositionType={togglePositionType} handlePositionList={handlePositionList} />
          {/* =======  ListFreelancer Component ======= */}

          <ListFreelancer filteredPosition={filteredPosition} lastComponent={lastComponent} />
          {isLoading && <Loader />}
        </S.FrameList>
      </S.ContainerFrame>
      <Footer />
    </>
  );
};

export default ListPartner;
