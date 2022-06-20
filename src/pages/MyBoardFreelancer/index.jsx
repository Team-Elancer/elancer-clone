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

  const fetchFreelancerData = async () => {
    try {
      const { data } = await CLIENT_FREELANCER('/freelancer');

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

      const fetchedData = await data;

      if (fetchedData) {
        setUserData(fetchedData);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    let isMounted = true;

    fetchFreelancerData();

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
            <Outlet context={[userData, setUserData, fetchFreelancerData]} />
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
