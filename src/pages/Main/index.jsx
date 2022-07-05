import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

import programmer from 'assets/images/programmer.png';
import Eblock from 'components/Arround-Project';
import ChoiceProject from 'components/Choice-Project';
import Count from 'components/Count';
import GridBottom from 'components/Modal/GridBottom';
import ReFreelancer from 'components/Re-Freelancer';
import ReProject from 'components/Re-Project';
import SearchBar from 'components/Search';
import Footer from 'layouts/Footer';
import Header from 'layouts/Header';
import { FILTERED_DATA } from 'utils/config/api';

const Main = () => {
  const [Datas, setDatas] = useState('');
  const [axiosUrl, setaxiosUrl] = useState('');
  const navi = useNavigate();

  const fetchData = async () => {
    try {
      if (axiosUrl) {
        const res = await FILTERED_DATA(axiosUrl);
        const data = await res.data;
        setDatas(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <S.Container>
      <S.BackImg>
        <Header />
        <SearchBar />
        <S.SecondDiv>
          <S.Img src={programmer} alr="progammer" />
          <S.TextDiv>
            #3월8일
            <br />
            #세계여성의날
            <br />
            #에이다러브레이스
            <br />
          </S.TextDiv>
        </S.SecondDiv>
      </S.BackImg>
      <S.ThirdDiv>
        <Count />
        <Eblock />
        <ReProject fetchData={fetchData} setaxiosUrl={setaxiosUrl} axiosUrl={axiosUrl} Datas={Datas} />
        <ChoiceProject />
        <ReFreelancer />
      </S.ThirdDiv>
      <Footer toBottom="static" />
      <GridBottom />
    </S.Container>
  );
};

export default Main;
