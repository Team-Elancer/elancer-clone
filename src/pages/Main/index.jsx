import axios from 'axios';
import { useEffect, useState } from 'react';
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

const Main = () => {
  // const [newDatas, setNewDatas] = useState();
  // const fetchData = async () => {
  //   try {
  //     const res = await axios('http://ec2-13-209-114-196.ap-northeast-2.compute.amazonaws.com:8080/freelancer');
  //     const Data = await res.data;
  //     setNewDatas(Data);
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };

  useEffect(() => {
    // fetchData();
    console.log(window.localStorage.accessToken);
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
        <ReProject />
        <ChoiceProject />
        <ReFreelancer />
      </S.ThirdDiv>
      <Footer toBottom="static" />
      <GridBottom />
    </S.Container>
  );
};

export default Main;
