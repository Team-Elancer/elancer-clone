import { useState, useEffect } from 'react';

import FilterButton from 'components/Button/FilterButton';
import ListFreelancer from 'components/ListFreelancer';
import Footer from 'layouts/Footer';
import Header from 'layouts/Header';

import * as S from 'styles/Page';

const ListPartner = () => {
  const [togglePositionType, setTogglePositionType] = useState([
    {
      developer: true,
      publisher: false,
      designer: false,
      planner: false,
      etc: false,
    },
  ]);

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
  };

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
          <ListFreelancer togglePositionType={togglePositionType} />
        </S.FrameList>
      </S.ContainerFrame>
      <Footer />
    </>
  );
};

export default ListPartner;
