import axios from 'axios';
import { useEffect, useState } from 'react';
import * as S from './style';

import Back from 'assets/images/arrowback.png';
import CompanyAccount from 'components/DashBoard/Company-Account';

const DashBoardAccount = () => {
  const [userData, setUserData] = useState('');

  const authAxios = axios.create({
    baseURL: 'http://ec2-13-209-114-196.ap-northeast-2.compute.amazonaws.com:8080',
    headers: {
      Authorization: `${window.localStorage.accessToken}`,
    },
  });
  const fetchData = async () => {
    try {
      const res = await authAxios('/enterprise');
      const Data = await res.data;
      setUserData(Data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
    console.log(userData);
  }, []);

  return (
    <>
      <S.SpacebetweenDiv>
        <h1>{userData && userData.phone}</h1>
        <S.Img src={Back} alt="arrowback" />
        <S.H1>이랜서 계정</S.H1>
      </S.SpacebetweenDiv>
      <CompanyAccount display="block" />
      <S.ButtonDiv />
    </>
  );
};

export default DashBoardAccount;
