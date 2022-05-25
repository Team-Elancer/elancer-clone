import { useEffect, useState } from 'react';
import PostCode from '../PostCode';
import * as S from './style';
import Bici from 'assets/images/bici.png';
import Camera from 'assets/images/camera.png';
import Cancel from 'assets/images/cancel-orange.png';
import CloseEye from 'assets/images/closeEye.png';
import OpenEye from 'assets/images/openEye.png';
import SubmitButton from 'components/Button/SubmitButton';

const CompanyAccount = ({
  display = 'none',
  idDisplay = 'block',
  tabletDisplay = 'flex',
  setCompanyData,
  userData,
  setCompanyDatas,
  fetchData,
}) => {
  const [placePostcode, setPlacePostcode] = useState('우편번호');
  const [placeAddress, setPlaceAddress] = useState('우편번호 찾기를 통해 입력하세요.');
  const [userAddress, setUserAddress] = useState('상세 주소를 입력하세요.');
  const [changeBool, setChangeBool] = useState(false);

  const [eyeCheck, setEyeCheck] = useState(true);
  const [eyeCheck2, setEyeCheck2] = useState(true);
  const [firstEyeImg, setFirsEyeImg] = useState(CloseEye);
  const [secondEyeImg, setSecondEyeImg] = useState(CloseEye);
  const [pwType, setPwType] = useState('password');
  const [commitType, setCommitType] = useState('password');

  const [comName, setComname] = useState('');
  const [comCount, setComCount] = useState('');
  const [userName, setUserName] = useState('');
  const [userPosition, setUserPosition] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userPhoneNumber, setUserPhoneNumber] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [companyWebsite, setCompanyWebsite] = useState('');
  const [userCountry, setUserCountry] = useState('KR');
  const [business, setBusiness] = useState('');
  const [yearSale, setYearSale] = useState('');
  const [businessNumber, setBusinessNumber] = useState('');

  const comNameFuntion = (e) => {
    setComname(e.target.value);
  };
  const comCountFuntion = (e) => {
    setComCount(Number(e.target.value));
  };
  const userNameFuntion = (e) => {
    setUserName(e.target.value);
  };
  const userPositionFuntion = (e) => {
    setUserPosition(e.target.value);
  };
  const userIdFuntion = (e) => {
    setId(e.target.value);
  };
  const passwordFuntion = (e) => {
    setPassword(e.target.value);
  };
  const passwordCheckFuntion = (e) => {
    setPasswordCheck(e.target.value);
  };
  const phoneNumberFuntion = (e) => {
    setPhoneNumber(e.target.value);
  };
  const userPhoneNumberFuntion = (e) => {
    setUserPhoneNumber(e.target.value);
  };
  const userEmailFuntion = (e) => {
    setUserEmail(e.target.value);
  };
  const companyWebsiteFuntion = (e) => {
    setCompanyWebsite(e.target.value);
  };
  const businessFuntion = (e) => {
    setBusiness(e.target.value);
  };
  const yearSaleFuntion = (e) => {
    setYearSale(Number(e.target.value));
  };
  const businessNumberFuntion = (e) => {
    setBusinessNumber(e.target.value);
  };

  const changeHello = () => {
    if (userData) {
      setCompanyDatas({
        password1: password,
        password2: passwordCheck,
        name: userName,
        phone: phoneNumber,
        email: userEmail,
        companyName: comName,
        companyPeople: comCount,
        position: userPosition,
        telNumber: userPhoneNumber,
        website: companyWebsite,
        address: {
          country: userCountry,
          zipcode: placePostcode,
          mainAddress: placeAddress,
          detailAddress: userAddress,
        },
        bizContents: business,
        sales: yearSale,
        idNumber: businessNumber,
      });
    } else {
      setCompanyData({
        userId: id,
        password1: password,
        password2: passwordCheck,
        name: userName,
        phone: phoneNumber,
        email: userEmail,
        companyName: comName,
        companyPeople: comCount,
        position: userPosition,
        telNumber: userPhoneNumber,
        website: companyWebsite,
        address: {
          country: userCountry,
          zipcode: placePostcode,
          mainAddress: placeAddress,
          detailAddress: userAddress,
        },
        bizContents: business,
        sales: yearSale,
        idNumber: businessNumber,
      });
    }
  };

  const changeEye = () => {
    setEyeCheck(!eyeCheck);
  };

  const changeSecondEye = () => {
    setEyeCheck2(!eyeCheck2);
  };

  useEffect(() => {
    if (userData) {
      setComname(userData.companyName);
      setComCount(userData.companyPeople);
      setUserName(userData.name);
      setUserPosition(userData.position);
      setPhoneNumber(userData.phone);
      setUserPhoneNumber(userData.telNumber);
      setUserEmail(userData.email);
      setCompanyWebsite(userData.website);
      setBusiness(userData.bizContents);
      setYearSale(userData.sales);
      setBusinessNumber(userData.idNumber);
      setUserCountry(userData.address.country);
      setPlacePostcode(userData.address.zipcode);
      setPlaceAddress(userData.address.mainAddress);
      setUserAddress(userData.address.detailAddress);
    }
    if (eyeCheck === true) {
      setFirsEyeImg(CloseEye);
      setPwType('password');
    } else if (eyeCheck !== true) {
      setFirsEyeImg(OpenEye);
      setPwType('text');
    }
    if (eyeCheck2 === true) {
      setSecondEyeImg(CloseEye);
      setCommitType('password');
    } else if (eyeCheck2 !== true) {
      setSecondEyeImg(OpenEye);
      setCommitType('text');
    }
  }, [eyeCheck, eyeCheck2, userData]);

  return (
    <S.ProfileDiv onChange={changeHello}>
      <S.MarginAutoDiv>
        <S.MobilePhoto display={display}>
          <S.ProfileMobileImg src={Bici} alt="profile" />
          <S.CameraImg src={Camera} alt="Camera" />
        </S.MobilePhoto>
        <S.DisplayDiv>
          <S.ProfileImg src={Bici} alt="profile" />
          <div>
            <S.FileInput type="file" width="234px" height="154px" left="30rem" top="3rem" laptopLeft="28rem" />
          </div>
        </S.DisplayDiv>
        <S.InputDiv>
          <S.BlockDiv display="flex">
            <div>
              <S.SpanTag right="4.9rem">회사명</S.SpanTag>
            </div>
            <S.InputTag size="14.5rem" placeholder="회사명" value={comName} onChange={comNameFuntion} />
          </S.BlockDiv>
          <S.ErrorMessage />
          <S.CapsMessage />
        </S.InputDiv>
        <S.InputDiv>
          <S.BlockDiv display="flex">
            <div>
              <S.SpanTag right="2.7rem">회사 인원수</S.SpanTag>
            </div>
            <S.InputTag
              type="number"
              size="14.5rem"
              placeholder="회사 인원수"
              value={comCount}
              onChange={comCountFuntion}
            />
          </S.BlockDiv>
          <S.ErrorMessage />
          <S.CapsMessage />
        </S.InputDiv>
        <S.InputDiv>
          <S.BlockDiv display="flex">
            <div>
              <S.SpanTag right="4rem">담당자명</S.SpanTag>
            </div>
            <S.InputTag Mobilesize="12rem" placeholder="담당자 명" value={userName} onChange={userNameFuntion} />
            <S.InputTag
              MobileMargin="0.4rem"
              Mobilesize="8rem"
              placeholder="직책"
              value={userPosition}
              onChange={userPositionFuntion}
            />
          </S.BlockDiv>
          <S.ErrorMessage />
          <S.CapsMessage />
        </S.InputDiv>
        <S.InputDiv>
          <S.IdBlockDiv display={idDisplay} tabletDisplay={tabletDisplay}>
            <div>
              <S.SpanTag right="3rem">회원아이디</S.SpanTag>
            </div>
            <S.InputTag
              size="14.5rem"
              laptopSize="25rem"
              placeholder="회원아이디 5~15자 영문,숫자"
              value={id}
              onChange={userIdFuntion}
            />
            <S.ErrorMessage>* 아이디는 5~20자 이내로 입력하세요.</S.ErrorMessage>
            <S.CapsMessage>Caps Lock이 켜져 있습니다.</S.CapsMessage>
          </S.IdBlockDiv>
        </S.InputDiv>
        <S.FlexDiv>
          <S.InputDiv>
            <S.BlockDiv display="flex">
              <div>
                <S.SpanTag right="4rem">비밀번호</S.SpanTag>
              </div>
              <S.InputTag
                size="12rem"
                laptopSize="14rem"
                type={pwType}
                name="password"
                autoComplete="on"
                placeholder="비밀번호"
                value={password}
                onChange={passwordFuntion}
              />
            </S.BlockDiv>
            <S.ErrorMessage>* 6~15자 영문, 숫자, 특수문자를 사용하세요.</S.ErrorMessage>
            <S.CapsMessage>Caps Lock이 켜져 있습니다.</S.CapsMessage>
            <S.EyeImg src={firstEyeImg} alt="eye" onClick={changeEye} />
          </S.InputDiv>
          <S.InputDiv left="1rem">
            <S.BlockDiv display="flex">
              <div>
                <S.SpanTag right="0.9rem">비밀번호 확인</S.SpanTag>
              </div>
              <S.InputTag
                size="12rem"
                laptopSize="14rem"
                type={commitType}
                name="new-password"
                autoComplete="on"
                placeholder="비밀번호 확인"
                value={passwordCheck}
                onChange={passwordCheckFuntion}
              />
            </S.BlockDiv>
            <S.ErrorMessage>* 비밀번호가 일치하지 않습니다.</S.ErrorMessage>
            <S.CapsMessage>Caps Lock이 켜져 있습니다.</S.CapsMessage>
            <S.EyeImg src={secondEyeImg} alt="eye" onClick={changeSecondEye} />
          </S.InputDiv>
        </S.FlexDiv>
        <S.FlexDiv>
          <S.InputDiv>
            <S.BlockDiv display="flex">
              <div>
                <S.SpanTag right="4rem">전화번호</S.SpanTag>
              </div>
              <S.InputTag
                size="12rem"
                laptopSize="14rem"
                type="number"
                placeholder="숫자만 입력"
                value={phoneNumber}
                onChange={phoneNumberFuntion}
              />
            </S.BlockDiv>
            <S.ErrorMessage />
            <S.CapsMessage />
          </S.InputDiv>
          <S.InputDiv left="1rem">
            <S.BlockDiv display="flex">
              <div>
                <S.SpanTag right="0.9rem">담당자 휴대폰</S.SpanTag>
              </div>
              <S.InputTag
                size="12rem"
                laptopSize="14rem"
                type="number"
                placeholder="숫자만 입력"
                value={userPhoneNumber}
                onChange={userPhoneNumberFuntion}
              />
            </S.BlockDiv>
            <S.ErrorMessage />
            <S.CapsMessage />
          </S.InputDiv>
        </S.FlexDiv>
        <S.InputDiv>
          <S.BlockDiv display="flex">
            <div>
              <S.SpanTag right="4.8rem">이메일</S.SpanTag>
            </div>
            <S.InputTag
              size="13rem"
              laptopSize="23rem"
              placeholder="name@example.com"
              value={userEmail}
              onChange={userEmailFuntion}
            />
          </S.BlockDiv>
          <S.ErrorMessage>* 이메일 주소 형식이 아닙니다.</S.ErrorMessage>
          <S.CapsMessage />
        </S.InputDiv>
        <S.InputDiv>
          <S.BlockDiv display="flex">
            <div>
              <S.SpanTag star="none" right="4rem">
                웹사이트
              </S.SpanTag>
            </div>
            <S.InputTag
              size="13rem"
              laptopSize="23rem"
              placeholder="name@example.com"
              value={companyWebsite}
              onChange={companyWebsiteFuntion}
            />
          </S.BlockDiv>
          <S.ErrorMessage>* 이메일 주소 형식이 아닙니다.</S.ErrorMessage>
          <S.CapsMessage />
        </S.InputDiv>
        <PostCode
          userCountry={userCountry}
          setUserCountry={setUserCountry}
          placePostcode={placePostcode}
          setPlacePostcode={setPlacePostcode}
          setChangeBool={setChangeBool}
          changeBool={changeBool}
          placeAddress={placeAddress}
          setPlaceAddress={setPlaceAddress}
          userAddress={userAddress}
          setUserAddress={setUserAddress}
        />
        <S.BorderDiv />
        <S.FlexDiv top="2rem">
          <S.InputDiv>
            <S.BlockDiv>
              <div>
                <S.SpanTag star="none" right="1rem">
                  주요 사업내용
                </S.SpanTag>
              </div>
              <S.CapsMessage Mobiledisplay="none" display="block" />
              <S.InputTag size="8rem" placeholder="주요 사업내용" value={business} onChange={businessFuntion} />
            </S.BlockDiv>
            <S.CapsMessage />
          </S.InputDiv>
          <S.InputDiv>
            <S.BlockDiv>
              <div>
                <S.SpanTag star="none" right="1rem">
                  연간 매출액
                </S.SpanTag>
              </div>
              <S.CapsMessage Mobiledisplay="none" display="block" />
              <S.InputTag
                size="8rem"
                placeholder="연간 매출액"
                type="number"
                value={yearSale}
                onChange={yearSaleFuntion}
              />
            </S.BlockDiv>
            <S.CapsMessage />
          </S.InputDiv>
          <S.InputDiv>
            <S.BlockDiv>
              <div>
                <S.SpanTag right="1rem">사업자등록번호</S.SpanTag>
              </div>
              <S.CapsMessage Mobiledisplay="none" display="block" />
              <S.InputTag
                Mobilesize="15.5rem"
                size="8rem"
                placeholder="사업자등록번호"
                type="number"
                value={businessNumber}
                onChange={businessNumberFuntion}
              />
            </S.BlockDiv>
            <S.CapsMessage />
          </S.InputDiv>
          <S.InputDiv>
            <S.BlockDiv>
              <div>
                <S.SpanTag right="5em">사업자등록증</S.SpanTag>
              </div>
              <S.CapsMessage Mobiledisplay="none" display="block" />
              <S.CancelImg src={Cancel} alt="cancel" />
              <S.InputTag Mobilesize="15.5rem" size="8rem" laptopSize="13.2rem" placeholder="사업자등록증" />
              <S.BlacSpan>
                <S.FileInput type="file" width="75px" height="45px" left="15.7rem" top="1.7rem" />
                파일 등록
              </S.BlacSpan>
            </S.BlockDiv>
            <S.CapsMessage />
          </S.InputDiv>
        </S.FlexDiv>
        <S.FileMessage>※ 사업자등록증 파일의 크기는 10MB를 초과하지 않아야 합니다</S.FileMessage>
        <S.ButtonDiv display={display}>
          <S.EndDiv>
            <S.Secession>회원탈퇴</S.Secession>
          </S.EndDiv>
          <S.CenterDiv>
            <SubmitButton text="저장하기" heights="0.8rem" sides="1.8rem" />
          </S.CenterDiv>
        </S.ButtonDiv>
      </S.MarginAutoDiv>
    </S.ProfileDiv>
  );
};

export default CompanyAccount;
