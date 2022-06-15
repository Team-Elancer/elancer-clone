import axios from 'axios';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import * as S from './style';

import Loading from 'components/Loading';
import GridBottom from 'components/Modal/GridBottom';
import LeftMenu from 'components/Myboard/LeftMenu';
import Footer from 'layouts/Footer';
import CompanyHeader from 'layouts/Header/Company';

const Dashboard = () => {
  const [Datas, setDatas] = useState('');
  const [axiosUrl, setaxiosUrl] = useState('');

  const authAxios = axios.create({
    baseURL: 'http://ec2-13-209-114-196.ap-northeast-2.compute.amazonaws.com:8080',
    headers: {
      Authorization: `${window.localStorage.accessToken}`,
    },
  });

  const fetchData = async () => {
    try {
      if (axiosUrl) {
        const res = await authAxios(axiosUrl);
        const data = await res.data;
        setDatas(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [axiosUrl]);

  return (
    <S.Container>
      <CompanyHeader width="1224px" />
      {/* {Datas === '' ? (
        <Loading />
      ) : ( */}
      <S.SizeDiv>
        <S.FlexDiv>
          <LeftMenu />
          <S.BoardDiv>
            <Outlet context={[Datas, setDatas, axiosUrl, setaxiosUrl, fetchData]} />
          </S.BoardDiv>
        </S.FlexDiv>
      </S.SizeDiv>
      {/* )} */}
      <Footer toBottom="static" />
      <GridBottom />
    </S.Container>
  );
};

export default Dashboard;
