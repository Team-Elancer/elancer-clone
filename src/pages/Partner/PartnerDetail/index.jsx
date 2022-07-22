import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import * as S from './style';

import ProfilePicture from 'assets/images/profile.png';

import PartnerResume from 'components/FreelancerDetail';
import DetailShare from 'components/FreelancerDetail/DetailShare';
import Loader from 'components/Loader';

import Footer from 'layouts/Footer';
import Header from 'layouts/Header';

import { FILTERED_DATA } from 'utils/config/api';

import { extractSecureName } from 'utils/helpers';

const PartnerDetail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [freelanerDetail, setFreelanerDetail] = useState({});
  const {
    name,
    academicAbilityResponses,
    allSkillNames,
    careerResponses,
    careerYear,
    communication,
    educationResponses,
    expertise,
    greeting,
    initiative,
    introBackGround,
    introduceContent,
    introduceName,
    introduceVideoUrl,
    languageResponses,
    licenseResponses,
    positionType,
    positionTypeDescription,
    profileNum,
    projectHistoryResponses,
    reemploymentIntention,
    scheduleAdherence,
    thumbnailPath,
    totalActiveScore,
  } = freelanerDetail;

  const [securedName, setSecuredName] = useState(name);

  const getFreelancerDetail = async () => {
    try {
      setIsLoading(true);
      const { data } = await FILTERED_DATA(`/freelancers/${id}`);
      setFreelanerDetail(data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err.message);
    }
  };

  useEffect(() => {
    getFreelancerDetail();

    if (freelanerDetail.name) {
      const data = extractSecureName(name);
      setSecuredName(data);
    }
  }, [name]);

  return (
    <Wrapper>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <S.Main>
          <S.ContainerTitle introBackGround={introBackGround}>
            <S.PersonFlexCenter>
              {positionTypeDescription} {securedName}
            </S.PersonFlexCenter>
          </S.ContainerTitle>
          <S.ContainerFrame>
            <S.FrameList>
              <S.FreelancerTitle>{securedName}</S.FreelancerTitle>
              <SectionWrapper>
                <S.ContainerFreelancer>
                  <div>
                    {securedName} | ★ ★ ★ ★ ★ 5.0점 | 경력 {careerYear}년
                  </div>
                </S.ContainerFreelancer>
                <S.FreelancerCertificate>KOSA 보유</S.FreelancerCertificate>
                <S.ContainerEcardProfile>
                  <S.EcardProfileLeft>
                    <S.ContainerEcardProfileImg>
                      {thumbnailPath ? (
                        <S.ImgFile src={thumbnailPath} alt="profile" />
                      ) : (
                        <S.ImgFile src={ProfilePicture} alt="profile" />
                      )}
                      <S.EcardProfileName>{securedName}</S.EcardProfileName>
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
                    {allSkillNames?.map(
                      (stack, index) =>
                        stack !== '' && stack && <S.StackBtn key={`detail_stack_${index + 1}`}> {stack} </S.StackBtn>,
                    )}
                  </S.ContainerStackBtn>
                </S.ContainerEcardProfile>
              </SectionWrapper>
              <SectionWrapper>
                <S.FontSmall>소개</S.FontSmall>
                <S.FontSmall style={{ marginTop: '1rem' }}>
                  {positionTypeDescription} {securedName}
                </S.FontSmall>
              </SectionWrapper>
              <SectionWrapper>
                <PartnerResume freelanerDetail={freelanerDetail} />
                <DetailShare />
              </SectionWrapper>
            </S.FrameList>
          </S.ContainerFrame>
        </S.Main>
      )}
      <Footer position={isLoading ? 'absolute' : 'relative'} />
    </Wrapper>
  );
};

export default PartnerDetail;

const Wrapper = styled.section`
  height: 100%;
  width: auto;

  grid-column: 1;
  grid-row: 2 / 5;

  gap: 4px;
`;

const SectionWrapper = styled.section`
  margin-top: 4rem;
  margin-bottom: 4rem;
`;
