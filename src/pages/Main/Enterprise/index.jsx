import { useEffect, useState } from 'react';
import * as S from './style';

import Logo from 'assets/images/logo_white.png';
import zoom from 'assets/images/search_big.png';
import zoomWhite from 'assets/images/search_white.png';

import Eblock from 'components/Arround-Project';
import GridBottom from 'components/Modal/GridBottom';
import EnterpriseMainMenu from 'components/Modal/MainMenu/Enterprise';
import ReFreelancer from 'components/Re-Freelancer';
import EnterpriseSearchBar from 'components/Search/Enterprise';
import Footer from 'layouts/Footer';
import CompanyHeader from 'layouts/Header/Company';

const MainEnterprise = () => {
  const [changeBack, setChangeBack] = useState(true);
  const [checkButton, setCheckButton] = useState('');
  const [serchBarBool, setSerchBarBool] = useState();
  const [jobField, setJobField] = useState('개발');

  const changeSearch = () => {
    setChangeBack(false);
  };
  const changeButton = (e) => {
    setCheckButton(e.target.value);
  };

  return (
    <S.Container top="-10px">
      <S.BgDiv>
        <CompanyHeader bgColor="#0000" color="white" logo={Logo} width="840px" />
        <EnterpriseSearchBar />
        <S.Container relative="relative" top="4rem">
          <S.FlexDiv color={changeBack === false ? '#f6f6f6' : '#f16300'} onClick={changeSearch}>
            <S.jobButton
              width="26%"
              onClick={(e) => {
                setSerchBarBool('job');
              }}
            >
              <S.Span color={changeBack === false ? 'black' : 'white'}>프리랜서 업무 분야</S.Span>
              <S.ButtonP color={changeBack === false ? '#969696' : '#ffc298'}>{jobField}</S.ButtonP>
            </S.jobButton>
            <S.LineDiv color={changeBack === false ? '#969696' : 'white'} />
            <S.jobButton
              width="17%"
              onClick={(e) => {
                setSerchBarBool('select');
              }}
            >
              <S.Span color={changeBack === false ? 'black' : 'white'}>스킬</S.Span>
              <S.ButtonP color={changeBack === false ? '#969696' : '#ffc298'}>선택</S.ButtonP>
            </S.jobButton>
            <S.LineDiv color={changeBack === false ? '#969696' : 'white'} />
            <S.jobButton
              width="17%"
              onClick={(e) => {
                setSerchBarBool('location');
              }}
            >
              <S.Span color={changeBack === false ? 'black' : 'white'}>근무 위치</S.Span>
              <S.ButtonP color={changeBack === false ? '#969696' : '#ffc298'}>선택</S.ButtonP>
            </S.jobButton>
            <S.LineDiv color={changeBack === false ? '#969696' : 'white'} />
            <S.jobButton
              width="17%"
              onClick={(e) => {
                setSerchBarBool('career');
              }}
            >
              <S.Span color={changeBack === false ? 'black' : 'white'}>숙련도</S.Span>
              <S.ButtonP color={changeBack === false ? '#969696' : '#ffc298'}>선택</S.ButtonP>
            </S.jobButton>
            <S.LineDiv color={changeBack === false ? '#969696' : 'white'} />
            <S.jobButton
              width="17%"
              onClick={(e) => {
                setSerchBarBool('searchBar');
              }}
            >
              <S.Span color={changeBack === false ? 'black' : 'white'}>검색어</S.Span>
              <S.ButtonP color={changeBack === false ? '#969696' : '#ffc298'}>입력</S.ButtonP>
            </S.jobButton>
            <S.Img src={changeBack === false ? zoom : zoomWhite} alt="searchImg" />
          </S.FlexDiv>
          <S.CenterDiv>
            {changeBack === false && serchBarBool === 'job' ? (
              <S.JobFieldDiv>
                <S.UlTag>
                  <S.JobLiTag>
                    <S.JobInput
                      bgColor={jobField === '개발' ? '#e7e7e7' : 'white'}
                      brColor={jobField === '개발' ? 'black' : '#d7d7d7'}
                      type="radio"
                      name="job"
                      id="DEVELOPER"
                    />
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <S.RadioLabel
                      htmlFor="DEVELOPER"
                      onClick={(e) => {
                        setJobField('개발');
                      }}
                    >
                      ⚙️ 개발
                    </S.RadioLabel>
                  </S.JobLiTag>
                  <S.JobLiTag>
                    <S.JobInput
                      bgColor={jobField === '퍼블리싱' ? '#e7e7e7' : 'white'}
                      brColor={jobField === '퍼블리싱' ? 'black' : '#d7d7d7'}
                      type="radio"
                      name="job"
                      id="PUBLISHER"
                    />
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <S.RadioLabel
                      htmlFor="PUBLISHER"
                      onClick={(e) => {
                        setJobField('퍼블리싱');
                      }}
                    >
                      🛠 퍼블리싱
                    </S.RadioLabel>
                  </S.JobLiTag>
                  <S.JobLiTag>
                    <S.JobInput
                      bgColor={jobField === '디자인' ? '#e7e7e7' : 'white'}
                      brColor={jobField === '디자인' ? 'black' : '#d7d7d7'}
                      type="radio"
                      name="job"
                      id="DESIGNER"
                    />
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <S.RadioLabel
                      htmlFor="DESIGNER"
                      onClick={(e) => {
                        setJobField('디자인');
                      }}
                    >
                      🎨 디자인
                    </S.RadioLabel>
                  </S.JobLiTag>
                  <S.JobLiTag>
                    <S.JobInput
                      bgColor={jobField === '기획' ? '#e7e7e7' : 'white'}
                      brColor={jobField === '기획' ? 'black' : '#d7d7d7'}
                      type="radio"
                      name="job"
                      id="PLANNER"
                    />
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <S.RadioLabel
                      htmlFor="PLANNER"
                      onClick={(e) => {
                        setJobField('기획');
                      }}
                    >
                      📝 기획
                    </S.RadioLabel>
                  </S.JobLiTag>
                  <S.JobLiTag>
                    <S.JobInput
                      bgColor={jobField === '기타' ? '#e7e7e7' : 'white'}
                      brColor={jobField === '기타' ? 'black' : '#d7d7d7'}
                      type="radio"
                      name="job"
                      id="ETC"
                    />
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <S.RadioLabel
                      htmlFor="ETC"
                      onClick={(e) => {
                        setJobField('기타');
                      }}
                    >
                      🔗 기타
                    </S.RadioLabel>
                  </S.JobLiTag>
                </S.UlTag>
              </S.JobFieldDiv>
            ) : (
              <div> </div>
            )}
          </S.CenterDiv>
        </S.Container>
        {changeBack === false && <EnterpriseMainMenu setChangeBack={setChangeBack} />}
        <S.CenterDiv>
          <S.H1>
            일하고 싶은만큼 언제 어디서나!
            <br />
            데이터 크라우드 워커 되기
          </S.H1>
          <S.PTag>크라우드 워커 되기</S.PTag>
        </S.CenterDiv>
      </S.BgDiv>
      <S.MainDiv>
        <Eblock />
        <ReFreelancer />
      </S.MainDiv>
      <Footer toBottom="static" />
      <GridBottom />
    </S.Container>
  );
};

export default MainEnterprise;
