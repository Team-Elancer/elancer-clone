import axios from 'axios';
import { useEffect, useState } from 'react';

import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';

import * as S from './style';

import { BaseUrl } from 'utils/config/api';

const HeartButton = ({ position = 'absolute', Data, setHeartBool }) => {
  const addFreelancer = () => {
    if (window.localStorage.memberType === '"ENTERPRISE"') {
      if (Data.wishState === true) {
        axios({
          method: 'DELETE',
          url: `${BaseUrl}/wish-freelancer/${Data.freelancerNum}`,
          headers: { Authorization: window.localStorage.accessToken },
        })
          .then((res) => {
            alert('인재스크랩에서 삭제되었습니다.');
            setHeartBool(false);
          })
          .catch((err) => {
            console.log(err.message);
          });
      } else {
        axios({
          method: 'POST',
          url: `${BaseUrl}/wish-freelancer`,
          headers: { Authorization: window.localStorage.accessToken },
          data: {
            freelancerNum: Data.freelancerNum,
          },
        })
          .then((res) => {
            alert('인재스크랩에 추가되었습니다.');
            setHeartBool(false);
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
    } else {
      alert('기업회원만 이용이 가능합니다.');
    }
  };

  return (
    <S.HeartBackDiv position={position}>
      <S.HeartDiv onClick={addFreelancer}>
        {Data.wishState ? <IoMdHeart size="100%" /> : <IoMdHeartEmpty size="100%" />}
      </S.HeartDiv>
    </S.HeartBackDiv>
  );
};

export default HeartButton;
