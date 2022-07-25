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
          const res = await CLIENT_FREELANCER_GET_REFRESHTOKEN('/reissue');
          window.localStorage.setItem('accessToken', res.data.accessToken);
          window.localStorage.setItem('refreshToken', res.data.refreshToken);
        }
        if (res.data.code === '402') {
          window.localStorage.clear();
          alert('다시 로그인해주세요.');
          navi('/login');
        }
        const data = await res.data;
        setDatas(data);
      }
    } catch (error) {
      console.log(error.response.data.errorMessage);
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
