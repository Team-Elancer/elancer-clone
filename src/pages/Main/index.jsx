import axios from 'axios';
import { useEffect, useState } from 'react';
import GoogleLogin from 'react-google-login';
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
  const [newDatas, setNewDatas] = useState();

  const authAxios = axios.create({
    baseURL: 'http://ec2-13-209-114-196.ap-northeast-2.compute.amazonaws.com:8080',
    headers: {
      Authorization: `${window.localStorage.accessToken}`,
    },
  });
  const fetchData = async () => {
    try {
      const res = await authAxios('/freelancer');
      const Data = await res.data;
      setNewDatas(Data);
    } catch (err) {
      console.log(err);
    }
  };

  const googleSuccess = (respone) => {
    console.log(respone);
    axios({
      method: 'POST',
      url: 'https://accounts.google.com/o/oauth2/v2/auth?client_id=428541390243-7cevccqe0afejrec8et1025hbk8v36p0.apps.googleusercontent.com&amp;response_type=code&amp;scope=email%20profile&amp;redirect_uri=http://ec2-13-209-114-196.ap-northeast-2.compute.amazonaws.com:8080/login/google',
      data: {
        requestData: respone,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        return alert(err.message);
      });
  };

  const googleFail = (respone) => {
    console.log(respone);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <S.Container>
      <S.BackImg>
        <Header />
        <SearchBar />
        <GoogleLogin
          clientId="428541390243-7cevccqe0afejrec8et1025hbk8v36p0.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={googleSuccess}
          onFailure={googleFail}
          cookiePolicy="single_host_origin"
        />
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
