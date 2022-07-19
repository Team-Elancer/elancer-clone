import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import Bici from 'assets/images/bici.png';
import Camera from 'assets/images/camera.png';
import SubmitButton from 'components/Button/SubmitButton';
import CompanyAccount from 'components/DashBoard/Company-Account';
import InlineBlock from 'components/Inline-Block';
import { BaseUrl } from 'utils/config/api';

const SignUpCompany = () => {
  const navi = useNavigate();
  const [companyData, setCompanyData] = useState({
    userId: 'user810700000',
    password1: 'wh8107',
    password2: 'wh8107',
    name: 'name',
    phone: '01000000000',
    email: 'test@gmail.com',
    companyName: 'test',
    companyPeople: 10,
    position: '사장',
    telNumber: '01011111111',
    website: 'www.test.com',
    address: {
      country: 'KR',
      zipcode: '123',
      mainAddress: '"서울 양천구 목동서로 9"',
      detailAddress: '주소2',
    },
    bizContents: '주요 사업',
    sales: 10000000,
    idNumber: '0000000000',
    thumbnail: null,
  });

  const CreateWrite = (event) => {
    event.preventDefault();
    axios({
      method: 'POST',
      url: `${BaseUrl}/enterprise`,
      data: companyData,
    })
      .then((res) => {
        axios({
          method: 'POST',
          url: `${BaseUrl}/login`,
          data: {
            userId: companyData.userId,
            password: companyData.password1,
          },
        })
          .then((res) => {
            console.log('hello');
            window.localStorage.setItem('accessToken', res.data.accessToken);
            window.localStorage.setItem('refreshToken', res.data.refreshToken);
            window.localStorage.setItem('memberType', JSON.stringify(res.data.memberType));
          })
          .catch((err) => {
            console.log(err.message);
            navi('/login');
          });
        alert('생성이 완료되었습니다.');
        navi('/signup/finish');
      })
      .catch((err) => {
        return alert('별표시가 있는곳은 모두 입력해주세요.');
      });
  };

  return (
    <form onSubmit={CreateWrite}>
      <InlineBlock h1="기업 회원가입" text="회원정보" pages="2 / 3" />
      <S.MobilePhoto>
        <S.ProfileMobileImg src={Bici} alt="profile" />
        <S.CameraImg src={Camera} alt="Camera" />
      </S.MobilePhoto>
      <S.H1>기본정보</S.H1>
      <CompanyAccount companyData={companyData} setCompanyData={setCompanyData} />
      <S.SubmitDiv>
        <S.MarginAutoDiv>
          <S.BordeDiv>
            <h1>elancer를 알게된 경로</h1>
          </S.BordeDiv>
          <S.UlTag>
            <S.LiTag>기존회원추천</S.LiTag>
            <S.LiTag>인터넷광고/이메일</S.LiTag>
            <S.LiTag>웹검색</S.LiTag>
            <S.LiTag>언론보도(신문/잡지)</S.LiTag>
            <S.LiTag>친구/지인 추천</S.LiTag>
            <S.LiTag>교육/세미나</S.LiTag>
            <S.LiTag>기업관계자 소개</S.LiTag>
          </S.UlTag>
          <S.AgreeDiv>약관동의</S.AgreeDiv>
          <S.CheckDiv>
            <S.CheckBox type="checkbox" name="agree1" id="agree1" />
            <S.CheckPtag>1. 회원가입약관 동의</S.CheckPtag>
            <S.ATag href="https://www.elancer.co.kr/terms" target="_blank">
              [보기]
            </S.ATag>
          </S.CheckDiv>
          <S.CheckDiv>
            <S.CheckBox type="checkbox" name="agree2" id="agree2" />
            <S.CheckPtag>2. 개인정보 보호정책 동의 </S.CheckPtag>
            <S.ATag href="https://www.elancer.co.kr/policy" target="_blank">
              [보기]
            </S.ATag>
          </S.CheckDiv>
          <S.CheckDiv>
            <S.CheckBox type="checkbox" name="agreeAll" id="agreeAll" />
            <S.CheckPtag>모두 동의</S.CheckPtag>
          </S.CheckDiv>
          <S.CenterDiv>
            <SubmitButton text="완료" heights="0.8rem" sides="1.8rem" />
          </S.CenterDiv>
        </S.MarginAutoDiv>
      </S.SubmitDiv>
    </form>
  );
};

export default SignUpCompany;
