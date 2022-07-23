// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import * as S from './style';

import WishList from './WishList';
import HeartButton from 'components/Button/HeartButton';

import { extractSecureName } from 'utils/helpers';

const ListFreelancer = ({ filteredPosition, lastComponent, setHeartBool }) => {
  return (
    <S.FrameFreelancer>
      {filteredPosition.map((list, index) => {
        const securedName = extractSecureName(list?.freelancerName);

        if (filteredPosition.length === index + 1 && lastComponent) {
          return (
            <S.ContainerFreelancer key={list.freelancerNum} ref={lastComponent}>
              <S.ContainerLink to={`/partner-detail/${list.freelancerNum}`}>
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
                        {list?.positionName} {securedName}
                      </S.PersonFlexCenter>
                    </SwiperSlide>
                    {list?.thumbnailPath && (
                      <SwiperSlide>
                        <S.PersonFlexCenter>
                          <img
                            src={list?.thumbnailPath}
                            alt="thumbnailPath"
                            style={{ width: '100px', textAlign: 'center', display: 'flex' }}
                          />
                        </S.PersonFlexCenter>
                      </SwiperSlide>
                    )}
                  </Swiper>
                </S.ContainerSwiper>
                <S.ContainerExperience>
                  <S.ContainerNameHeart>
                    <S.FreelancerName>
                      {securedName} | {list.careerYear}년 경력 {list?.positionName}
                    </S.FreelancerName>
                    {/* ====== Wish List ======== */}
                    <WishList />
                  </S.ContainerNameHeart>
                  <S.FreelancerTitle>{list.greeting}</S.FreelancerTitle>
                  <S.ContainerFreelancerStack>
                    {list?.skills?.map(
                      (stack, index) =>
                        stack && (
                          <S.FreelancerStack key={`skills${list.freelancerNum + index + 1}`}>{stack}</S.FreelancerStack>
                        ),
                    )}
                  </S.ContainerFreelancerStack>

                  {list?.projectNames.length > 0 && (
                    <div>
                      <S.FreelancerDescription> 수행 프로젝트: </S.FreelancerDescription>
                      {list?.projectNames.map((project, index) => (
                        <S.FreelancerDescription key={`projectNames${list.freelancerNum + index + 1}`}>
                          {project}
                        </S.FreelancerDescription>
                      ))}
                    </div>
                  )}
                </S.ContainerExperience>
              </S.ContainerLink>
            </S.ContainerFreelancer>
          );
        }

        return (
          <S.ContainerFreelancer key={list.freelancerNum}>
            <S.ContainerLink to={`/partner-detail/${list.freelancerNum}`}>
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
                      {list?.positionName} {securedName}
                    </S.PersonFlexCenter>
                  </SwiperSlide>
                  {list?.thumbnailPath && (
                    <SwiperSlide>
                      <S.PersonFlexCenter>
                        <img
                          src={list?.thumbnailPath}
                          alt="thumbnailPath"
                          style={{ width: '100px', textAlign: 'center', display: 'flex' }}
                        />
                      </S.PersonFlexCenter>
                    </SwiperSlide>
                  )}
                </Swiper>
              </S.ContainerSwiper>
              <S.ContainerExperience>
                <S.ContainerNameHeart>
                  <S.FreelancerName>
                    {securedName} | {list.careerYear}년 경력 {list?.positionName}
                  </S.FreelancerName>
                  {/* ====== Wish List ======== */}
                  {window.localStorage.memberType === '"ENTERPRISE"' ? (
                    <HeartButton Data={list} setHeartBool={setHeartBool} />
                  ) : (
                    <WishList />
                  )}
                </S.ContainerNameHeart>
                <S.FreelancerTitle>{list.greeting}</S.FreelancerTitle>
                <S.ContainerFreelancerStack>
                  {list?.skills?.map(
                    (stack, index) =>
                      stack && (
                        <S.FreelancerStack key={`skills${list.freelancerNum + index + 1}`}>{stack}</S.FreelancerStack>
                      ),
                  )}
                </S.ContainerFreelancerStack>

                {list?.projectNames.length > 0 && (
                  <div>
                    <S.FreelancerDescription> 수행 프로젝트: </S.FreelancerDescription>
                    {list?.projectNames.map((project, index) => (
                      <S.FreelancerDescription key={`projectNames${list.freelancerNum + index + 1}`}>
                        {project}
                      </S.FreelancerDescription>
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
