import { useState, useEffect, useRef, useCallback } from 'react';

import { useNavigate } from 'react-router-dom';

import FilterButton from './FilterButton';
import ListFreelancer from 'components/ListFreelancer';

import Loader from 'components/Loader';

import Footer from 'layouts/Footer';
import Header from 'layouts/Header';

import * as S from 'styles/Page';

import { FILTERED_DATA } from 'utils/config/api';

const ListPartner = () => {
  const token = window.localStorage.accessToken;
  const member = localStorage.getItem('memberType');
  const navigate = useNavigate();

  // For infinite scroll
  const observer = useRef();
  const [hasMore, setHasMore] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [URL, setURL] = useState(
    `/developers?positionType=DEVELOPER&majorSkillKeywords=&hopeWorkState=&positionWorkManShip=&workArea=&`,
  );

  const [matchPosition, setMatchPosition] = useState('⚙️ 개발자');

  const [PositionType, setPositionType] = useState('⚙️ 개발');

  // For position API data
  const [filteredPosition, setFilteredPosition] = useState([]);

  // ============ Default API ============
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
  const handleDefaultPage = (e) => {
    const type = e.target.innerHTML;
    setMatchPosition(type);
    setPageNumber(0);

    switch (type) {
      case '🛠 퍼블리셔':
        setPositionType('🛠 퍼블리싱');
        setURL(`/publishers?positionType=PUBLISHER&majorSkillKeywords=&hopeWorkState=&positionWorkManShip=&workArea=&`);

        break;
      case '🎨 디자이너':
        setPositionType('🎨 디자인');
        setURL(`/designers?positionType=DESIGNER&majorSkillKeywords=&hopeWorkState=&positionWorkManShip=&workArea=&`);
        break;
      case '📝 기획자':
        setPositionType('📝 기획');
        setURL(`/planners?positionType=PLANNER&majorSkillKeywords=&hopeWorkState=&positionWorkManShip=&workArea=&`);
        break;
      case '🔗 기타':
        setPositionType('🔗 기타');
        setURL(`/positionEtcers?positionType=ETC&majorSkillKeywords=&hopeWorkState=&positionWorkManShip=&workArea=&`);
        break;
      default:
        setPositionType('⚙️ 개발');
        setURL(`/developers?positionType=DEVELOPER&majorSkillKeywords=&hopeWorkState=&positionWorkManShip=&workArea=&`);
        break;
    }
  };

  // ============ Get default data  ============
  const getPositionLists = async () => {
    setIsLoading(true);
    try {
      const {
        data: { freelancerSimpleResponseList, hasNext },
      } = await FILTERED_DATA(URL);

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
      } = await FILTERED_DATA(`${URL}page=${pageNumber}`);

      setFilteredPosition((prev) => [...prev, ...freelancerSimpleResponseList]);
      setHasMore(hasNext);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
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

  const addProject = () => {
    if (token && member === '"FREELANCER"') {
      navigate('/myboard-freelancer/profile-modify');
    } else {
      navigate('/login');
    }
  };

  return (
    <>
      <S.ContainerHeader>
        <Header />
      </S.ContainerHeader>
      <S.ContainerFrame>
        <S.FrameList>
          <S.ContainerTopLetter>
            <S.TopLetterExtra>이랜서가 보증하는 IT 파트너스 38만명</S.TopLetterExtra>
            <br />
            <S.TopLetterSubject>
              <div>
                프로젝트 등록하면 <br /> 더 정확한 추천을 받을 수 있어요
              </div>
              <S.RegisterButton onClick={addProject}>프로젝트 등록</S.RegisterButton>
            </S.TopLetterSubject>
          </S.ContainerTopLetter>

          {/* =======  FilterButton Component ======= */}
          <FilterButton
            matchPosition={matchPosition}
            setMatchPosition={setMatchPosition}
            handleDefaultPage={handleDefaultPage}
            setURL={setURL}
            setIsLoading={setIsLoading}
            PositionType={PositionType}
            setPositionType={setPositionType}
          />
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
