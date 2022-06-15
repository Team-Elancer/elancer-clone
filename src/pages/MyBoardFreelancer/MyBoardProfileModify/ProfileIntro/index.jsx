import axios from 'axios';
import { useEffect, useState } from 'react';

import * as S from '../style';

const ProfileIntro = () => {
  const [intro, setIntro] = useState({
    introName: '',
    introBackGround: '',
    introVideoUrl: '',
    introContent: '',
  });

  const { introName, introBackGround, introVideoUrl, introContent } = intro;

  const handleProfileIntroState = (e) => {
    const { value, name } = e.target;

    const STATE_LIST = { ...intro };
    STATE_LIST[name] = value;

    setIntro(STATE_LIST);
  };

  const submitIntro = (e) => {
    e.preventDefault();

    const newData = intro;

    axios({
      url: 'http://ec2-13-209-114-196.ap-northeast-2.compute.amazonaws.com:8080/freelancer-profile/intro',
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: `${window.localStorage.accessToken}`,
      },
      data: newData,
    })
      .then(() => {
        console.log(newData);
        alert('정보를 수정했습니다.');
      })
      .catch((err) => {
        console.log(err.message);
        if (newData) alert('필드값 다시 사용확인');
      });
  };

  return (
    <form action="">
      <S.ContainerImageProfile>
        <S.ImageProfile src="https://www.elancer.co.kr/public/images/img-user-none.png" alt="" />
        <S.ImageUpload src="https://www.elancer.co.kr/public/images/img-camera-wh.png" alt="" />
      </S.ContainerImageProfile>
      <S.ContainerSubject>
        <S.FontLargeSubject>프로필 제목</S.FontLargeSubject>
        <S.SubjectInput type="text" name="introSubject" id="introSubject" placeholder="프로필 제목을 입력해주세요" />
      </S.ContainerSubject>
      <S.FontLarge>소개정보</S.FontLarge>
      <S.BoxFrame>
        <S.FrameIntro>
          <S.ContainerIntro>
            <S.IntroLetters>소개 이름</S.IntroLetters>
            <S.IntroInputName
              type="text"
              name="introName"
              placeholder="이름"
              value={introName || ''}
              onChange={(e) => handleProfileIntroState(e)}
            />
          </S.ContainerIntro>
        </S.FrameIntro>
        <S.ContainerIntro>
          <S.IntroLetters>소개 배경</S.IntroLetters>
          <S.ColorUl>
            <S.Boxli liColor={introBackGround === 'WHITE' ? '#eb6100' : '#e1e1e1'}>
              <S.ColorInput
                value="WHITE"
                name="introBackGround"
                type="radio"
                introBackGround="#FFFFFF"
                onClick={(e) => handleProfileIntroState(e)}
              />
            </S.Boxli>
            <S.Boxli liColor={introBackGround === 'COBALT_BLUE' ? '#eb6100' : '#e1e1e1'}>
              <S.ColorInput
                value="COBALT_BLUE"
                name="introBackGround"
                type="radio"
                introBackGround="#7485c9"
                onClick={(e) => handleProfileIntroState(e)}
              />
            </S.Boxli>
            <S.Boxli liColor={introBackGround === 'LIGHT_PURPLE' ? '#eb6100' : '#e1e1e1'}>
              <S.ColorInput
                value="LIGHT_PURPLE"
                name="introBackGround"
                type="radio"
                introBackGround="#8a7fa4"
                onClick={(e) => handleProfileIntroState(e)}
              />
            </S.Boxli>
            <S.Boxli liColor={introBackGround === 'DARK_PINK' ? '#eb6100' : '#e1e1e1'}>
              <S.ColorInput
                value="DARK_PINK"
                name="introBackGround"
                type="radio"
                introBackGround="#9d7985"
                onClick={(e) => handleProfileIntroState(e)}
              />
            </S.Boxli>
            <S.Boxli liColor={introBackGround === 'DARK_ORANGE' ? '#eb6100' : '#e1e1e1'}>
              <S.ColorInput
                value="DARK_ORANGE"
                name="introBackGround"
                type="radio"
                introBackGround="#b57360"
                onClick={(e) => handleProfileIntroState(e)}
              />
            </S.Boxli>
            <S.Boxli liColor={introBackGround === 'ORANGE' ? '#eb6100' : '#e1e1e1'}>
              <S.ColorInput
                value="ORANGE"
                name="introBackGround"
                type="radio"
                introBackGround="#d56b2d"
                onClick={(e) => handleProfileIntroState(e)}
              />
            </S.Boxli>
            <S.Boxli liColor={introBackGround === 'LIGHT_ORANGE' ? '#eb6100' : '#e1e1e1'}>
              <S.ColorInput
                value="LIGHT_ORANGE"
                name="introBackGround"
                type="radio"
                introBackGround="#f16300"
                onClick={(e) => handleProfileIntroState(e)}
              />
            </S.Boxli>

            <S.Boxli liColor={introBackGround === 'PATTERN1' ? '#eb6100' : '#e1e1e1'}>
              <S.ColorPatternInput1
                value="PATTERN1"
                name="introBackGround"
                type="radio"
                onClick={(e) => handleProfileIntroState(e)}
              />
            </S.Boxli>

            <S.Boxli liColor={introBackGround === 'PATTERN2' ? '#eb6100' : '#e1e1e1'}>
              <S.ColorPatternInput2
                value="PATTERN2"
                name="introBackGround"
                type="radio"
                onClick={(e) => handleProfileIntroState(e)}
              />
            </S.Boxli>

            <S.Boxli liColor={introBackGround === 'PATTERN3' ? '#eb6100' : '#e1e1e1'}>
              <S.ColorPatternInput3
                value="PATTERN3"
                name="introBackGround"
                type="radio"
                onClick={(e) => handleProfileIntroState(e)}
              />
            </S.Boxli>

            <S.Boxli liColor={introBackGround === 'PATTERN4' ? '#eb6100' : '#e1e1e1'}>
              <S.ColorPatternInput4
                value="PATTERN4"
                name="introBackGround"
                type="radio"
                onClick={(e) => handleProfileIntroState(e)}
              />
            </S.Boxli>

            <S.Boxli liColor={introBackGround === 'PATTERN5' ? '#eb6100' : '#e1e1e1'}>
              <S.ColorPatternInput5
                value="PATTERN5"
                name="introBackGround"
                type="radio"
                onClick={(e) => handleProfileIntroState(e)}
              />
            </S.Boxli>
          </S.ColorUl>
        </S.ContainerIntro>
        <S.FrameIntro>
          <S.ContainerIntro>
            <S.IntroLetters>소개영상 URL</S.IntroLetters>
            <S.IntroInputLarge
              type="text"
              name="introVideoUrl"
              placeholder="소개영상 URL"
              value={introVideoUrl || ''}
              onChange={(e) => handleProfileIntroState(e)}
            />
          </S.ContainerIntro>
        </S.FrameIntro>
        <S.FrameIntro>
          <S.ContainerIntro>
            <S.IntroLetters>소개 글</S.IntroLetters>
            <S.IntroInputLarge
              type="text"
              name="introContent"
              placeholder="프로필에 보여질 소개글을 작성해주세요."
              value={introContent || ''}
              onChange={(e) => handleProfileIntroState(e)}
            />
          </S.ContainerIntro>
        </S.FrameIntro>
        <S.FlexCenter>
          <S.ProfileButton type="button" onClick={submitIntro}>
            소개정보 저장
          </S.ProfileButton>
        </S.FlexCenter>
      </S.BoxFrame>
    </form>
  );
};

export default ProfileIntro;