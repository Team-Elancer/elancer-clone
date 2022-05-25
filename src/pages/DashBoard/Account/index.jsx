import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './style';

import Back from 'assets/images/arrowback.png';
import CompanyAccount from 'components/DashBoard/Company-Account';

const DashBoardAccount = () => {
  const [userData, setUserData] = useState('');
  const [hello, sethello] = useState(true);

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

  const [userAddress, setUserAddress] = useState('');
  const [check, setCheck] = useState(true);

  const navi = useNavigate();

  const [companyDatas, setCompanyDatas] = useState({
    companyName: userData.companyName,
    companyPeople: userData.companyPeople,
    name: userData.name,
    position: userData.position,
    password1: userData.password1,
    password2: userData.password2,
    phone: userData.phone,
    telNumber: userData.telNumber,
    email: userData.email,
    website: userData.website,
    address: {
      country: userAddress[0],
      zipcode: userAddress[1],
      mainAddress: userAddress[2],
      detailAddress: userAddress[3],
    },
    bizContents: userData.bizContents,
    sales: userData.sales,
    idNumber: userData.idNumber,
  });

  const changeUser = (e) => {
    e.preventDefault();
    axios({
      method: 'PUT',
      url: 'http://ec2-13-209-114-196.ap-northeast-2.compute.amazonaws.com:8080/enterprise',
      headers: {
        Authorization: `${window.localStorage.accessToken}`,
      },
      data: companyDatas,
    })
      .then((res) => {
        alert('정보를 수정했습니다.');
        setCheck(!check);
      })
      .catch((err) => {
        alert(err.message);
        setCheck(!check);
      });
  };

  useEffect(() => {
    fetchData();
  }, [check]);

  return (
    <form onSubmit={changeUser}>
      <S.SpacebetweenDiv>
        <S.Img src={Back} alt="arrowback" />
        <S.H1>이랜서 계정</S.H1>
      </S.SpacebetweenDiv>
      <CompanyAccount
        display="block"
        idDisplay="none"
        tabletDisplay="none"
        userData={userData}
        fetchData={fetchData}
        setCompanyDatas={setCompanyDatas}
      />
      <S.ButtonDiv />
    </form>
  );
};

export default DashBoardAccount;
