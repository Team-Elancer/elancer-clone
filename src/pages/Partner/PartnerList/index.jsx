import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import FilterButton from 'components/Button/FilterButton';
import ListFreelancer from 'components/ListFreelancer';
import Footer from 'layouts/Footer';
import Header from 'layouts/Header';

import * as S from 'styles/Page';

const ListPartner = () => {
  const [developerLists, setDeveloperLists] = useState(false);
  const [publisherLists, setPublisherLists] = useState(false);
  const [designerLists, setDesignerLists] = useState(false);
  const [plannerLists, setPlannerLists] = useState(false);

  const [togglePositionType, setTogglePositionType] = useState([
    {
      developer: true,
      publisher: false,
      designer: false,
      planner: false,
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
        },
      ]);
    }

    // if (e.target.name === 'publisher') {
    //   setTogglePositionType([
    //     {
    //       developer: false,
    //       publisher: true,
    //       designer: false,
    //       planner: false,
    //     },
    //   ]);
    // }

    // if (e.target.name === 'designer') {
    //   setTogglePositionType([
    //     {
    //       developer: false,
    //       publisher: false,
    //       designer: true,
    //       planner: false,
    //     },
    //   ]);
    // }

    // if (e.target.name === 'planner') {
    //   setTogglePositionType([
    //     {
    //       developer: false,
    //       publisher: false,
    //       designer: false,
    //       planner: true,
    //     },
    //   ]);
    // }
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
          <FilterButton
            setTogglePositionType={setTogglePositionType}
            handlePositionList={handlePositionList}
            // setDeveloperLists={setDeveloperLists}
            // setPublisherList={setPublisherLists}
            // setDesignerLists={setDesignerLists}
            // setPlannerList={setPlannerLists}
          />
          {/* =======  ListFreelancer Component ======= */}
          <ListFreelancer
            togglePositionType={togglePositionType}
            // developerLists={developerLists}
            // publisherLists={publisherLists}
            // designerLists={designerLists}
            // plannerLists={plannerLists}
          />
        </S.FrameList>
      </S.ContainerFrame>
      <Footer />
    </>
  );
};

export default ListPartner;
