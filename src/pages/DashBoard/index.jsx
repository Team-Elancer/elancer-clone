import axios from 'axios';
import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import * as S from './style';

import Loading from 'components/Loading';
import GridBottom from 'components/Modal/GridBottom';
import LeftMenu from 'components/Myboard/LeftMenu';
import Footer from 'layouts/Footer';
import CompanyHeader from 'layouts/Header/Company';
import { CLIENT_FREELANCER, CLIENT_FREELANCER_GET_REFRESHTOKEN } from 'utils/config/api';

const Dashboard = () => {
  const [Datas, setDatas] = useState('');
  const [axiosUrl, setaxiosUrl] = useState('');
  const navi = useNavigate();

  const fetchData = async () => {
    try {
      if (axiosUrl) {
        const res = await CLIENT_FREELANCER(axiosUrl);
        if (res.data.code === '401') {
          console.log('이슈', window.localStorage.accessToken, window.localStorage.refreshToken);
          const res = await CLIENT_FREELANCER_GET_REFRESHTOKEN('/reissue');
          window.localStorage.setItem('accessToken', res.data.accessToken);
          window.localStorage.setItem('refreshToken', res.data.refreshToken);
          console.log('이상무');
        }
        const data = await res.data;
        setDatas(data);
      }
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
  }, [axiosUrl]);

  return (
    <S.Container>
      <CompanyHeader width="1224px" />
      {Datas.code === '' ? (
        <Loading />
      ) : (
        <S.SizeDiv>
          <S.FlexDiv>
            <LeftMenu />
            <S.BoardDiv>
              <Outlet context={[Datas, setDatas, axiosUrl, setaxiosUrl, fetchData]} />
            </S.BoardDiv>
          </S.FlexDiv>
        </S.SizeDiv>
      )}
      <Footer toBottom="static" />
      <GridBottom />
    </S.Container>
  );
};

export default Dashboard;
