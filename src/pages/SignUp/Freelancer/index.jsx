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
import 'react-datepicker/dist/react-datepicker.css';

const SignUpFreeLancer = () => {
  const navi = useNavigate();

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

  const nameFuntion = (e) => {
    setName(e.target.value);
  };
  const idFuntion = (e) => {
    setId(e.target.value);
  };
  const passwordFuntion = (e) => {
    setPassword(e.target.value);
  };
  const passwordConfirmFuntion = (e) => {
    setPasswordConfirm(e.target.value);
  };
  const emailFuntion = (e) => {
    setEmail(e.target.value);
  };
  const emailRadioFuntion = (e) => {
    setEmailRadio(e.target.value);
  };
  const phoneNumberFuntion = (e) => {
    setPhoneNumber(e.target.value);
  };
  const jobFuntion = (e) => {
    setJobType(e.target.value);
  };
  const jobRadioFuntion = (e) => {
    setJobRadio(e.target.value);
  };

  const changeEye = () => {
    setEyeCheck(!eyeCheck);
  };

  const changeSecondEye = () => {
    setEyeCheck2(!eyeCheck2);
  };

  const dateFunction = (date) => {
    setSelectedDate(
      date
        .toLocaleDateString()
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

  const CreateWrite = (event) => {
    event.preventDefault();
    fetch('http://ec2-13-209-114-196.ap-northeast-2.compute.amazonaws.com:8080/freelancer', {
      method: 'POST',
      headers: {
        'Content-Type': ' application/json;charset=UTF-8',
      },
      body: JSON.stringify({
        memberName: name,
        memberId: id,
        memberPassword: password,
        memberPasswordCheck: passwordConfirm,
        memberEmail: email,
        mailReceptionState: emailRadio,
        memberPhone: phoneNumber,
        positionType: jobType,
        workPossibleState: jobRadio,
        workStartPossibleDate: selectedDate,
        thumbnail: null,
      }),
    })
      .then((res) => {
        if (res.ok) {
          alert('생성이 완료되었습니다.');
          navi('/signup/finish');
        }
        if (!res.ok) {
          alert(res);
        }
      })
      .catch((err) => {
        console.log(err.message);
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
  }, [eyeCheck, eyeCheck2]);

  return (
    <form onSubmit={CreateWrite}>
      <InlineBlock h1="프리랜서 회원가입" text="회원정보" pages="2 / 3" />
      <S.ButtonDiv>개인</S.ButtonDiv>
      <S.MobilePhoto>
        <S.ProfileMobileImg src={Profile} alt="profile" />
        <S.CameraImg src={Camera} alt="Camera" />
        {/* <S.MobileFileInput type="file" /> */}
      </S.MobilePhoto>
      <S.H1>기본정보</S.H1>
      <S.ProfileDiv>
        <S.MarginAutoDiv>
          <S.ProfileImgDiv>
            <S.FileInput type="file" />
            <S.ProfileImg src={Profile} alt="profile" />
            <S.BallDiv />
          </S.ProfileImgDiv>
          <S.InputDiv>
            <S.BlockDiv>
              <div>
                <S.SpanTag right="6em">성명</S.SpanTag>
              </div>
              <S.InputTag size="14.5rem" laptopSize="19rem" placeholder="성명" value={name} onChange={nameFuntion} />
            </S.BlockDiv>
            <S.ErrorMessage />
            <S.CapsMessage />
          </S.InputDiv>
          <S.InputDiv>
            <S.BlockDiv>
              <div>
                <S.SpanTag right="3em">회원아이디</S.SpanTag>
              </div>
              <S.InputTag
                size="14.5rem"
                laptopSize="19rem"
                placeholder="회원아이디 5~15자 영문,숫자"
                value={id}
                onChange={idFuntion}
              />
            </S.BlockDiv>
            <S.ErrorMessage>* 아이디는 5~20자 이내로 입력하세요.</S.ErrorMessage>
            <S.CapsMessage>Caps Lock이 켜져 있습니다.</S.CapsMessage>
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
                value={password}
                onChange={passwordFuntion}
              />
            </S.BlockDiv>
            <S.ErrorMessage>* 6~15자 영문, 숫자, 특수문자를 사용하세요.</S.ErrorMessage>
            <S.CapsMessage>Caps Lock이 켜져 있습니다.</S.CapsMessage>
            <S.EyeImg src={firstEyeImg} alt="eye" onClick={changeEye} />
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
                value={passwordConfirm}
                onChange={passwordConfirmFuntion}
              />
            </S.BlockDiv>
            <S.ErrorMessage>* 비밀번호가 일치하지 않습니다.</S.ErrorMessage>
            <S.CapsMessage>Caps Lock이 켜져 있습니다.</S.CapsMessage>
            <S.EyeImg src={secondEyeImg} alt="eye" onClick={changeSecondEye} />
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
                  value={email}
                  onChange={emailFuntion}
                />
              </S.BlockDiv>
              <S.ErrorMessage>* 이메일 주소 형식이 아닙니다.</S.ErrorMessage>
              <S.CapsMessage />
            </S.InputDiv>
            <S.InputDiv>
              <S.BlockDiv>
                <S.EmailTop>
                  <S.SpanTag right="0.5em">메일수신 여부</S.SpanTag>
                </S.EmailTop>
                <S.EmailTop>
                  <S.FlexDiv top="0" onChange={emailRadioFuntion}>
                    <S.RadioDiv>
                      <S.RadioInput type="radio" name="email" value="RECEPTION" />
                      <S.RadioText>수신</S.RadioText>
                    </S.RadioDiv>
                    <S.RadioDiv>
                      <S.RadioInput type="radio" name="email" value="NOT_RECEPTION" />
                      <S.RadioText>미수신</S.RadioText>
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
                <S.SpanTag right="5rem">휴대폰</S.SpanTag>
              </div>
              <S.InputTag
                size="14.5rem"
                laptopSize="19rem"
                placeholder="숫자만 입력"
                type="number"
                value={phoneNumber}
                onChange={phoneNumberFuntion}
              />
            </S.BlockDiv>
            <S.ErrorMessage />
            <S.CapsMessage />
          </S.InputDiv>
          <S.InputDiv>
            <div>
              <S.SpanTag right="4.5em">직종</S.SpanTag>
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
                  개발자
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
                  퍼블리셔
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
                  디자이너
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
                  기획자
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
                  크라우드워커
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
                  기타
                </S.JobLabel>
              </S.JobRadioLi>
            </S.JobUl>
          </S.InputDiv>
          <S.EmailFlex>
            <S.InputDiv top="0">
              <div>
                <S.SpanTag right="0">업무가능 여부</S.SpanTag>
              </div>
              <S.FlexDiv top="1rem" onChange={jobRadioFuntion}>
                <S.RadioDiv>
                  <S.RadioInput type="radio" name="job" value="POSSIBLE" />
                  <S.RadioText>가능</S.RadioText>
                </S.RadioDiv>
                <S.RadioDiv>
                  <S.RadioInput type="radio" name="job" value="IMPOSSIBLE" />
                  <S.RadioText>불가능</S.RadioText>
                </S.RadioDiv>
              </S.FlexDiv>
              <S.ErrorMessage />
              <S.CapsMessage />
            </S.InputDiv>
            <S.InputDiv>
              <div>
                <S.SpanTag right="0">업무가능일</S.SpanTag>
              </div>
              <S.MaginDiv>
                <S.InputTag size="14.5rem" type="number" placeholder={selectedDate} />
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
            <SubmitButton text="완료" heights="0.8rem" sides="2rem" />
          </S.CenterDiv>
        </S.MarginAutoDiv>
      </S.SubmitDiv>
    </form>
  );
};

export default SignUpFreeLancer;
