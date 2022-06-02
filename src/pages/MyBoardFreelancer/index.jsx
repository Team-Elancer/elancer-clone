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
    baseURL: 'http://ec2-13-209-114-196.ap-northeast-2.compute.amazonaws.com:8080/freelancer',
    headers: {
      Authorization: `${window.localStorage.accessToken}`,
    },
  });

  const CLIENT_GET_REFRESHTOKEN = axios.create({
    baseURL: 'http://ec2-13-209-114-196.ap-northeast-2.compute.amazonaws.com:8080/reissue',
    headers: {
      Authorization: `${window.localStorage.accessToken}`,
      'Refresh-Authorization': `${window.localStorage.refreshToken}`,
    },
  });

  const fetchData = async () => {
    try {
      // const CLIENT_DATA = await CLIENT.get();
      // const REFRESH = await CLIENT_GET_REFRESHTOKEN.get();
      // const DATA = await REFRESH.data();

      // console.log(DATA);

      const res = await CLIENT_GET_REFRESHTOKEN.get();
      console.log(res.data);

      if (res.data.code === '402') {
        console.log('402 checked');
        const res = await CLIENT_GET_REFRESHTOKEN();
        console.log(res);
      }

      const Data = await res.data;

      setUserData(Data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
