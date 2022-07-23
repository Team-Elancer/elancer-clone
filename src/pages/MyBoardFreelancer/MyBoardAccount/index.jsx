import axios from 'axios';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useOutletContext } from 'react-router-dom';

import JobField from './JobField';

import * as S from './style';

import CloseEye from 'assets/images/closeEye.png';
import OpenEye from 'assets/images/openEye.png';
import ProfileImgDefault from 'assets/images/signin-profile.png';

import DaumPostcode from 'components/DaumPostCode';
import 'react-datepicker/dist/react-datepicker.css';

import { BaseUrl } from 'utils/config/api';

const MyBoardAccount = () => {
  const [changeBool, setChangeBool] = useState(false);

  const [userData, setUserData, detailProfileData, profileSimpleData] = useOutletContext();

  const [capsLockFlag, setCapsLockFlag] = useState(false);
  const [capsLockFlagConfirm, setCapsLockFlagConfirm] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [website, setWebsite] = useState('');
  const [countryType, setCountryType] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [mainAddress, setMainAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState('');
  const [workTypeField, setWorkTypeField] = useState([]);
  const [workEtcField, setWorkEtcField] = useState('');
  const [careerYear, setCareerYear] = useState('');
  const [careerMonth, setCareerMonth] = useState('');
  const [hopeMonthMinPay, setHopeMonthMinPay] = useState('');
  const [hopeMonthMaxPay, setHopeMonthMaxPay] = useState('');
  const [kosaState, setKosaState] = useState('');
  const [mailReceptionState, setMailReceptionState] = useState('');
  const [presentWorkState, setPresentWorkState] = useState('');
  const [hopeWorkState, setHopeWorkState] = useState('');
  const [workPossibleState, setWorkPossibleState] = useState('');
  const [workStartPossibleDate, setWorkStartPossibleDate] = useState('');
  const [hopeWorkCountry, setHopeWorkCountry] = useState('');
  const [hopeWorkCity, setHopeWorkCity] = useState('');

  const [selectImg, setSelectImg] = useState(null);

  const [eyeCheck, setEyeCheck] = useState(true);
  const [eyeCheck2, setEyeCheck2] = useState(true);
  const [firstEyeImg, setFirsEyeImg] = useState(CloseEye);
  const [secondEyeImg, setSecondEyeImg] = useState(CloseEye);
  const [pwType, setPwType] = useState('password');
  const [commitType, setCommitType] = useState('password');

  const [thumbnailPath, setThumbnailPath] = useState(null);

  const [confirmEmailType, setConfirmEmailType] = useState(true);

  useEffect(() => {
    if (userData) {
      setThumbnailPath(userData.thumbnailPath);
      setName(userData.name);
      setBirthDate(userData.birthDate);
      setPhoneNumber(userData.phone);
      setEmail(userData.email);
      setWebsite(userData.website);
      setCountryType(userData.countryType);
      setZipcode(userData.zipcode);
      setMainAddress(userData.mainAddress);
      setDetailAddress(userData.detailAddress);
      setWorkTypeField(userData.freelancerWorkTypes);
      setWorkEtcField(userData.workEtcField);
      setCareerYear(userData.careerYear);
      setCareerMonth(userData.careerMonth);
      setHopeMonthMinPay(userData.hopeMonthMinPay);
      setHopeMonthMaxPay(userData.hopeMonthMaxPay);
      setKosaState(userData.kosaState);
      setMailReceptionState(userData.mailReceptionState);
      setPresentWorkState(userData.presentWorkState);
      setHopeWorkState(userData.hopeWorkState);
      setWorkPossibleState(userData.workPossibleState);
      setWorkStartPossibleDate(userData.workStartPossibleDate);
      setHopeWorkCountry(userData.hopeWorkCountry);
      setHopeWorkCity(userData.hopeWorkCity);
    }
  }, [userData]);

  const handleDatePicker = (date, str) => {
    if (str === 'birthDate') {
      setBirthDate(
        date
          .toLocaleDateString('ko-KR')
          .split(' ')
          .join('')
          .split('.')
          .filter((data) => data !== '')
          .map((a) => {
            return a < 10 ? a.padStart(2, '0') : a;
          })
          .join('-'),
      );
    }
    if (str === 'workStartPossibleDate')
      setWorkStartPossibleDate(
        date
          .toLocaleDateString('ko-KR')
          .split(' ')
          .join('')
          .split('.')
          .filter((data) => data !== '')
          .map((a) => {
            return a < 10 ? a.padStart(2, '0') : a;
          })
          .join('-'),
      );
  };

  useEffect(() => {
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
  }, [eyeCheck, eyeCheck2]);

  useEffect(() => {
    if (phoneNumber?.length === 10) {
      setPhoneNumber(phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
    }
    if (phoneNumber?.length === 13) {
      setPhoneNumber(phoneNumber.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
    }
  }, [phoneNumber]);

  const editFreelancerAccount = () => {
    const newData = {
      thumbnailPath,
      name,
      password,
      passwordCheck: passwordConfirm,
      birthDate,
      email,
      phone: phoneNumber,
      website,
      countryType,
      zipcode,
      mainAddress,
      detailAddress,
      freelancerWorkTypes: workTypeField,
      workEtcField,
      careerForm: null,
      careerYear,
      careerMonth,
      hopeMonthMinPay,
      hopeMonthMaxPay,
      kosaState,
      mailReceptionState,
      presentWorkState,
      hopeWorkState,
      workPossibleState,
      workStartPossibleDate,
      hopeWorkCountry,
      hopeWorkCity,
    };

    console.log('newData thumbnailPath', newData.thumbnailPath);

    axios({
      url: `${BaseUrl}/freelancer`,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: `${window.localStorage.accessToken}`,
      },
      data: newData,
    })
      .then(() => {
        setUserData(newData);
        console.log(newData);
        alert('정보를 수정했습니다.');
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
        if (newData) alert('필드값 PUT 에러.');
        // window.location.reload();
      });
  };

  //  ========== handle profile img ==========
  const changeProfileImg = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(file);

    const formData = new FormData();

    formData.append('file', file);

    console.log(file);
    console.log(formData);

    axios({
      method: 'POST',
      url: `${BaseUrl}/file/upload`,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
    }).then((res) => {
      console.log(res.data.filePath);
      setThumbnailPath(res.data.filePath);
    });
  };

  //  ========== validate capslock ==========
  const checkCapsLock = (e, str) => {
    if (str === 'confirmPassword') {
      const capsLock = e.getModifierState('CapsLock');
      setCapsLockFlagConfirm(capsLock);
    } else {
      const capsLock = e.getModifierState('CapsLock');
      setCapsLockFlag(capsLock);
    }
  };

  //  ========== validate email ==========
  const validateEmail = () => {
    const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    setConfirmEmailType(regExp.test(email));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editFreelancerAccount();
  };

  return (
    <S.FrameAccount>
      <S.FirstContainer>
        <S.ContainerAccountSave>
          <div>&nbsp; </div>
          <div>
            <span>⬅ &nbsp; </span>
            <span>이랜서 계정</span>
          </div>
          <S.SaveSpan type="submit">저장</S.SaveSpan>
        </S.ContainerAccountSave>

        <S.ContainerImageProfile>
          <S.FileInput type="file" accept="image/*" readonly onChange={changeProfileImg} />
          <S.ImageProfile
            src={!thumbnailPath ? 'https://www.elancer.co.kr/public/images/img-user-none.png' : thumbnailPath}
            alt="profilePic"
          />
          <S.ImageUpload src="https://www.elancer.co.kr/public/images/img-camera-wh.png" alt="" />
        </S.ContainerImageProfile>

        <S.FrameInfo>
          <S.ProfileDiv>
            <S.MarginAutoDiv>
              <S.ProfileImgDiv>
                <S.FileInput type="file" accept="image/*" readonly onChange={changeProfileImg} />
                <S.ProfileImg src={!thumbnailPath ? ProfileImgDefault : thumbnailPath} alt="profile" />
                <S.BallDiv />
              </S.ProfileImgDiv>
              <S.InputDiv top="3" bottom="3">
                <S.BlockDiv>
                  <div>
                    <S.SpanTag right="6em">성명</S.SpanTag>
                  </div>
                  <S.InputTag
                    size="14.5rem"
                    laptopSize="19rem"
                    placeholder="성명"
                    value={name || ''}
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </S.BlockDiv>
              </S.InputDiv>
              <S.InputDiv>
                <S.BlockDiv>
                  <div>
                    <S.SpanTag right="4em">비밀번호</S.SpanTag>
                  </div>
                  <S.InputTag
                    size="14.5rem"
                    laptopSize="19rem"
                    type={pwType}
                    name="password"
                    autoComplete="on"
                    placeholder="비밀번호"
                    value={password || ''}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => {
                      checkCapsLock(e);
                    }}
                  />
                </S.BlockDiv>
                <S.ErrorMessage>{password === '' && '* 6~15자 영문, 숫자, 특수문자를 사용하세요.'}</S.ErrorMessage>
                <S.CapsMessage>{capsLockFlag && 'Caps Lock이 켜져 있습니다.'}</S.CapsMessage>
                <S.EyeImg src={firstEyeImg} alt="eye" onClick={(e) => setEyeCheck(!eyeCheck)} />
              </S.InputDiv>
              <S.InputDiv>
                <S.BlockDiv>
                  <div>
                    <S.SpanTag right="1.8em">비밀번호 확인</S.SpanTag>
                  </div>
                  <S.InputTag
                    size="14.5rem"
                    laptopSize="19rem"
                    type={commitType}
                    name="new-password"
                    autoComplete="on"
                    placeholder="비밀번호 확인"
                    value={passwordConfirm || ''}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    onKeyDown={(e) => {
                      checkCapsLock(e, 'confirmPassword');
                    }}
                  />
                </S.BlockDiv>
                <S.ErrorMessage> {password !== passwordConfirm && '* 비밀번호가 일치하지 않습니다.'}</S.ErrorMessage>

                <S.CapsMessage>{capsLockFlagConfirm && 'Caps Lock이 켜져 있습니다.'}</S.CapsMessage>

                <S.EyeImg src={secondEyeImg} alt="eye" onClick={(e) => setEyeCheck2(!eyeCheck2)} />
              </S.InputDiv>

              <S.InputDiv>
                <S.BlockDiv>
                  <div>
                    <S.SpanTag right="4em">생년월일</S.SpanTag>
                  </div>
                  <S.MaginDiv>
                    <S.InputTag size="14.5rem" placeholder={birthDate} readOnly />
                    <S.DateDiv>
                      <DatePicker
                        onChange={(date) => {
                          handleDatePicker(date, 'birthDate');
                        }}
                      />
                    </S.DateDiv>
                  </S.MaginDiv>
                </S.BlockDiv>
              </S.InputDiv>

              <S.EmailFlex>
                <S.InputDiv>
                  <S.BlockDiv>
                    <div>
                      <S.SpanTag right="5em">이메일</S.SpanTag>
                    </div>
                    <S.InputTag
                      size="13rem"
                      laptopSize="18rem"
                      placeholder="name@example.com"
                      value={email || ''}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        validateEmail(e.target.value);
                      }}
                    />
                  </S.BlockDiv>
                  <S.ErrorMessage>
                    {(!confirmEmailType || email === '') && '* 이메일 주소 형식이 아닙니다.'}
                  </S.ErrorMessage>
                  <S.CapsMessage />
                </S.InputDiv>
              </S.EmailFlex>

              <S.InputDiv>
                <S.BlockDiv>
                  <div>
                    <S.SpanTag right="5rem">휴대폰</S.SpanTag>
                  </div>
                  <S.InputTag
                    size="14.5rem"
                    laptopSize="19rem"
                    placeholder="숫자만 입력"
                    type="text"
                    value={phoneNumber || ''}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </S.BlockDiv>
              </S.InputDiv>

              <S.InputDiv top="2">
                <S.BlockDiv>
                  <div>
                    <S.SpanTag right="4.1rem">웹싸이트</S.SpanTag>
                  </div>
                  <S.InputTag
                    size="14.5rem"
                    laptopSize="19rem"
                    placeholder="웹싸이트 입력하세요"
                    type="text"
                    value={website || ''}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </S.BlockDiv>
              </S.InputDiv>

              <S.InputDiv top="2" bottom="3">
                <S.BlockDiv>
                  <S.SpanTag right="4.1rem" style={{ width: '131px', display: 'block' }}>
                    주소
                  </S.SpanTag>

                  <S.ContainerAddress>
                    <S.ContainerKoreanAddress>
                      <S.ContainerCountrySelect
                        width="8"
                        value={countryType || ''}
                        onChange={(e) => setCountryType(e.target.value)}
                        required
                      >
                        <option>국가 선택</option>
                        <option value="KR" checked={countryType === 'KR'}>
                          대한민국
                        </option>
                        <option value="UK" checked={countryType === 'UK'}>
                          영국
                        </option>
                        <option value="US" checked={countryType === 'US'}>
                          미국
                        </option>
                        <option value="JP" checked={countryType === 'JP'}>
                          일본
                        </option>
                        <option value="CN" checked={countryType === 'CN'}>
                          중국
                        </option>
                      </S.ContainerCountrySelect>
                    </S.ContainerKoreanAddress>

                    <S.InputReadOnly readOnly value={zipcode || ''} />
                    <S.ButtonZipCode type="button" onClick={() => setChangeBool((prev) => !prev)}>
                      우편번호 찾기
                    </S.ButtonZipCode>
                    {changeBool && (
                      <DaumPostcode
                        setChangeBool={setChangeBool}
                        changeBool={changeBool}
                        setZipcode={setZipcode}
                        setMainAddress={setMainAddress}
                      />
                    )}
                  </S.ContainerAddress>
                </S.BlockDiv>
                <S.BlockDiv left="130px">
                  <div>
                    <S.InputKoreanAddress size="17rem" readOnly value={mainAddress || ''} />
                    <S.InputKoreanAddress
                      width="205px"
                      placeholder="상세 주소를 입력하세요."
                      type="text"
                      value={detailAddress || ''}
                      onChange={(e) => setDetailAddress(e.target.value)}
                    />
                  </div>
                </S.BlockDiv>
              </S.InputDiv>
            </S.MarginAutoDiv>
          </S.ProfileDiv>
        </S.FrameInfo>
      </S.FirstContainer>
      <S.SecondContainer>
        <S.ProfileDiv>
          <div>
            <S.MarginAutoDiv>
              <S.InputDiv top="3">
                <S.BlockDiv>
                  <S.SpanTag right="4.1rem">
                    <span>업무분야 &nbsp;</span>
                    <span style={{ color: 'rgba(183,183,183,1)' }}>(3개까지만 선택 가능합니다.)</span>
                  </S.SpanTag>
                </S.BlockDiv>
              </S.InputDiv>
              <JobField workTypeField={workTypeField} setWorkTypeField={setWorkTypeField} />
              <S.JobFieldInput
                type="text"
                placeholder="직접입력"
                value={workEtcField || ''}
                onChange={(e) => setWorkEtcField(e.target.value)}
              />
            </S.MarginAutoDiv>
          </div>
          <S.MarginAutoDiv>
            <S.InputDiv>
              <S.BlockDiv>
                <S.FrameInputNumbers right="4.1rem">
                  <span>경력년수</span>
                  <S.MobileDiv>
                    <S.FlexRow>
                      <S.InputNumbers
                        type="text"
                        value={Number(careerYear) || ''}
                        onChange={(e) => setCareerYear(Number(e.target.value))}
                      />
                      <S.SpanInput>년</S.SpanInput>
                    </S.FlexRow>
                    <S.FlexRow>
                      <S.InputNumbers
                        type="text"
                        value={Number(careerMonth) || ''}
                        onChange={(e) => setCareerMonth(Number(e.target.value))}
                      />
                      <S.SpanInput>개월</S.SpanInput>
                    </S.FlexRow>
                  </S.MobileDiv>
                </S.FrameInputNumbers>
              </S.BlockDiv>
            </S.InputDiv>
          </S.MarginAutoDiv>
          <S.MarginAutoDiv>
            <S.InputDiv>
              <S.BlockDiv>
                <S.FrameInputNumbers right="4.1rem">
                  <span>희망 월단가</span>
                  <S.MobileDiv>
                    <S.FlexRow>
                      <S.InputNumbers
                        type="text"
                        value={Number(hopeMonthMinPay) || ''}
                        onChange={(e) => setHopeMonthMinPay(Number(e.target.value))}
                      />
                      <S.SpanInput>~</S.SpanInput>
                    </S.FlexRow>
                    <S.FlexRow>
                      <S.InputNumbers
                        type="text"
                        value={Number(hopeMonthMaxPay) || ''}
                        onChange={(e) => setHopeMonthMaxPay(Number(e.target.value))}
                      />
                      <S.SpanInput>원</S.SpanInput>
                    </S.FlexRow>
                  </S.MobileDiv>
                </S.FrameInputNumbers>
              </S.BlockDiv>
            </S.InputDiv>
          </S.MarginAutoDiv>
          <S.MarginAutoDiv>
            <S.EmailFlex>
              <S.InputDiv top="1">
                <div>
                  <S.SpanTag right="0">KOSA보유</S.SpanTag>
                </div>
                <S.FlexDiv top="1rem">
                  <S.RadioDiv>
                    <S.RadioInput
                      type="radio"
                      name="POSSESS"
                      checked={kosaState === 'POSSESS'}
                      onChange={(e) => setKosaState(e.target.name)}
                    />
                    <S.RadioText>있다</S.RadioText>
                  </S.RadioDiv>
                  <S.RadioDiv>
                    <S.RadioInput
                      type="radio"
                      name="NOT_POSSESS"
                      checked={kosaState === 'NOT_POSSESS'}
                      onChange={(e) => setKosaState(e.target.name)}
                    />
                    <S.RadioText>없다</S.RadioText>
                  </S.RadioDiv>
                </S.FlexDiv>
              </S.InputDiv>
            </S.EmailFlex>
          </S.MarginAutoDiv>
          <S.MarginAutoDiv>
            <S.EmailFlex>
              <S.InputDiv>
                <div>
                  <S.SpanTag right="0">메일수신 여부</S.SpanTag>
                </div>
                <S.FlexDiv top="1rem">
                  <S.RadioDiv>
                    <S.RadioInput
                      type="radio"
                      name="RECEPTION"
                      checked={mailReceptionState === 'RECEPTION'}
                      onChange={(e) => setMailReceptionState(e.target.name)}
                    />
                    <S.RadioText>수신</S.RadioText>
                  </S.RadioDiv>
                  <S.RadioDiv>
                    <S.RadioInput
                      type="radio"
                      name="NOT_RECEPTION"
                      checked={mailReceptionState === 'NOT_RECEPTION'}
                      onChange={(e) => setMailReceptionState(e.target.name)}
                    />
                    <S.RadioText>미수신</S.RadioText>
                  </S.RadioDiv>
                </S.FlexDiv>
              </S.InputDiv>
            </S.EmailFlex>
          </S.MarginAutoDiv>
          <S.MarginAutoDiv>
            <S.EmailFlex>
              <S.InputDiv>
                <div>
                  <S.SpanTag right="0">현재 업무상태</S.SpanTag>
                </div>
                <S.FlexDiv top="1rem">
                  <S.RadioDiv>
                    <S.RadioInput
                      type="radio"
                      name="JOB_HUNTING"
                      checked={presentWorkState === 'JOB_HUNTING'}
                      onChange={(e) => setPresentWorkState(e.target.name)}
                    />
                    <S.RadioText>구직중</S.RadioText>
                  </S.RadioDiv>
                  <S.RadioDiv>
                    <form action="">
                      <S.RadioInput
                        type="radio"
                        name="REGULAR"
                        checked={presentWorkState === 'REGULAR'}
                        onChange={(e) => setPresentWorkState(e.target.name)}
                      />
                      <S.RadioText>정규직[재직중]</S.RadioText>
                    </form>
                  </S.RadioDiv>
                  <S.RadioDiv>
                    <S.RadioInput
                      type="radio"
                      name="FREE_AT_COMPANY"
                      checked={presentWorkState === 'FREE_AT_COMPANY'}
                      onChange={(e) => setPresentWorkState(e.target.name)}
                    />
                    <S.RadioText>프리랜서[상주]</S.RadioText>
                  </S.RadioDiv>
                  <S.RadioDiv>
                    <S.RadioInput
                      type="radio"
                      name="FREE_AT_HOME"
                      checked={presentWorkState === 'FREE_AT_HOME'}
                      onChange={(e) => setPresentWorkState(e.target.name)}
                    />
                    <S.RadioText>프리랜서[재택]</S.RadioText>
                  </S.RadioDiv>
                </S.FlexDiv>
              </S.InputDiv>
            </S.EmailFlex>
          </S.MarginAutoDiv>
          <S.MarginAutoDiv>
            <S.EmailFlex>
              <S.InputDiv>
                <div>
                  <S.SpanTag right="0">희망 업무형태</S.SpanTag>
                </div>
                <S.FlexDiv top="1rem">
                  <S.RadioDiv>
                    <S.RadioInput
                      type="radio"
                      name="AT_COMPANY"
                      checked={hopeWorkState === 'AT_COMPANY'}
                      onChange={(e) => setHopeWorkState(e.target.name)}
                    />
                    <S.RadioText>상주</S.RadioText>
                  </S.RadioDiv>
                  <S.RadioDiv>
                    <S.RadioInput
                      type="radio"
                      name="AT_HOME"
                      checked={hopeWorkState === 'AT_HOME'}
                      onChange={(e) => setHopeWorkState(e.target.name)}
                    />
                    <S.RadioText>재택</S.RadioText>
                  </S.RadioDiv>

                  <S.RadioDiv>
                    <form>
                      <S.RadioInput
                        type="radio"
                        name="REGULAR"
                        checked={hopeWorkState === 'REGULAR'}
                        onChange={(e) => setHopeWorkState(e.target.name)}
                      />
                      <S.RadioText>정규직</S.RadioText>
                    </form>
                  </S.RadioDiv>
                  <S.RadioDiv>
                    <S.RadioInput
                      type="radio"
                      name="NO_MATTER"
                      checked={hopeWorkState === 'NO_MATTER'}
                      onChange={(e) => setHopeWorkState(e.target.name)}
                    />
                    <S.RadioText>관계없음</S.RadioText>
                  </S.RadioDiv>
                </S.FlexDiv>
              </S.InputDiv>
            </S.EmailFlex>
          </S.MarginAutoDiv>

          <S.MarginAutoDiv>
            <S.MobileFlexRow>
              <S.MarginAutoDiv style={{ marginBottom: '2rem' }}>
                <S.EmailFlex>
                  <S.InputDiv>
                    <div>
                      <S.SpanTag right="0">업무가능 여부</S.SpanTag>
                    </div>
                    <S.FlexDiv top="1rem">
                      <S.RadioDiv>
                        <S.RadioInput
                          type="radio"
                          name="POSSIBLE"
                          checked={workPossibleState === 'POSSIBLE'}
                          onChange={(e) => setWorkPossibleState(e.target.name)}
                        />
                        <S.RadioText>가능</S.RadioText>
                      </S.RadioDiv>
                      <S.RadioDiv>
                        <S.RadioInput
                          type="radio"
                          name="IMPOSSIBLE"
                          checked={workPossibleState === 'IMPOSSIBLE'}
                          onChange={(e) => setWorkPossibleState(e.target.name)}
                        />
                        <S.RadioText>불가능</S.RadioText>
                      </S.RadioDiv>
                    </S.FlexDiv>
                  </S.InputDiv>
                </S.EmailFlex>
              </S.MarginAutoDiv>

              <S.MarginAutoDiv>
                <S.EmailFlex>
                  <S.InputDiv top="0">
                    <div>
                      <S.SpanTag right="0">업무가능일</S.SpanTag>
                    </div>
                    <S.MaginDiv tabletTop="1">
                      <S.InputTag size="14.5rem" placeholder={workStartPossibleDate} readOnly />
                      <S.DateDiv>
                        <DatePicker
                          onChange={(date) => {
                            handleDatePicker(date, 'workStartPossibleDate');
                          }}
                        />
                      </S.DateDiv>
                    </S.MaginDiv>
                  </S.InputDiv>
                </S.EmailFlex>
              </S.MarginAutoDiv>
            </S.MobileFlexRow>
          </S.MarginAutoDiv>

          <S.MarginAutoDiv>
            <S.SpanTag right="0">희망지역</S.SpanTag>
            <S.ContainerCountryType>
              <S.ContainerCountrySelect
                width="8"
                value={hopeWorkCountry || ''}
                onChange={(e) => setHopeWorkCountry(e.target.value)}
              >
                <option>국가 선택</option>
                <option value="KR" checked={hopeWorkCountry === 'KR'}>
                  대한민국
                </option>
                <option value="UK" checked={hopeWorkCountry === 'UK'}>
                  영국
                </option>
                <option value="US" checked={hopeWorkCountry === 'US'}>
                  미국
                </option>
                <option value="JP" checked={hopeWorkCountry === 'JP'}>
                  일본
                </option>
                <option value="CN" checked={hopeWorkCountry === 'CN'}>
                  중국
                </option>
              </S.ContainerCountrySelect>

              <S.InputWorkCity
                size="14.5rem"
                laptopSize="19rem"
                placeholder="도시 입력 예)서울:인천:대전"
                type="text"
                value={hopeWorkCity || ''}
                onChange={(e) => setHopeWorkCity(e.target.value)}
              />
            </S.ContainerCountryType>
          </S.MarginAutoDiv>

          <S.MarginAutoDiv last>
            <S.ContainerDeactivateSave>
              <S.ButtonDeactivate type="submit">회원탈퇴</S.ButtonDeactivate>
              {name &&
              password &&
              passwordConfirm &&
              birthDate &&
              email &&
              phoneNumber &&
              website &&
              countryType &&
              zipcode &&
              mainAddress &&
              detailAddress &&
              workTypeField.length > 0 &&
              workEtcField &&
              careerMonth &&
              careerYear &&
              hopeMonthMaxPay &&
              hopeMonthMinPay &&
              kosaState &&
              mailReceptionState &&
              presentWorkState &&
              hopeWorkState &&
              workPossibleState &&
              workStartPossibleDate &&
              hopeWorkCountry &&
              hopeWorkCity ? (
                <S.ButtonSave type="button" onClick={handleSubmit} style={{ cursor: 'pointer' }}>
                  저장하기
                </S.ButtonSave>
              ) : (
                <S.ButtonSaveDoubleCheck
                  type="button"
                  onClick={() => alert('필드확인하세요')}
                  style={{ cursor: 'pointer' }}
                >
                  저장하기
                </S.ButtonSaveDoubleCheck>
              )}
            </S.ContainerDeactivateSave>
          </S.MarginAutoDiv>
        </S.ProfileDiv>
      </S.SecondContainer>
    </S.FrameAccount>
  );
};

export default MyBoardAccount;
