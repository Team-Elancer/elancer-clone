import axios from 'axios';

import { useState } from 'react';

import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';

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

import { BaseUrl } from 'utils/config/api';

import { extractSecureName } from 'utils/helpers';

const ListFreelancer = ({ filteredPosition, lastComponent }) => {
  const [wishState, setWishState] = useState(false);

  const handleAddWishState = (e) => {
    e.preventDefault();

    const newData = {
      ...wishState,
    };

    console.log(newData);

    axios({
      url: `${BaseUrl}/wish-project`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: `${window.localStorage.accessToken}`,
      },
      projectNum: newData,
    })
      .then(() => {
        console.log(newData);

        // setWishState(true);
        alert('인재스크랩에 저장됐습니다.');
        // window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleDeleteWishState = (e) => {
    e.preventDefault();

    const newData = {
      ...wishState,
    };

    axios({
      url: `${BaseUrl}/wish-project`,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: `${window.localStorage.accessToken}`,
      },
      data: newData,
    })
      .then(() => {
        console.log(newData);
        // setWishState(false);
        alert('인재스크랩에서 해제하였습니다');
        // window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <S.FrameFreelancer>
      {filteredPosition.map((list, index) => {
        const securedName = extractSecureName(list?.freelancerName);

        if (filteredPosition.length === index + 1) {
          return (
            <S.ContainerFreelancer key={list.freelancerNum + uuidv4()} ref={lastComponent}>
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
                      {securedName} | {list.careerYear}년 경력 {list?.positionName}
                    </S.FreelancerName>
                    {wishState ? (
                      <S.FreelancerHeart onClick={handleDeleteWishState}>
                        <BsSuitHeartFill />
                      </S.FreelancerHeart>
                    ) : (
                      <S.FreelancerHeart onClick={handleAddWishState}>
                        <BsSuitHeart />
                      </S.FreelancerHeart>
                    )}
                  </S.ContainerNameHeart>
                  <S.FreelancerTitle>{list.greeting}</S.FreelancerTitle>
                  <S.ContainerFreelancerStack>
                    {list?.skills?.map(
                      (stack, index) =>
                        stack && (
                          <S.FreelancerStack key={`skills${list.freelancerNum + index + 1 + uuidv4()}`}>
                            {stack}
                          </S.FreelancerStack>
                        ),
                    )}
                  </S.ContainerFreelancerStack>

                  {list?.projectNames.length > 0 && (
                    <div>
                      <S.FreelancerDescription> 수행 프로젝트: </S.FreelancerDescription>
                      {list?.projectNames.map((project, index) => (
                        <S.FreelancerDescription key={`projectNames${list.freelancerNum + index + 1 + uuidv4()}`}>
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
          <S.ContainerFreelancer key={list.freelancerNum + uuidv4()}>
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
                    {securedName} | {list.careerYear}년 경력 {list?.positionName}
                  </S.FreelancerName>
                  {wishState ? (
                    <S.FreelancerHeart onClick={handleDeleteWishState}>
                      <BsSuitHeartFill />
                    </S.FreelancerHeart>
                  ) : (
                    <S.FreelancerHeart onClick={handleAddWishState}>
                      <BsSuitHeart />
                    </S.FreelancerHeart>
                  )}
                </S.ContainerNameHeart>
                <S.FreelancerTitle>{list.greeting}</S.FreelancerTitle>
                <S.ContainerFreelancerStack>
                  {list?.skills?.map(
                    (stack, index) =>
                      stack && (
                        <S.FreelancerStack key={`skills${list.freelancerNum + index + 1 + uuidv4()}`}>
                          {stack}
                        </S.FreelancerStack>
                      ),
                  )}
                </S.ContainerFreelancerStack>

                {list?.projectNames.length > 0 && (
                  <div>
                    <S.FreelancerDescription> 수행 프로젝트: </S.FreelancerDescription>
                    {list?.projectNames.map((project, index) => (
                      <S.FreelancerDescription key={`projectNames${list.freelancerNum + index + 1 + uuidv4()}`}>
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
