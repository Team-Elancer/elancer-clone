import { useParams, useNavigate } from 'react-router-dom';

import * as S from './style';

import ProfilePicture from 'assets/images/profile.png';

import InfoDetail from 'components/FreelancerDetail';
import DetailShare from 'components/FreelancerDetail/DetailShare';

import Footer from 'layouts/Footer';
import Header from 'layouts/Header';

const PartnerDetail = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <Header />
      <S.Main>
        <S.ContainerTitle>
          <S.PersonFlexCenter>개발자 Frank Kim</S.PersonFlexCenter>
        </S.ContainerTitle>
        <S.ContainerFrame>
          <S.FrameList>
            <S.FreelancerTitle>준비된 개발자 Frank Kim</S.FreelancerTitle>
            <section>
              <S.ContainerFreelancer>
                <div>개발자 Frank Kim | ★ ★ ★ ★ ★ 5.0점 | 경력 10년</div>
              </S.ContainerFreelancer>
              <S.FreelancerCertificate>KOSA 보유</S.FreelancerCertificate>
              <S.ContainerEcardProfile>
                <S.EcardProfileLeft>
                  <S.ContainerEcardProfileImg>
                    <S.ImgFile src={ProfilePicture} alt="profile" />
                    <S.EcardProfileName>김*현</S.EcardProfileName>
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
              <S.FontSmall style={{ marginBottom: '2rem' }}>개발자 김*현</S.FontSmall>
              <S.FontSmall style={{ marginBottom: '6rem' }}>준비된 개발자 김*현</S.FontSmall>
            </section>
            <section>
              {/* <InfoDetail /> */}
              <DetailShare />
            </section>
          </S.FrameList>
        </S.ContainerFrame>
      </S.Main>
      <Footer />
    </>
  );
};

export default PartnerDetail;
