import { useEffect, useState } from 'react';

import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as S from './style';

import GridBottom from 'components/Modal/GridBottom';
import LeftMenuMyBoard from 'components/Myboard/LeftMenu/Freelancer';

import useFetchRefreshToken from 'hooks/useFetchRefreshToken';

import Footer from 'layouts/Footer';
import Header from 'layouts/Header';

import { CLIENT_FREELANCER } from 'utils/config/api';

const MyBoardFreelancer = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({});
  const [detailProfileData, setDetailProfileData] = useState({});
  const [profileSimpleData, setProfileSimpleData] = useState({});

  // profile-modify/skill/publisher
  const [profilePublisherData, setProfilePublisherData] = useState({});

  // =============== Handle Error Code ===============
  const handleErrorCode = (data) => {
    if (data.code === '401') {
      console.log('accessToken 만료');

      if (window.confirm('로그인 시간 연장하시겠습니까? 새로고침 필요할수도 있음.')) {
        useFetchRefreshToken();
      } else {
        window.localStorage.clear();
        navigate('/login');
      }
    }

    if (data.code === '402') {
      console.log('변조된 토큰 에러. 다시 로그인 필요함.');
      alert('다시 로그인해주세요');

      navigate('/login');
      window.localStorage.clear();

      return;
    }
    if (data.code === '403') {
      console.log('refresh token 만료 다시 로그인 필요함.');
      alert('다시 로그인해주세요');

      navigate('/login');
      window.localStorage.clear();
    }
  };

  // =============== fetch account detail (이랜서 계정) && userData ===============
  const fetchFreelancerData = async () => {
    try {
      const { data } = await CLIENT_FREELANCER('/freelancer');

      if (data.code === '401' || data.code === '402' || data.code === '403') handleErrorCode(data);

      const fetchedData = await data;

      if (fetchedData) {
        setUserData(fetchedData);
      }
    } catch (err) {
      alert('다시 로그인해주세요');
      navigate('/login');
      window.localStorage.clear();

      console.log(err);
    }
  };

  //  =============== detail profile (프로필 세부 정보) && detailProfileData ===============
  const getDetailProfileData = async () => {
    try {
      const { data } = await CLIENT_FREELANCER('/freelancer/freelancer-profile');

      if (data.code === '401' || data.code === '402' || data.code === '403') handleErrorCode(data);

      const fetchedData = await data;

      if (fetchedData) {
        setDetailProfileData(data);
      }
    } catch (err) {
      alert('다시 로그인해주세요');
      navigate('/login');
      window.localStorage.clear();

      console.log(err);
    }
  };

  // =============== detail profile (프로필 요약 정보) && profileSimpleData ===============
  const fetchFreelancerSimpleData = async () => {
    try {
      const { data } = await CLIENT_FREELANCER('/freelancer/freelancer-profile/simple');

      if (data.code === '401' || data.code === '402' || data.code === '403') handleErrorCode(data);

      const fetchedData = await data;

      if (fetchedData) {
        setProfileSimpleData(fetchedData);
      }
    } catch (err) {
      alert('다시 로그인해주세요');
      navigate('/login');
      window.localStorage.clear();

      console.log(err);
    }
  };

  // =============== detail profile (프로필 요약 정보) && profileSimpleData ===============
  const fetchProfilePublisherData = async () => {
    try {
      const { data } = await CLIENT_FREELANCER('/freelancer-profile/publisher');

      if (data.code === '401' || data.code === '402' || data.code === '403') handleErrorCode(data);

      const fetchedData = await data;

      if (fetchedData) {
        setProfilePublisherData(fetchedData);
      }
    } catch (err) {
      alert('다시 로그인해주세요');
      navigate('/login');
      window.localStorage.clear();

      console.log(err);
    }
  };

  useEffect(() => {
    let isMounted = true;

    // fetch account detail (이랜서 계정)
    fetchFreelancerData();
    //  detail profile (프로필 세부 정보)
    getDetailProfileData();
    //  detail profile (프로필 요약 정보)
    fetchFreelancerSimpleData();
    //  freelancer profile publisher profile (프로필 요약 정보)
    fetchProfilePublisherData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <S.Container>
      <Header freelancerBoard />
      <S.SizeDiv>
        <S.FlexDiv>
          <LeftMenuMyBoard />
          <S.BoardDiv>
            <Outlet context={[userData, setUserData, detailProfileData, profileSimpleData, profilePublisherData]} />
          </S.BoardDiv>
        </S.FlexDiv>
      </S.SizeDiv>
      <BlankContainer />
      <Footer />
      <GridBottom />
    </S.Container>
  );
};

const BlankContainer = styled.div`
  margin-top: 5rem;
`;

export default MyBoardFreelancer;
