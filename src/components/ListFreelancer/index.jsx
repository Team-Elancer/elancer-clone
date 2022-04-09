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

import samsungImg from 'assets/images/samsung.png';
import Loader from 'components/Loader';
import useInfiniteScroll from 'hooks/useInfiniteScroll';

import * as S from 'styles/MainContent';

const ListFreelancer = () => {
  const [page, setPage] = useState(1);

  const { loading, apiData, hasMore } = useInfiniteScroll(page);

  const observer = useRef();

  const lastComponent = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore) {
            setPage((prev) => prev + 1);
          }
        },
        { threshold: 1 },
      );
      if (node) observer.current.observe(node);
    },
    [loading, hasMore],
  );

  return (
    <S.FrameFreelancer>
      {apiData.map((list, index) => {
        if (apiData.length === index + 1) {
          return (
            <S.ContainerFreelancer key={uuidv4()} ref={lastComponent}>
              <S.ContainerLink to="/partner-detail">
                <S.ContainerSwiper>
                  <Swiper
                    navigation
                    // install Swiper modules
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                  >
                    <SwiperSlide>
                      <S.PersonFlexCenter>Frank Kim</S.PersonFlexCenter>
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
                    <S.FreelancerName>{list.title}</S.FreelancerName>
                    <S.FreelancerHeart>♡</S.FreelancerHeart>
                  </S.ContainerNameHeart>
                  <S.FreelancerTitle>{list.title}</S.FreelancerTitle>
                  <S.ContainerFreelancerStack>
                    <S.FreelancerStack>React</S.FreelancerStack>
                  </S.ContainerFreelancerStack>
                  <S.FreelancerDescription>{list.body}</S.FreelancerDescription>
                  <S.FreelancerReview>
                    <S.ReviewRate> ★ 5.0 </S.ReviewRate>
                    <S.ReviewTotal>(조회수 1904)</S.ReviewTotal>
                  </S.FreelancerReview>
                </S.ContainerExperience>
              </S.ContainerLink>
            </S.ContainerFreelancer>
          );
        }
        return (
          <S.ContainerFreelancer key={uuidv4()}>
            <S.ContainerLink to="/partner-detail">
              <S.ContainerSwiper>
                <Swiper
                  navigation
                  // install Swiper modules
                  modules={[Navigation, Pagination]}
                  spaceBetween={20}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                >
                  <SwiperSlide>
                    <S.PersonFlexCenter>Frank Kim</S.PersonFlexCenter>
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
                  <S.FreelancerName>{list.title}</S.FreelancerName>
                  <S.FreelancerHeart>♡</S.FreelancerHeart>
                </S.ContainerNameHeart>
                <S.FreelancerTitle>{list.title}</S.FreelancerTitle>
                <S.ContainerFreelancerStack>
                  <S.FreelancerStack>React</S.FreelancerStack>
                </S.ContainerFreelancerStack>
                <S.FreelancerDescription>{list.body}</S.FreelancerDescription>
                <S.FreelancerReview>
                  <S.ReviewRate> ★ 5.0 </S.ReviewRate>
                  <S.ReviewTotal>(조회수 1904)</S.ReviewTotal>
                </S.FreelancerReview>
              </S.ContainerExperience>
            </S.ContainerLink>
          </S.ContainerFreelancer>
        );
      })}

      {loading && <Loader />}
    </S.FrameFreelancer>
  );
};

export default ListFreelancer;
