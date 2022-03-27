// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import * as S from './style';
import samsungPic from 'assets/images/samsung.png';

const ListFreelancer = () => {
  return (
    <S.FrameFreelancer>
      <S.ContainerFreelancer>
        <S.ContainerSwiper>
          <Swiper
            navigation
            // install Swiper modules
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <S.PersonFlexCenter>개발자 e*lancer team</S.PersonFlexCenter>
            </SwiperSlide>
            <SwiperSlide>
              <S.PersonFlexCenter>
                <img src={samsungPic} alt="" style={{ width: '100px', textAlign: 'center', display: 'flex' }} />
              </S.PersonFlexCenter>
            </SwiperSlide>
          </Swiper>
        </S.ContainerSwiper>
        <S.ContainerExperience>
          <S.ContainerNameHeart>
            <S.FreelancerName>김*현 | 10년 경력 개발자</S.FreelancerName>
            <S.FreelancerHeart>♡</S.FreelancerHeart>
          </S.ContainerNameHeart>
          <S.FreelancerTitle>성장하는 개발자 김*현입니다.</S.FreelancerTitle>
          <S.ContainerFreelancerStack>
            <S.FreelancerStack>Front-end</S.FreelancerStack>
            <S.FreelancerStack>Back-end</S.FreelancerStack>
            <S.FreelancerStack>Java</S.FreelancerStack>
            <S.FreelancerStack>Spring</S.FreelancerStack>
            <S.FreelancerStack>React</S.FreelancerStack>
            <S.FreelancerStack>JavaScript</S.FreelancerStack>
            <S.FreelancerStack>Postgresql</S.FreelancerStack>
            <S.FreelancerStack>Angular</S.FreelancerStack>
            <S.FreelancerStack>C#</S.FreelancerStack>
            <S.FreelancerStack>Flutter</S.FreelancerStack>
            <S.FreelancerStack>Docker</S.FreelancerStack>
          </S.ContainerFreelancerStack>
          <S.FreelancerDescription>
            수행 프로젝트 : SK ONS E-HR 인사평가 시스템 고도화, 그린재킷 캐디 피 카드결제 앱, 다날 선불중게 플랫폼,
            롯데시네마 VOD 서비스, COMPAS도시문제해결플랫폼
          </S.FreelancerDescription>
          <S.FreelancerReview>
            <S.ReviewRate>★ 5.0 </S.ReviewRate>
            <S.ReviewTotal>(조회수 1904)</S.ReviewTotal>
          </S.FreelancerReview>
        </S.ContainerExperience>
      </S.ContainerFreelancer>

      <S.ContainerFreelancer>
        <S.ContainerSwiper>
          <Swiper
            navigation
            // install Swiper modules
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <S.PersonFlexCenter>개발자 팀 이랜*</S.PersonFlexCenter>
            </SwiperSlide>
          </Swiper>
        </S.ContainerSwiper>
        <S.ContainerExperience>
          <S.ContainerNameHeart>
            <S.FreelancerName>김*현 | 10년 경력 개발자</S.FreelancerName>
            <S.FreelancerHeart>♡</S.FreelancerHeart>
          </S.ContainerNameHeart>
          <S.FreelancerTitle>성장하는 개발자 김*현입니다.</S.FreelancerTitle>
          <S.ContainerFreelancerStack>
            <S.FreelancerStack>Front-end</S.FreelancerStack>
            <S.FreelancerStack>Back-end</S.FreelancerStack>
            <S.FreelancerStack>Java</S.FreelancerStack>
            <S.FreelancerStack>Spring</S.FreelancerStack>
            <S.FreelancerStack>React</S.FreelancerStack>
            <S.FreelancerStack>JavaScript</S.FreelancerStack>
            <S.FreelancerStack>Postgresql</S.FreelancerStack>
            <S.FreelancerStack>Angular</S.FreelancerStack>
            <S.FreelancerStack>C#</S.FreelancerStack>
            <S.FreelancerStack>Flutter</S.FreelancerStack>
            <S.FreelancerStack>Docker</S.FreelancerStack>
          </S.ContainerFreelancerStack>
          <S.FreelancerDescription>
            수행 프로젝트 : SK ONS E-HR 인사평가 시스템 고도화, 그린재킷 캐디 피 카드결제 앱, 다날 선불중게 플랫폼,
            롯데시네마 VOD 서비스, COMPAS도시문제해결플랫폼
          </S.FreelancerDescription>
          <S.FreelancerReview>
            <S.ReviewRate>★ 5.0 </S.ReviewRate>
            <S.ReviewTotal>(조회수 1904)</S.ReviewTotal>
          </S.FreelancerReview>
        </S.ContainerExperience>
      </S.ContainerFreelancer>

      <S.ContainerFreelancer>
        <S.ContainerSwiper>
          <Swiper
            navigation
            // install Swiper modules
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <S.PersonFlexCenter>개발자 팀 이랜*</S.PersonFlexCenter>
            </SwiperSlide>
          </Swiper>
        </S.ContainerSwiper>
        <S.ContainerExperience>
          <S.ContainerNameHeart>
            <S.FreelancerName>김*현 | 10년 경력 개발자</S.FreelancerName>
            <S.FreelancerHeart>♡</S.FreelancerHeart>
          </S.ContainerNameHeart>
          <S.FreelancerTitle>성장하는 개발자 김*현입니다.</S.FreelancerTitle>
          <S.ContainerFreelancerStack>
            <S.FreelancerStack>Front-end</S.FreelancerStack>
            <S.FreelancerStack>Back-end</S.FreelancerStack>
            <S.FreelancerStack>Java</S.FreelancerStack>
            <S.FreelancerStack>Spring</S.FreelancerStack>
            <S.FreelancerStack>React</S.FreelancerStack>
            <S.FreelancerStack>JavaScript</S.FreelancerStack>
            <S.FreelancerStack>Postgresql</S.FreelancerStack>
            <S.FreelancerStack>Angular</S.FreelancerStack>
            <S.FreelancerStack>C#</S.FreelancerStack>
            <S.FreelancerStack>Flutter</S.FreelancerStack>
            <S.FreelancerStack>Docker</S.FreelancerStack>
          </S.ContainerFreelancerStack>
          <S.FreelancerDescription>
            수행 프로젝트 : SK ONS E-HR 인사평가 시스템 고도화, 그린재킷 캐디 피 카드결제 앱, 다날 선불중게 플랫폼,
            롯데시네마 VOD 서비스, COMPAS도시문제해결플랫폼
          </S.FreelancerDescription>
          <S.FreelancerReview>
            <S.ReviewRate>★ 5.0 </S.ReviewRate>
            <S.ReviewTotal>(조회수 1904)</S.ReviewTotal>
          </S.FreelancerReview>
        </S.ContainerExperience>
      </S.ContainerFreelancer>

      <S.ContainerFreelancer>
        <S.ContainerSwiper>
          <Swiper
            navigation
            // install Swiper modules
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <S.PersonFlexCenter>개발자 팀 이랜*</S.PersonFlexCenter>
            </SwiperSlide>
          </Swiper>
        </S.ContainerSwiper>
        <S.ContainerExperience>
          <S.ContainerNameHeart>
            <S.FreelancerName>김*현 | 10년 경력 개발자</S.FreelancerName>
            <S.FreelancerHeart>♡</S.FreelancerHeart>
          </S.ContainerNameHeart>
          <S.FreelancerTitle>성장하는 개발자 김*현입니다.</S.FreelancerTitle>
          <S.ContainerFreelancerStack>
            <S.FreelancerStack>Front-end</S.FreelancerStack>
            <S.FreelancerStack>Back-end</S.FreelancerStack>
            <S.FreelancerStack>Java</S.FreelancerStack>
            <S.FreelancerStack>Spring</S.FreelancerStack>
            <S.FreelancerStack>React</S.FreelancerStack>
            <S.FreelancerStack>JavaScript</S.FreelancerStack>
            <S.FreelancerStack>Postgresql</S.FreelancerStack>
            <S.FreelancerStack>Angular</S.FreelancerStack>
            <S.FreelancerStack>C#</S.FreelancerStack>
            <S.FreelancerStack>Flutter</S.FreelancerStack>
            <S.FreelancerStack>Docker</S.FreelancerStack>
          </S.ContainerFreelancerStack>
          <S.FreelancerDescription>
            수행 프로젝트 : SK ONS E-HR 인사평가 시스템 고도화, 그린재킷 캐디 피 카드결제 앱, 다날 선불중게 플랫폼,
            롯데시네마 VOD 서비스, COMPAS도시문제해결플랫폼
          </S.FreelancerDescription>
          <S.FreelancerReview>
            <S.ReviewRate>★ 5.0 </S.ReviewRate>
            <S.ReviewTotal>(조회수 1904)</S.ReviewTotal>
          </S.FreelancerReview>
        </S.ContainerExperience>
      </S.ContainerFreelancer>

      <S.ContainerFreelancer>
        <S.ContainerSwiper>
          <Swiper
            navigation
            // install Swiper modules
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <S.PersonFlexCenter>개발자 팀 이랜*</S.PersonFlexCenter>
            </SwiperSlide>
          </Swiper>
        </S.ContainerSwiper>
        <S.ContainerExperience>
          <S.ContainerNameHeart>
            <S.FreelancerName>김*현 | 10년 경력 개발자</S.FreelancerName>
            <S.FreelancerHeart>♡</S.FreelancerHeart>
          </S.ContainerNameHeart>
          <S.FreelancerTitle>성장하는 개발자 김*현입니다.</S.FreelancerTitle>
          <S.ContainerFreelancerStack>
            <S.FreelancerStack>Front-end</S.FreelancerStack>
            <S.FreelancerStack>Back-end</S.FreelancerStack>
            <S.FreelancerStack>Java</S.FreelancerStack>
            <S.FreelancerStack>Spring</S.FreelancerStack>
            <S.FreelancerStack>React</S.FreelancerStack>
            <S.FreelancerStack>JavaScript</S.FreelancerStack>
            <S.FreelancerStack>Postgresql</S.FreelancerStack>
            <S.FreelancerStack>Angular</S.FreelancerStack>
            <S.FreelancerStack>C#</S.FreelancerStack>
            <S.FreelancerStack>Flutter</S.FreelancerStack>
            <S.FreelancerStack>Docker</S.FreelancerStack>
          </S.ContainerFreelancerStack>
          <S.FreelancerDescription>
            수행 프로젝트 : SK ONS E-HR 인사평가 시스템 고도화, 그린재킷 캐디 피 카드결제 앱, 다날 선불중게 플랫폼,
            롯데시네마 VOD 서비스, COMPAS도시문제해결플랫폼
          </S.FreelancerDescription>
          <S.FreelancerReview>
            <S.ReviewRate>★ 5.0 </S.ReviewRate>
            <S.ReviewTotal>(조회수 1904)</S.ReviewTotal>
          </S.FreelancerReview>
        </S.ContainerExperience>
      </S.ContainerFreelancer>

      <S.ContainerFreelancer>
        <S.ContainerSwiper>
          <Swiper
            navigation
            // install Swiper modules
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <S.PersonFlexCenter>개발자 팀 이랜*</S.PersonFlexCenter>
            </SwiperSlide>
          </Swiper>
        </S.ContainerSwiper>
        <S.ContainerExperience>
          <S.ContainerNameHeart>
            <S.FreelancerName>김*현 | 10년 경력 개발자</S.FreelancerName>
            <S.FreelancerHeart>♡</S.FreelancerHeart>
          </S.ContainerNameHeart>
          <S.FreelancerTitle>성장하는 개발자 김*현입니다.</S.FreelancerTitle>
          <S.ContainerFreelancerStack>
            <S.FreelancerStack>Front-end</S.FreelancerStack>
            <S.FreelancerStack>Back-end</S.FreelancerStack>
            <S.FreelancerStack>Java</S.FreelancerStack>
            <S.FreelancerStack>Spring</S.FreelancerStack>
            <S.FreelancerStack>React</S.FreelancerStack>
            <S.FreelancerStack>JavaScript</S.FreelancerStack>
            <S.FreelancerStack>Postgresql</S.FreelancerStack>
            <S.FreelancerStack>Angular</S.FreelancerStack>
            <S.FreelancerStack>C#</S.FreelancerStack>
            <S.FreelancerStack>Flutter</S.FreelancerStack>
            <S.FreelancerStack>Docker</S.FreelancerStack>
          </S.ContainerFreelancerStack>
          <S.FreelancerDescription>
            수행 프로젝트 : SK ONS E-HR 인사평가 시스템 고도화, 그린재킷 캐디 피 카드결제 앱, 다날 선불중게 플랫폼,
            롯데시네마 VOD 서비스, COMPAS도시문제해결플랫폼
          </S.FreelancerDescription>
          <S.FreelancerReview>
            <S.ReviewRate>★ 5.0 </S.ReviewRate>
            <S.ReviewTotal>(조회수 1904)</S.ReviewTotal>
          </S.FreelancerReview>
        </S.ContainerExperience>
      </S.ContainerFreelancer>

      <S.ContainerFreelancer>
        <S.ContainerSwiper>
          <Swiper
            navigation
            // install Swiper modules
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <S.PersonFlexCenter>개발자 팀 이랜*</S.PersonFlexCenter>
            </SwiperSlide>
          </Swiper>
        </S.ContainerSwiper>
        <S.ContainerExperience>
          <S.ContainerNameHeart>
            <S.FreelancerName>김*현 | 10년 경력 개발자</S.FreelancerName>
            <S.FreelancerHeart>♡</S.FreelancerHeart>
          </S.ContainerNameHeart>
          <S.FreelancerTitle>성장하는 개발자 김*현입니다.</S.FreelancerTitle>
          <S.ContainerFreelancerStack>
            <S.FreelancerStack>Front-end</S.FreelancerStack>
            <S.FreelancerStack>Back-end</S.FreelancerStack>
            <S.FreelancerStack>Java</S.FreelancerStack>
            <S.FreelancerStack>Spring</S.FreelancerStack>
            <S.FreelancerStack>React</S.FreelancerStack>
            <S.FreelancerStack>JavaScript</S.FreelancerStack>
            <S.FreelancerStack>Postgresql</S.FreelancerStack>
            <S.FreelancerStack>Angular</S.FreelancerStack>
            <S.FreelancerStack>C#</S.FreelancerStack>
            <S.FreelancerStack>Flutter</S.FreelancerStack>
            <S.FreelancerStack>Docker</S.FreelancerStack>
          </S.ContainerFreelancerStack>
          <S.FreelancerDescription>
            수행 프로젝트 : SK ONS E-HR 인사평가 시스템 고도화, 그린재킷 캐디 피 카드결제 앱, 다날 선불중게 플랫폼,
            롯데시네마 VOD 서비스, COMPAS도시문제해결플랫폼
          </S.FreelancerDescription>
          <S.FreelancerReview>
            <S.ReviewRate>★ 5.0 </S.ReviewRate>
            <S.ReviewTotal>(조회수 1904)</S.ReviewTotal>
          </S.FreelancerReview>
        </S.ContainerExperience>
      </S.ContainerFreelancer>

      <S.ContainerFreelancer>
        <S.ContainerSwiper>
          <Swiper
            navigation
            // install Swiper modules
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <S.PersonFlexCenter>개발자 팀 이랜*</S.PersonFlexCenter>
            </SwiperSlide>
          </Swiper>
        </S.ContainerSwiper>
        <S.ContainerExperience>
          <S.ContainerNameHeart>
            <S.FreelancerName>김*현 | 10년 경력 개발자</S.FreelancerName>
            <S.FreelancerHeart>♡</S.FreelancerHeart>
          </S.ContainerNameHeart>
          <S.FreelancerTitle>성장하는 개발자 김*현입니다.</S.FreelancerTitle>
          <S.ContainerFreelancerStack>
            <S.FreelancerStack>Front-end</S.FreelancerStack>
            <S.FreelancerStack>Back-end</S.FreelancerStack>
            <S.FreelancerStack>Java</S.FreelancerStack>
            <S.FreelancerStack>Spring</S.FreelancerStack>
            <S.FreelancerStack>React</S.FreelancerStack>
            <S.FreelancerStack>JavaScript</S.FreelancerStack>
            <S.FreelancerStack>Postgresql</S.FreelancerStack>
            <S.FreelancerStack>Angular</S.FreelancerStack>
            <S.FreelancerStack>C#</S.FreelancerStack>
            <S.FreelancerStack>Flutter</S.FreelancerStack>
            <S.FreelancerStack>Docker</S.FreelancerStack>
          </S.ContainerFreelancerStack>
          <S.FreelancerDescription>
            수행 프로젝트 : SK ONS E-HR 인사평가 시스템 고도화, 그린재킷 캐디 피 카드결제 앱, 다날 선불중게 플랫폼,
            롯데시네마 VOD 서비스, COMPAS도시문제해결플랫폼
          </S.FreelancerDescription>
          <S.FreelancerReview>
            <S.ReviewRate>★ 5.0 </S.ReviewRate>
            <S.ReviewTotal>(조회수 1904)</S.ReviewTotal>
          </S.FreelancerReview>
        </S.ContainerExperience>
      </S.ContainerFreelancer>

      <S.ContainerFreelancer>
        <S.ContainerSwiper>
          <Swiper
            navigation
            // install Swiper modules
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <S.PersonFlexCenter>개발자 팀 이랜*</S.PersonFlexCenter>
            </SwiperSlide>
          </Swiper>
        </S.ContainerSwiper>
        <S.ContainerExperience>
          <S.ContainerNameHeart>
            <S.FreelancerName>김*현 | 10년 경력 개발자</S.FreelancerName>
            <S.FreelancerHeart>♡</S.FreelancerHeart>
          </S.ContainerNameHeart>
          <S.FreelancerTitle>성장하는 개발자 김*현입니다.</S.FreelancerTitle>
          <S.ContainerFreelancerStack>
            <S.FreelancerStack>Front-end</S.FreelancerStack>
            <S.FreelancerStack>Back-end</S.FreelancerStack>
            <S.FreelancerStack>Java</S.FreelancerStack>
            <S.FreelancerStack>Spring</S.FreelancerStack>
            <S.FreelancerStack>React</S.FreelancerStack>
            <S.FreelancerStack>JavaScript</S.FreelancerStack>
            <S.FreelancerStack>Postgresql</S.FreelancerStack>
            <S.FreelancerStack>Angular</S.FreelancerStack>
            <S.FreelancerStack>C#</S.FreelancerStack>
            <S.FreelancerStack>Flutter</S.FreelancerStack>
            <S.FreelancerStack>Docker</S.FreelancerStack>
          </S.ContainerFreelancerStack>
          <S.FreelancerDescription>
            수행 프로젝트 : SK ONS E-HR 인사평가 시스템 고도화, 그린재킷 캐디 피 카드결제 앱, 다날 선불중게 플랫폼,
            롯데시네마 VOD 서비스, COMPAS도시문제해결플랫폼
          </S.FreelancerDescription>
          <S.FreelancerReview>
            <S.ReviewRate>★ 5.0 </S.ReviewRate>
            <S.ReviewTotal>(조회수 1904)</S.ReviewTotal>
          </S.FreelancerReview>
        </S.ContainerExperience>
      </S.ContainerFreelancer>
    </S.FrameFreelancer>
  );
};

export default ListFreelancer;
