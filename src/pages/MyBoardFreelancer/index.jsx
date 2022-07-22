import { useEffect, useState } from 'react';

import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as S from './style';

import GridBottom from 'components/Modal/GridBottom';
import LeftMenuMyBoard from 'components/Myboard/LeftMenu/Freelancer';

import useConfirm from 'hooks/useConfirm';
import useFetchRefreshToken from 'hooks/useFetchRefreshToken';

import Footer from 'layouts/Footer';
import Header from 'layouts/Header';
import FreelancerHeader from 'layouts/Header/Freelancer';

import { CLIENT_FREELANCER } from 'utils/config/api';

const MyBoardFreelancer = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({});

  const [contactData, setContactData] = useState([]);

  const [detailProfileData, setDetailProfileData] = useState({});
  const [profileSimpleData, setProfileSimpleData] = useState({});

  // 수주관리
  const [obtainOrderData, setObtainOrderData] = useState([]);

  // profile-modify/skill/publisher
  const [profileDeveloperData, setProfileDeveloperData] = useState({});

  // profile-modify/skill/publisher
  const [profilePublisherData, setProfilePublisherData] = useState({});

  // profile-modify/skill/etc
  const [profileETCData, setProfileETCData] = useState({});

  // profile-modify/skill/planner
  const [profilePlannerData, setPlannerData] = useState({});

  // profile-modify/skill/designer
  const [profileDesignerData, setProfileDesignerData] = useState({});

  // =============== Handle Error Code ===============
  const handleErrorCode = (code) => {
    const handleLogin = () => useFetchRefreshToken();
    const rejectLogin = () => {
      window.localStorage.clear();
      navigate('/login');
    };

    const confirmLogin = useConfirm(
      '로그인 시간 연장하시겠습니까? 새로고침 필요할수도 있음.',
      handleLogin,
      rejectLogin,
    );

    if (code === '401') {
      console.log('accessToken 만료');
      confirmLogin();
    }

    if (code === '402') console.log('변조된 토큰 에러.');

    if (code === '403') console.log('refresh token 만료.');
  };

  // =============== fetch account detail (이랜서 계정) && userData ===============
  const fetchFreelancerData = async () => {
    try {
      const { data } = await CLIENT_FREELANCER('/freelancer');

      if (data.code === '401' || data.code === '402' || data.code === '403') {
        handleErrorCode(data.code);
      }

      const fetchedData = await data;

      if (fetchedData) {
        setUserData(fetchedData);
      }
    } catch (err) {
      console.log(err);

      alert('다시 로그인해주세요');
      window.localStorage.clear();
      navigate('/login');
    }
  };

  //  =============== detail profile (프로필 세부 정보) && detailProfileData ===============
  const getDetailProfileData = async () => {
    try {
      const { data } = await CLIENT_FREELANCER('/freelancer/freelancer-profile/detail');

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
      const { data } = await CLIENT_FREELANCER(`/freelancer/freelancer-profile/simple`);

      if (data.code === '401' || data.code === '402' || data.code === '403') handleErrorCode(data);

      const fetchedData = await data;
      console.log(fetchedData);

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

  // =============== detail profile (프로필 세부 정보) && profilePublisherData ===============
  const fetchProfilePublisherData = async () => {
    try {
      const { data } = await CLIENT_FREELANCER('/freelancer-profile/publisher');

      if (data.code === '401' || data.code === '402' || data.code === '403') {
        handleErrorCode(data.code);
      }

      const fetchedData = await data;

      if (fetchedData) {
        setProfilePublisherData(fetchedData);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // =============== detail profile (프로필 세부 정보) && profileETCData ===============
  const fetchProfileETCData = async () => {
    try {
      const { data } = await CLIENT_FREELANCER('/freelancer-profile/etc');

      if (data.code === '401' || data.code === '402' || data.code === '403') handleErrorCode(data);

      const fetchedData = await data;

      if (fetchedData) {
        setProfileETCData(fetchedData);
        console.log(fetchedData);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // =============== detail profile (프로필 세부 정보) && profileDesignerData ===============
  const fetchProfileDesignerData = async () => {
    try {
      const { data } = await CLIENT_FREELANCER('/freelancer-profile/designer');

      if (data.code === '401' || data.code === '402' || data.code === '403') {
        handleErrorCode(data);
      }

      const fetchedData = await data;

      if (fetchedData) {
        setProfileDesignerData(fetchedData);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // =============== detail profile (프로필 세부 정보) && profileETCData ===============
  const fetchProfilePlannerData = async () => {
    try {
      const { data } = await CLIENT_FREELANCER('/freelancer-profile/planner');

      if (data.code === '401' || data.code === '402' || data.code === '403') handleErrorCode(data);

      const fetchedData = await data;

      if (fetchedData) {
        setPlannerData(fetchedData);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // =============== detail profile (프로필 세부 정보) && profileETCData ===============
  const fetchProfileDeveloperData = async () => {
    try {
      const { data } = await CLIENT_FREELANCER('/freelancer-profile/developer');

      if (data.code === '401' || data.code === '402' || data.code === '403') handleErrorCode(data);

      const fetchedData = await data;

      if (fetchedData) {
        setProfileDeveloperData(fetchedData);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchContactData = async () => {
    try {
      const { data } = await CLIENT_FREELANCER('/contacts');

      if (data.code === '401' || data.code === '402' || data.code === '403') handleErrorCode(data);

      const fetchedData = await data;

      if (fetchedData) {
        setContactData(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchObtainOrder = async () => {
    try {
      const { data } = await CLIENT_FREELANCER('/freelancer/obtain-order');

      if (data.code === '401' || data.code === '402' || data.code === '403') handleErrorCode(data);

      const fetchedData = await data;

      if (fetchedData) {
        setObtainOrderData(data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  //  =============== 계정 & 세부정보 & 요약정보 & 문의===============
  useEffect(() => {
    let isMounted = true;
    // fetch account detail (이랜서 계정)
    fetchFreelancerData();
    //  detail profile (프로필 세부 정보)
    getDetailProfileData();
    //  detail profile (프로필 요약 정보)
    fetchFreelancerSimpleData();

    fetchContactData();

    // 수주관리 데이터
    fetchObtainOrder();

    return () => {
      isMounted = false;
    };
  }, []);

  //  =============== 스킬 & 포지션 타입 ===============
  useEffect(() => {
    let isMounted = true;

    //  freelancer profile PUBLISHER profile (프로필 세부 정보)
    if (detailProfileData.positionType === 'PUBLISHER') {
      fetchProfilePublisherData();
    }

    // freelancer profile ETC profile (프로필 세부 정보)
    if (detailProfileData.positionType === 'ETC') {
      fetchProfileETCData();
    }

    //  freelancer profile PLANNER profile (프로필 세부 정보)
    if (detailProfileData.positionType === 'PLANNER') {
      fetchProfilePlannerData();
    }

    //  freelancer profile DESIGNER profile (프로필 세부 정보)
    if (detailProfileData.positionType === 'DESIGNER') {
      fetchProfileDesignerData();
    }

    //  freelancer profile DEVELOPER profile (프로필 세부 정보)
    if (detailProfileData.positionType === 'DEVELOPER') {
      fetchProfileDeveloperData();
    }

    return () => {
      isMounted = false;
    };
  }, [detailProfileData.positionType]);

  return (
    <S.Container>
      <Header freelancerUserData={userData} />
      <S.SizeDiv>
        <S.FlexDiv>
          <LeftMenuMyBoard />
          <S.BoardDiv>
            <Outlet
              context={[
                userData,
                setUserData,
                detailProfileData,
                profileSimpleData,
                profilePublisherData,
                profileETCData,
                profilePlannerData,
                profileDesignerData,
                profileDeveloperData,
                contactData,
                obtainOrderData,
              ]}
            />
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
