import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';
import * as S from './style';
import Camera from 'assets/images/camera.png';
import CloseEye from 'assets/images/closeEye.png';
import OpenEye from 'assets/images/openEye.png';
import Profile from 'assets/images/signin-profile.png';
import SubmitButton from 'components/Button/SubmitButton';
import InlineBlock from 'components/Inline-Block';
import MenuBar from 'components/MenuBar';
import GridBottom from 'components/Modal/GridBottom';
import MainMenu from 'components/Modal/MainMenu';
import Footer from 'layouts/Footer';
import Header from 'layouts/Header';
import 'react-datepicker/dist/react-datepicker.css';

const SigninFreeLancer = () => {
  const [checkBool, setCeckBool] = useState(true);
  const [eyeCheck, setEyeCheck] = useState(true);
  const [eyeCheck2, setEyeCheck2] = useState(true);
  const [firstEyeImg, setFirsEyeImg] = useState(CloseEye);
  const [secondEyeImg, setSecondEyeImg] = useState(CloseEye);
  const [pwType, setPwType] = useState('password');
  const [commitType, setCommitType] = useState('password');

  const [selectedDate, setSelectedDate] = useState(null);

  const changeEye = () => {
    setEyeCheck(!eyeCheck);
  };

  const changeSecondEye = () => {
    setEyeCheck2(!eyeCheck2);
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
    <S.Container>
      {checkBool === false && (
        <>
          <MainMenu setCeckBool={setCeckBool} />
          <MenuBar checkBool={checkBool} setCeckBool={setCeckBool} />
        </>
      )}
      <Header checkBool={checkBool} setCeckBool={setCeckBool} />
      <S.SizeDiv>
        <form>
          <InlineBlock h1="프리랜서 회원가입" text="회원정보" pages="2 / 3" />
          <S.ButtonDiv>개인</S.ButtonDiv>
          <S.MobilePhoto>
            <S.ProfileImg src={Profile} alt="profile" />
            <S.CameraImg src={Camera} alt="Camera" />
          </S.MobilePhoto>
          <S.H1>기본정보</S.H1>
          <S.ProfileDiv>
            <S.MarginAutoDiv>
              <S.InputDiv>
                <S.BlockDiv>
                  <div>
                    <S.SpanTag right="6em">성명</S.SpanTag>
                  </div>
                  <S.InputTag size="14.5rem" placeholder="성명" />
                </S.BlockDiv>
                <S.ErrorMessage />
                <S.CapsMessage />
              </S.InputDiv>
              <S.InputDiv>
                <S.BlockDiv>
                  <div>
                    <S.SpanTag right="3em">회원아이디</S.SpanTag>
                  </div>
                  <S.InputTag size="14.5rem" placeholder="회원아이디 5~15자 영문,숫자" />
                </S.BlockDiv>
                <S.ErrorMessage>* 아이디는 5~20자 이내로 입력하세요.</S.ErrorMessage>
                <S.CapsMessage>Caps Lock이 켜져 있습니다.</S.CapsMessage>
              </S.InputDiv>
              <S.InputDiv>
                <S.BlockDiv>
                  <div>
                    <S.SpanTag right="4em">비밀번호</S.SpanTag>
                  </div>
                  <S.InputTag size="14.5rem" type={pwType} name="password" autoComplete="on" placeholder="비밀번호" />
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
                    type={commitType}
                    name="new-password"
                    autoComplete="on"
                    placeholder="비밀번호 확인"
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
                    <S.InputTag size="13rem" placeholder="name@example.com" />
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
                      <S.FlexDiv top="0">
                        <S.RadioDiv>
                          <S.RadioInput type="radio" name="email" value="Y" />
                          <S.RadioText>수신</S.RadioText>
                        </S.RadioDiv>
                        <S.RadioDiv>
                          <S.RadioInput type="radio" name="email" value="N" />
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
                    <S.SpanTag right="4.5em">휴대폰</S.SpanTag>
                  </div>
                  <S.InputTag size="14.5rem" type="number" placeholder="숫자만 입력" />
                </S.BlockDiv>
                <S.ErrorMessage />
                <S.CapsMessage />
              </S.InputDiv>
              <S.EmailFlex>
                <S.InputDiv>
                  <div>
                    <S.SpanTag right="0">업무가능 여부</S.SpanTag>
                  </div>
                  <S.FlexDiv top="1rem">
                    <S.RadioDiv>
                      <S.RadioInput type="radio" name="job" value="Y" />
                      <S.RadioText>가능</S.RadioText>
                    </S.RadioDiv>
                    <S.RadioDiv>
                      <S.RadioInput type="radio" name="job" value="N" />
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
                  <S.InputTag size="14.5rem" type="number" placeholder={selectedDate} />
                  <S.DateDiv>
                    <DatePicker
                      onChange={(date) => {
                        setSelectedDate(date.toLocaleDateString());
                      }}
                    />
                  </S.DateDiv>
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
                <Link to="/signin/finish">
                  <SubmitButton text="완료" heights="0.8rem" sides="1.8rem" />
                </Link>
              </S.CenterDiv>
            </S.MarginAutoDiv>
          </S.SubmitDiv>
        </form>
      </S.SizeDiv>
      <Footer />
      <GridBottom />
    </S.Container>
  );
};

export default SigninFreeLancer;
