import axios from 'axios';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import Camera from 'assets/images/camera.png';
import CloseEye from 'assets/images/closeEye.png';
import OpenEye from 'assets/images/openEye.png';
import Profile from 'assets/images/signin-profile.png';
import SubmitButton from 'components/Button/SubmitButton';
import InlineBlock from 'components/Inline-Block';
import { BaseUrl } from 'utils/config/api';

import 'react-datepicker/dist/react-datepicker.css';

const SignUpFreeLancer = () => {
  const navi = useNavigate();

  const [capsLockFlag, setCapsLockFlag] = useState(false);

  const [eyeCheck, setEyeCheck] = useState(true);
  const [eyeCheck2, setEyeCheck2] = useState(true);
  const [firstEyeImg, setFirsEyeImg] = useState(CloseEye);
  const [secondEyeImg, setSecondEyeImg] = useState(CloseEye);
  const [pwType, setPwType] = useState('password');
  const [commitType, setCommitType] = useState('password');

  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [email, setEmail] = useState('');
  const [emailRadio, setEmailRadio] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [jobType, setJobType] = useState('');
  const [jobRadio, setJobRadio] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectImg, setSelectImg] = useState(null);
  const [checkImg, setCheckImg] = useState(null);

  const jobFuntion = (e) => {
    setJobType(e.target.value);
  };

  const checkCapsLock = (e) => {
    const capsLock = e.getModifierState('CapsLock');
    setCapsLockFlag(capsLock);
  };

  const dateFunction = (date) => {
    setSelectedDate(
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

  const changeProfileImg = async (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(file);

    const formData = new FormData();
    formData.append('file', file);

    const Header = { 'Content-Type': 'multipart/form-data' };

    axios({
      method: 'POST',
      url: `${BaseUrl}/file/upload`,
      header: Header,
      data: formData,
    })
      .then((res) => {
        setCheckImg(res.data.filePath);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const CreateWrite = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', checkImg);

    axios({
      method: 'POST',
      url: `${BaseUrl}/freelancer`,
      data: {
        memberName: name,
        memberId: id,
        memberPassword: password,
        memberPasswordCheck: passwordConfirm,
        memberEmail: email,
        mailReceptionState: emailRadio,
        memberPhone: phoneNumber,
        positionType: jobType,
        workPossibleState: jobRadio,
        workStartPossibleDate: '2022-06-01',
        thumbnail: checkImg,
      },
    })
      .then((res) => {
        axios({
          method: 'POST',
          url: `${BaseUrl}/login`,
          data: {
            userId: id,
            password: passwordConfirm,
          },
        })
          .then((res) => {
            window.localStorage.setItem('accessToken', res.data.accessToken);
            window.localStorage.setItem('refreshToken', res.data.refreshToken);
            window.localStorage.setItem('memberType', JSON.stringify(res.data.memberType));
            window.localStorage.setItem('name', JSON.stringify(name));
            window.localStorage.setItem('id', JSON.stringify(id));
          })
          .catch((err) => {
            console.log(err.message);
            navi('/login');
          });
        alert('????????? ?????????????????????.');
        navi('/signup/finish');
        window.location.reload();
      })
      .catch((err) => {
        return alert('???????????? ???????????? ?????? ??????????????????.');
      });
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
  }, [eyeCheck, eyeCheck2, selectedDate]);

  useEffect(() => {
    if (phoneNumber?.length === 10) {
      setPhoneNumber(phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
    }
    if (phoneNumber?.length === 13) {
      setPhoneNumber(phoneNumber.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
    }
  }, [phoneNumber]);

  return (
    <form onSubmit={CreateWrite}>
      <InlineBlock h1="???????????? ????????????" text="????????????" pages="2 / 3" />
      <S.ButtonDiv>??????</S.ButtonDiv>
      <S.MobilePhoto>
        <S.ProfileMobileImg src={checkImg !== null ? checkImg : Profile} alt="profile" />
        <S.CameraImg src={Camera} alt="Camera" />
        <S.MobileFileInput accept="image/*" type="file" onChange={changeProfileImg} />
      </S.MobilePhoto>
      <S.H1>????????????</S.H1>
      <S.ProfileDiv>
        <S.MarginAutoDiv>
          <S.ProfileImgDiv>
            <S.FileInput type="file" accept="image/*" onChange={changeProfileImg} />
            <S.ProfileImg src={checkImg !== null ? checkImg : Profile} alt="profile" />
            <S.BallDiv />
          </S.ProfileImgDiv>
          <S.InputDiv>
            <S.BlockDiv>
              <div>
                <S.SpanTag right="6em">??????</S.SpanTag>
              </div>
              <S.InputTag
                size="14.5rem"
                laptopSize="19rem"
                placeholder="??????"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </S.BlockDiv>
            <S.ErrorMessage />
            <S.CapsMessage />
          </S.InputDiv>
          <S.InputDiv>
            <S.BlockDiv>
              <div>
                <S.SpanTag right="3em">???????????????</S.SpanTag>
              </div>
              <S.InputTag
                size="14.5rem"
                laptopSize="19rem"
                placeholder="??????????????? 5~15??? ??????,??????"
                value={id}
                onKeyDown={(e) => {
                  checkCapsLock(e);
                }}
                onChange={(e) => {
                  setId(e.target.value);
                }}
              />
            </S.BlockDiv>
            <S.ErrorMessage>{id === '' && '* ???????????? 5~20??? ????????? ???????????????.'}</S.ErrorMessage>
            <S.CapsMessage>{capsLockFlag && 'Caps Lock??? ?????? ????????????.'}</S.CapsMessage>
          </S.InputDiv>
          <S.InputDiv>
            <S.BlockDiv>
              <div>
                <S.SpanTag right="4em">????????????</S.SpanTag>
              </div>
              <S.InputTag
                size="14.5rem"
                laptopSize="19rem"
                type={pwType}
                name="password"
                autoComplete="on"
                placeholder="????????????"
                value={password}
                onKeyDown={(e) => {
                  checkCapsLock(e);
                }}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </S.BlockDiv>
            <S.ErrorMessage>{password === '' && '* 6~15??? ??????, ??????, ??????????????? ???????????????.'}</S.ErrorMessage>
            <S.CapsMessage>{capsLockFlag && 'Caps Lock??? ?????? ????????????.'}.</S.CapsMessage>
            <S.EyeImg
              src={firstEyeImg}
              alt="eye"
              onClick={() => {
                setEyeCheck(!eyeCheck);
              }}
            />
          </S.InputDiv>
          <S.InputDiv>
            <S.BlockDiv>
              <div>
                <S.SpanTag right="1.8em">???????????? ??????</S.SpanTag>
              </div>
              <S.InputTag
                size="14.5rem"
                laptopSize="19rem"
                type={commitType}
                name="new-password"
                autoComplete="on"
                placeholder="???????????? ??????"
                value={passwordConfirm}
                onKeyDown={(e) => {
                  checkCapsLock(e);
                }}
                onChange={(e) => {
                  setPasswordConfirm(e.target.value);
                }}
              />
            </S.BlockDiv>
            <S.ErrorMessage>{passwordConfirm !== password && '* ??????????????? ???????????? ????????????.'}</S.ErrorMessage>
            <S.CapsMessage>{capsLockFlag && 'Caps Lock??? ?????? ????????????.'}</S.CapsMessage>
            <S.EyeImg
              src={secondEyeImg}
              alt="eye"
              onClick={() => {
                setEyeCheck2(!eyeCheck2);
              }}
            />
          </S.InputDiv>
          <S.EmailFlex>
            <S.InputDiv>
              <S.BlockDiv>
                <div>
                  <S.SpanTag right="5em">?????????</S.SpanTag>
                </div>
                <S.InputTag
                  size="13rem"
                  laptopSize="18rem"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </S.BlockDiv>
              <S.ErrorMessage>
                {email.includes('@') && email.includes('.') ? ' ' : '* ????????? ?????? ????????? ????????????.'}
              </S.ErrorMessage>
              <S.CapsMessage />
            </S.InputDiv>
            <S.InputDiv>
              <S.BlockDiv>
                <S.EmailTop>
                  <S.SpanTag right="0.5em">???????????? ??????</S.SpanTag>
                </S.EmailTop>
                <S.EmailTop>
                  <S.FlexDiv
                    top="0"
                    onChange={(e) => {
                      setEmailRadio(e.target.value);
                    }}
                  >
                    <S.RadioDiv>
                      <S.RadioInput type="radio" name="email" value="RECEPTION" />
                      <S.RadioText>??????</S.RadioText>
                    </S.RadioDiv>
                    <S.RadioDiv>
                      <S.RadioInput type="radio" name="email" value="NOT_RECEPTION" />
                      <S.RadioText>?????????</S.RadioText>
                    </S.RadioDiv>
                  </S.FlexDiv>
                </S.EmailTop>
              </S.BlockDiv>
              <S.ErrorMessage />
              <S.CapsMessage />
            </S.InputDiv>
          </S.EmailFlex>
          <S.InputDiv>
            <S.BlockDiv>
              <div>
                <S.SpanTag right="5rem">?????????</S.SpanTag>
              </div>
              <S.InputTag
                size="14.5rem"
                laptopSize="19rem"
                placeholder="????????? ??????"
                type="text"
                value={phoneNumber || ''}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
            </S.BlockDiv>
            <S.ErrorMessage />
            <S.CapsMessage />
          </S.InputDiv>
          <S.InputDiv>
            <div>
              <S.SpanTag right="4.5em">??????</S.SpanTag>
            </div>
            <S.JobUl>
              <S.JobRadioLi>
                <S.JobInputLeft
                  name="job"
                  id="job1"
                  type="radio"
                  value="DEVELOPER"
                  bgColor={jobType === 'DEVELOPER' ? '#f16300' : '#f2f2f2'}
                  tabletColor={jobType === 'DEVELOPER' ? '#f16300' : 'white'}
                  onClick={jobFuntion}
                />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <S.JobLabel color={jobType === 'DEVELOPER' ? 'white' : 'black'} htmlFor="job1">
                  ?????????
                </S.JobLabel>
              </S.JobRadioLi>
              <S.JobRadioLi left="-0.5rem">
                <S.JobInput
                  name="job"
                  id="job2"
                  type="radio"
                  value="PUBLISHER"
                  bgColor={jobType === 'PUBLISHER' ? '#f16300' : '#f2f2f2'}
                  tabletColor={jobType === 'PUBLISHER' ? '#f16300' : 'white'}
                  onClick={jobFuntion}
                />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <S.JobLabel color={jobType === 'PUBLISHER' ? 'white' : 'black'} htmlFor="job2">
                  ????????????
                </S.JobLabel>
              </S.JobRadioLi>
              <S.JobRadioLi left="-0.5rem">
                <S.JobInput
                  name="job"
                  id="job3"
                  type="radio"
                  value="DESIGNER"
                  bgColor={jobType === 'DESIGNER' ? '#f16300' : '#f2f2f2'}
                  tabletColor={jobType === 'DESIGNER' ? '#f16300' : 'white'}
                  onClick={jobFuntion}
                />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <S.JobLabel color={jobType === 'DESIGNER' ? 'white' : 'black'} htmlFor="job3">
                  ????????????
                </S.JobLabel>
              </S.JobRadioLi>
              <S.JobRadioLi left="-0.5rem">
                <S.JobInput
                  name="job"
                  id="job4"
                  type="radio"
                  value="PLANNER"
                  bgColor={jobType === 'PLANNER' ? '#f16300' : '#f2f2f2'}
                  tabletColor={jobType === 'PLANNER' ? '#f16300' : 'white'}
                  onClick={jobFuntion}
                />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <S.JobLabel color={jobType === 'PLANNER' ? 'white' : 'black'} htmlFor="job4">
                  ?????????
                </S.JobLabel>
              </S.JobRadioLi>
              <S.JobRadioLi left="-0.5rem">
                <S.JobInput
                  name="job"
                  id="job5"
                  type="radio"
                  value="CROWD_WORKER"
                  bgColor={jobType === 'CROWD_WORKER' ? '#f16300' : '#f2f2f2'}
                  tabletColor={jobType === 'CROWD_WORKER' ? '#f16300' : 'white'}
                  onClick={jobFuntion}
                />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <S.JobLabel color={jobType === 'CROWD_WORKER' ? 'white' : 'black'} htmlFor="job5">
                  ??????????????????
                </S.JobLabel>
              </S.JobRadioLi>
              <S.JobRadioLi left="-0.5rem">
                <S.JobInputRight
                  name="job"
                  id="job6"
                  type="radio"
                  value="ETC"
                  bgColor={jobType === 'ETC' ? '#f16300' : '#f2f2f2'}
                  tabletColor={jobType === 'ETC' ? '#f16300' : 'white'}
                  onClick={jobFuntion}
                />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <S.JobLabel color={jobType === 'ETC' ? 'white' : 'black'} htmlFor="job6">
                  ??????
                </S.JobLabel>
              </S.JobRadioLi>
            </S.JobUl>
          </S.InputDiv>
          <S.EmailFlex>
            <S.InputDiv top="0">
              <div>
                <S.SpanTag right="0">???????????? ??????</S.SpanTag>
              </div>
              <S.FlexDiv
                top="1rem"
                onChange={(e) => {
                  setJobRadio(e.target.value);
                }}
              >
                <S.RadioDiv>
                  <S.RadioInput type="radio" name="job" value="POSSIBLE" />
                  <S.RadioText>??????</S.RadioText>
                </S.RadioDiv>
                <S.RadioDiv>
                  <S.RadioInput type="radio" name="job" value="IMPOSSIBLE" />
                  <S.RadioText>?????????</S.RadioText>
                </S.RadioDiv>
              </S.FlexDiv>
              <S.ErrorMessage />
              <S.CapsMessage />
            </S.InputDiv>
            <S.InputDiv>
              <div>
                <S.SpanTag right="0">???????????????</S.SpanTag>
              </div>
              <S.MaginDiv>
                <S.InputTag size="14.5rem" placeholder={selectedDate} />
                <S.DateDiv>
                  <DatePicker
                    onChange={(date) => {
                      dateFunction(date);
                    }}
                  />
                </S.DateDiv>
              </S.MaginDiv>
              <S.ErrorMessage />
              <S.CapsMessage />
            </S.InputDiv>
          </S.EmailFlex>
        </S.MarginAutoDiv>
      </S.ProfileDiv>
      <S.SubmitDiv>
        <S.MarginAutoDiv>
          <S.BordeDiv>
            <h1>elancer??? ????????? ??????</h1>
          </S.BordeDiv>
          <S.UlTag>
            <S.LiTag>??????????????????</S.LiTag>
            <S.LiTag>???????????????/?????????</S.LiTag>
            <S.LiTag>?????????</S.LiTag>
            <S.LiTag>????????????(??????/??????)</S.LiTag>
            <S.LiTag>??????/?????? ??????</S.LiTag>
            <S.LiTag>??????/?????????</S.LiTag>
            <S.LiTag>??????????????? ??????</S.LiTag>
          </S.UlTag>
          <S.AgreeDiv>????????????</S.AgreeDiv>
          <S.CheckDiv>
            <S.CheckBox type="checkbox" name="agree1" id="agree1" />
            <S.CheckPtag>1. ?????????????????? ??????</S.CheckPtag>
            <S.ATag href="https://www.elancer.co.kr/terms" target="_blank">
              [??????]
            </S.ATag>
          </S.CheckDiv>
          <S.CheckDiv>
            <S.CheckBox type="checkbox" name="agree2" id="agree2" />
            <S.CheckPtag>2. ???????????? ???????????? ?????? </S.CheckPtag>
            <S.ATag href="https://www.elancer.co.kr/policy" target="_blank">
              [??????]
            </S.ATag>
          </S.CheckDiv>
          <S.CheckDiv>
            <S.CheckBox type="checkbox" name="agreeAll" id="agreeAll" />
            <S.CheckPtag>?????? ??????</S.CheckPtag>
          </S.CheckDiv>
          <S.CenterDiv>
            <SubmitButton text="??????" heights="0.8rem" sides="2rem" />
          </S.CenterDiv>
        </S.MarginAutoDiv>
      </S.SubmitDiv>
    </form>
  );
};

export default SignUpFreeLancer;
