import { useEffect, useState } from 'react';

import { FaStar } from 'react-icons/fa';

import { useNavigate } from 'react-router-dom';

import * as S from './style';
import Bici from 'assets/images/bici.png';

import { CLIENT_FREELANCER, CLIENT_FREELANCER_GET_REFRESHTOKEN } from 'utils/config/api';

const CompanyDashBoard = ({
  EcardDiv = 'none',
  height = '0.7rem',
  topleft = '0',
  bottomleft = '0.4rem',
  right = '0.4rem',
}) => {
  const [Data, setData] = useState('');
  const navi = useNavigate();

  console.log(Data);

  const fetchData = async () => {
    try {
      const res = await CLIENT_FREELANCER('/enterprise-profile');
      if (res.data.code === '401') {
        console.log('이슈', window.localStorage.accessToken, window.localStorage.refreshToken);
        const res = await CLIENT_FREELANCER_GET_REFRESHTOKEN('/reissue');
        window.localStorage.setItem('accessToken', res.data.accessToken);
        window.localStorage.setItem('refreshToken', res.data.refreshToken);
        console.log('이상무');
      }
      const data = await res.data;
      setData(data);
    } catch (error) {
      if (error.message === 'Request failed with status code 500') {
        window.localStorage.clear();
        alert('다시 로그인해주세요.');
        navi('/login');
      }
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <S.EcardDiv display={EcardDiv} topleft={topleft} bottomleft={bottomleft} right={right}>
      <S.EcarcdPaddingDiv height={height} display="flex">
        <div>
          <S.ImageDiv>
            <S.Img src={Data?.thumbnail || Bici} alt="profile-photo" />
            <S.NameP>{Data?.name}</S.NameP>
          </S.ImageDiv>
        </div>
        <S.RatingDiv>
          <S.Ratingspan>
            활동평가
            <S.RatingNumberP mobilesize="0.75rem" mobileleft="6.7rem" size="1.1rem" left="2rem">
              <S.StarIcon color={Data?.htotalActiveScorello > 0 ? 'orange' : ''}>
                <FaStar />
              </S.StarIcon>
              <S.StarIcon color={Data?.htotalActiveScorello > 1 ? 'orange' : ''}>
                <FaStar />
              </S.StarIcon>
              <S.StarIcon color={Data?.htotalActiveScorello > 2 ? 'orange' : ''}>
                <FaStar />
              </S.StarIcon>
              <S.StarIcon color={Data?.htotalActiveScorello > 3 ? 'orange' : ''}>
                <FaStar />
              </S.StarIcon>
              <S.StarIcon color={Data?.htotalActiveScorello > 4 ? 'orange' : ''}>
                <FaStar />
              </S.StarIcon>
              {Data ? Data?.htotalActiveScorello : '0'}
            </S.RatingNumberP>
          </S.Ratingspan>
          <RatingSmall
            mobilesize="0.75rem"
            mobileleft="7rem"
            title="전문성"
            size="0.9rem"
            left="4rem"
            color="orange"
            persent={Data ? `${Data?.expertise}%` : '0%'}
            rank={Data?.expertise}
          />
          <RatingSmall
            mobilesize="0.75rem"
            mobileleft="6.3rem"
            title="일정준수"
            size="0.9rem"
            left="3.15rem"
            color="orange"
            persent={Data ? `${Data?.scheduleAdherence}%` : '0%'}
            rank={Data?.scheduleAdherence}
          />
          <RatingSmall
            mobilesize="0.75rem"
            mobileleft="7rem"
            title="적극성"
            size="0.9rem"
            left="4rem"
            color="orange"
            persent={Data ? `${Data?.initiative}%` : '0%'}
            rank={Data?.initiative}
          />
          <RatingSmall
            mobilesize="0.75rem"
            mobileleft="6.3rem"
            title="의사소통"
            size="0.9rem"
            left="3.15rem"
            color="orange"
            persent={Data ? `${Data?.communication}%` : '0%'}
            rank={Data?.communication}
          />
          <RatingSmall
            mobilesize="0.75rem"
            mobileleft="5.3rem"
            title="재고용 의사"
            size="0.9rem"
            left="2rem"
            color="orange"
            persent={Data ? `${Data?.reEmploymentIntention}%` : '0%'}
            rank={Data?.reEmploymentIntention}
          />
        </S.RatingDiv>
      </S.EcarcdPaddingDiv>
    </S.EcardDiv>
  );
};

const RatingSmall = ({ mobilesize, mobileleft, title, size, left, color, persent, rank }) => {
  return (
    <S.RatingSmallspan>
      {title}
      <S.RatingNumberP mobilesize={mobilesize} mobileleft={mobileleft} size={size} left={left}>
        <S.StarIcon color={rank > 0 ? color : ''}>
          <FaStar />
        </S.StarIcon>
        <S.StarIcon color={rank > 20 ? color : ''}>
          <FaStar />
        </S.StarIcon>
        <S.StarIcon color={rank > 40 ? color : ''}>
          <FaStar />
        </S.StarIcon>
        <S.StarIcon color={rank > 60 ? color : ''}>
          <FaStar />
        </S.StarIcon>
        <S.StarIcon color={rank > 80 ? color : ''}>
          <FaStar />
        </S.StarIcon>
        {persent}
      </S.RatingNumberP>
    </S.RatingSmallspan>
  );
};

export default CompanyDashBoard;
