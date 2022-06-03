import axios from 'axios';
import { useEffect, useState } from 'react';

import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import * as S from './style';

import GridBottom from 'components/Modal/GridBottom';
import LeftMenuMyBoard from 'components/Myboard/LeftMenu/Freelancer';

import Footer from 'layouts/Footer';
import Header from 'layouts/Header';

const MyBoardFreelancer = () => {
  const [tokenData, setTokenData] = useState(false);

  const [userData, setUserData] = useState({
    birthDate: null,
    careerMonth: 0,
    careerYear: 0,
    countryType: null,
    detailAddress: null,
    email: '',
    fileName: null,
    freelancerWorkTypes: [],
    hopeMonthMaxPay: 0,
    hopeMonthMinPay: 0,
    hopeWorkCity: null,
    hopeWorkCountry: null,
    hopeWorkState: null,
    kosaState: null,
    mailReceptionState: '',
    mainAddress: null,
    name: '',
    phone: '',
    presentWorkState: null,
    thumbnailPath: null,
    website: null,
    workEtcField: null,
    workPossibleState: '',
    workStartPossibleDate: '2022-06-01',
    zipcode: null,
  });

  const CLIENT = axios.create({
    baseURL: 'http://ec2-13-209-114-196.ap-northeast-2.compute.amazonaws.com:8080',
    headers: {
      Authorization: `${window.localStorage.accessToken}`,
    },
  });

  const CLIENT_GET_REFRESHTOKEN = axios.create({
    baseURL: 'http://ec2-13-209-114-196.ap-northeast-2.compute.amazonaws.com:8080',
    headers: {
      Authorization: `${window.localStorage.accessToken}`,
      'Refresh-Authorization': `${window.localStorage.refreshToken}`,
    },
  });

  const getNewToken = async () => {
    console.log('access token 재발급 시작');

    const response = await CLIENT_GET_REFRESHTOKEN('/reissue');
    const TOKEN = await response.data;

    localStorage.setItem('accessToken', TOKEN.accessToken);
    localStorage.setItem('refreshToken', TOKEN.refreshToken);

    console.log('access token 재발급 완료', TOKEN);
  };

  const fetchData = async () => {
    try {
      const response = await CLIENT('/freelancer');

      if (response.data.code === '402') {
        console.log('402 checked - accessToken 만료');
        getNewToken();
        setTokenData(true);
      }

      const fetchedData = await response.data;

      if (fetchedData) {
        setUserData(fetchedData);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [tokenData]);

  return (
    <S.Container>
      <Header freelancerBoard />
      <S.SizeDiv>
        <S.FlexDiv>
          <LeftMenuMyBoard />
          <S.BoardDiv>
            <Outlet context={[userData, setUserData]} />
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
