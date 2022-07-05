import { useState, useEffect, useRef, useCallback } from 'react';

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { v4 as uuidv4 } from 'uuid';
import * as S from './style';

import samsungImg from 'assets/images/samsung.png';
import Loader from 'components/Loader';
import useInfiniteScroll from 'hooks/useInfiniteScroll';

import { FILTERED_DATA } from 'utils/config/api';

const ListFreelancer = ({ togglePositionType }) => {
  const [developerState, setDeveloperState] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [{ developer, publisher, designer, planner }] = togglePositionType;

  console.log(togglePositionType);

  const getDeveloperLists = async () => {
    try {
      const {
        data: { freelancerSimpleResponseList },
      } = await FILTERED_DATA(
        'developers?positionType=DEVELOPER&majorSkillKeywords=java&minorSkill=&hopeWorkStates=&positionWorkManShips=&workArea=',
      );

      setDeveloperState(freelancerSimpleResponseList);
      // setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (developer) {
      getDeveloperLists();
    }
  }, [developer]);

  console.log(developerState);
  return (
    <S.FrameFreelancer>
      {developerState.map((list, index) => {
        return (
          <S.ContainerFreelancer key={list.freelancerNum}>
            <S.ContainerLink to="/partner-detail">
              <S.ContainerSwiper introBackGround={list?.introBackGround}>
                <Swiper
                  navigation
                  // install Swiper modules
                  modules={[Navigation, Pagination]}
                  spaceBetween={20}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                >
                  <SwiperSlide>
                    <S.PersonFlexCenter>
                      {list?.positionName} {list?.freelancerName}
                    </S.PersonFlexCenter>
                  </SwiperSlide>
                  <SwiperSlide>
                    <S.PersonFlexCenter>
                      <img src={samsungImg} alt="" style={{ width: '100px', textAlign: 'center', display: 'flex' }} />
                    </S.PersonFlexCenter>
                  </SwiperSlide>
                </Swiper>
              </S.ContainerSwiper>
              <S.ContainerExperience>
                <S.ContainerNameHeart>
                  <S.FreelancerName>
                    {list.freelancerName} | {list.careerYear}년 경력 개발자
                  </S.FreelancerName>
                  <S.FreelancerHeart>♡</S.FreelancerHeart>
                </S.ContainerNameHeart>
                <S.FreelancerTitle>{list.greeting}</S.FreelancerTitle>
                <S.ContainerFreelancerStack>
                  {list?.skills.map((stack, index) => (
                    <S.FreelancerStack key={`skills${index + 1}`}> {stack}</S.FreelancerStack>
                  ))}
                </S.ContainerFreelancerStack>

                {list?.projectNames.length > 0 && (
                  <div>
                    <S.FreelancerDescription> 수행 프로젝트: </S.FreelancerDescription>
                    {list?.projectNames.map((project, index) => (
                      <S.FreelancerDescription key={`projectNames${index + 1}`}> {project} </S.FreelancerDescription>
                    ))}
                  </div>
                )}
              </S.ContainerExperience>
            </S.ContainerLink>
          </S.ContainerFreelancer>
        );
      })}
    </S.FrameFreelancer>
  );
};

export default ListFreelancer;
