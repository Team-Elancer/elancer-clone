// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import * as S from './style';

import { DATA } from 'utils/DummyData';

const ListFreelancer = () => {
  return (
    <S.FrameFreelancer>
      {DATA.map((list) => (
        <S.ContainerFreelancer key={list.id}>
          <S.ContainerSwiper>
            <Swiper
              navigation
              // install Swiper modules
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              // onSwiper={(swiper) => console.log(swiper)}
              // onSlideChange={() => console.log('slide change')}
            >
              <SwiperSlide>
                <S.PersonFlexCenter>{list.cardName}</S.PersonFlexCenter>
              </SwiperSlide>
              {list.img && (
                <SwiperSlide>
                  <S.PersonFlexCenter>
                    <img src={list.img} alt="" style={{ width: '100px', textAlign: 'center', display: 'flex' }} />
                  </S.PersonFlexCenter>
                </SwiperSlide>
              )}
            </Swiper>
          </S.ContainerSwiper>
          <S.ContainerExperience>
            <S.ContainerNameHeart>
              <S.FreelancerName>{list.freelancer}</S.FreelancerName>
              <S.FreelancerHeart>♡</S.FreelancerHeart>
            </S.ContainerNameHeart>
            <S.FreelancerTitle>{list.title}</S.FreelancerTitle>
            <S.ContainerFreelancerStack>
              {list.stack.map((stack) => (
                <S.FreelancerStack key={stack}>{stack}</S.FreelancerStack>
              ))}
            </S.ContainerFreelancerStack>
            <S.FreelancerDescription>{list.description}</S.FreelancerDescription>
            <S.FreelancerReview>
              <S.ReviewRate> {list.ReviewRate} </S.ReviewRate>
              <S.ReviewTotal>{list.ReviewTotal}</S.ReviewTotal>
            </S.FreelancerReview>
          </S.ContainerExperience>
        </S.ContainerFreelancer>
      ))}
    </S.FrameFreelancer>
  );
};

export default ListFreelancer;
