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
  const [userData, setUserData] = useState('');
  console.log(userData);

  const authAxios = axios.create({
    method: 'GET',
    baseURL: 'http://ec2-13-209-114-196.ap-northeast-2.compute.amazonaws.com:8080',
    headers: {
      Authorization: `${window.localStorage.accessToken}`,
    },
  });

  const fetchData = async () => {
    try {
      const res = await authAxios('/freelancer');
      const Data = await res.data;
      console.log(Data);

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
            <Outlet />
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
