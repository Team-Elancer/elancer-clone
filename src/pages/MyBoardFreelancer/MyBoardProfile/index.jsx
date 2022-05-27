import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './style';
import ProfilePicture from 'assets/images/profile.png';
import InfoDetail from 'components/FreelancerDetail';

const MyBoardProfile = () => {
  return (
    <S.FrameProfile>
      <S.ContainerTop>
        <S.FontLarge>프로필관리</S.FontLarge>
        <Link to="/myboard-freelancer/profile-modify">
          <S.EditButton>수정</S.EditButton>
        </Link>
      </S.ContainerTop>
      <S.ContainerFrame>
        <S.FrameList>
          <section>
            <S.ContainerEcardProfile>
              <S.EcardProfileLeft>
                <S.ContainerEcardProfileImg>
                  <S.ImgFile src={ProfilePicture} alt="profile" />
                  <S.EcardProfileName>김경현</S.EcardProfileName>
                </S.ContainerEcardProfileImg>
                <S.ContainerEcardDescription>
                  <S.EcardFirstDescription>
                    <S.EcardFirstSubject>활동평가</S.EcardFirstSubject>
                    <div>
                      <S.EcardStar> ★ ★ ★ ★ ★ </S.EcardStar>
                      <S.EcardFirstScore> 5.0 </S.EcardFirstScore>
                    </div>
                  </S.EcardFirstDescription>
                  <span
                    style={{
                      backgroundColor: 'rgba(225, 225, 225, 1)',
                      height: '1px',
                      width: '100%',
                      marginBottom: '0.8rem',
                    }}
                  />
                  <S.EcardDescription>
                    <S.EcardSubject>의사소통</S.EcardSubject>
                    <div>
                      <S.EcardStar> ★ ★ ★ ★ ★ </S.EcardStar>
                      <S.EcardScore> 100% </S.EcardScore>
                    </div>
                  </S.EcardDescription>
                  <S.EcardDescription>
                    <S.EcardSubject>적극성</S.EcardSubject>
                    <div>
                      <S.EcardStar> ★ ★ ★ ★ ★ </S.EcardStar>
                      <S.EcardScore> 100% </S.EcardScore>
                    </div>
                  </S.EcardDescription>
                  <S.EcardDescription>
                    <S.EcardSubject>전문성</S.EcardSubject>
                    <div>
                      <S.EcardStar> ★ ★ ★ ★ ★ </S.EcardStar>
                      <S.EcardScore> 100% </S.EcardScore>
                    </div>
                  </S.EcardDescription>
                </S.ContainerEcardDescription>
              </S.EcardProfileLeft>
              <S.ContainerStackBtn>
                <S.StackBtn>MySql</S.StackBtn>
                <S.StackBtn>java</S.StackBtn>
                <S.StackBtn>Oracle</S.StackBtn>
                <S.StackBtn>Spring</S.StackBtn>
                <S.StackBtn>jquery</S.StackBtn>
                <S.StackBtn>javacript</S.StackBtn>
                <S.StackBtn>front-end</S.StackBtn>
                <S.StackBtn>node.js</S.StackBtn>
              </S.ContainerStackBtn>
            </S.ContainerEcardProfile>
          </section>
          <section>
            <S.FontSmall>소개</S.FontSmall>
            <S.ContainerTitle>
              <S.PersonFlexCenter>개발자 Frank Kim</S.PersonFlexCenter>
            </S.ContainerTitle>
            <S.FontSmall style={{ marginBottom: '6rem' }}>준비된 개발자 김경현</S.FontSmall>
          </section>
          <section>
            <InfoDetail />
          </section>
        </S.FrameList>
      </S.ContainerFrame>
    </S.FrameProfile>
  );
};

export default MyBoardProfile;
