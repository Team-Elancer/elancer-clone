import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './style';

import Back from 'assets/images/arrowback.png';
import CompanyAccount from 'components/DashBoard/Company-Account';
import { BaseUrl, CLIENT_FREELANCER, CLIENT_FREELANCER_GET_REFRESHTOKEN } from 'utils/config/api';

const DashBoardAccount = () => {
  const [userData, setUserData] = useState('');

  const fetchData = async () => {
    try {
      const res = await CLIENT_FREELANCER('/enterprise');
      const Data = await res.data;
      setUserData(Data);
    } catch (err) {
      console.log(err);
    }
  };

  const [userAddress, setUserAddress] = useState('');
  const [check, setCheck] = useState(true);

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
    thumbnail: null,
    bizRegistrationFile: null,
  });

  const changeUser = (e) => {
    e.preventDefault();
    axios({
      method: 'PUT',
      url: `${BaseUrl}/enterprise`,
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
  const deleteUser = (e) => {
    e.preventDefault();
    const checkConfrim = window.confirm('삭제하시겠습니까?');
    if (checkConfrim) {
      axios({
        method: 'DELETE',
        url: `${BaseUrl}/enterprise`,
        headers: {
          Authorization: `${window.localStorage.accessToken}`,
        },
      })
        .then((res) => {
          alert('삭제가 완료되었습니다.');
        })
        .catch((err) => {
          alert(err.message);
          setCheck(!check);
        });
    } else {
      console.log('취소');
    }
  };

  useEffect(() => {
    fetchData();
    if (userData) {
      setUserAddress(Object.values(userData.address));
    }
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
        deleteUser={deleteUser}
        companyDatas={companyDatas}
      />
    </form>
  );
};

export default DashBoardAccount;
