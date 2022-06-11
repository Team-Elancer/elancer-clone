import axios from 'axios';
import { useState, useEffect } from 'react';

import * as S from './style';

const EducationInfo = () => {
  const [educationType, setEductionType] = useState('firstKeyword');

  const [schoolName1, setSchoolName1] = useState('');
  const [schoolLevel1, setSchoolLevel1] = useState('HIGH_SCHOOL');
  const [enterSchoolDate1, setEnterSchoolDate1] = useState('');
  const [graduationDate1, setGraduationDate1] = useState('');
  const [academicState1, setAcademicState1] = useState('IN_SCHOOL');
  const [majorName1, setMajorName1] = useState('');

  const [schoolName2, setSchoolName2] = useState('');
  const [schoolLevel2, setSchoolLevel2] = useState('UNIVERSITY');
  const [enterSchoolDate2, setEnterSchoolDate2] = useState('');
  const [graduationDate2, setGraduationDate2] = useState('');
  const [academicState2, setAcademicState2] = useState('IN_SCHOOL');
  const [majorName2, setMajorName2] = useState('');

  const [schoolName3, setSchoolName3] = useState('');
  const [schoolLevel3, setSchoolLevel3] = useState('MASTER_DEGREE');
  const [enterSchoolDate3, setEnterSchoolDate3] = useState('');
  const [graduationDate3, setGraduationDate3] = useState('');
  const [academicState3, setAcademicState3] = useState('IN_SCHOOL');
  const [majorName3, setMajorName3] = useState('');

  const [userSchoolData, setUserSchoolData] = useState('');

  console.log(userSchoolData);

  const SCHOOL_LEVEL = {
    HIGH_SCHOOL: '고등학교',
    COLLEGE: '대학교(2,3년)',
    UNIVERSITY: '대학교(4년)',
    MASTER_DEGREE: '대학원(석사)',
    DOCTORAL_DEGREE: '대학원(박사)',
  };

  // PUT /freelancer-profile/academic-ability
  const submitAcademicAbility = (e) => {
    e.preventDefault();

    const newData = {
      academicAbilityCoverRequests: [
        {
          schoolName: schoolName1,
          schoolLevel: schoolLevel1,
          enterSchoolDate: enterSchoolDate1,
          graduationDate: graduationDate1,
          academicState: academicState1,
          majorName: majorName1,
        },
        {
          schoolName: schoolName2,
          schoolLevel: schoolLevel2,
          enterSchoolDate: enterSchoolDate2,
          graduationDate: graduationDate2,
          academicState: academicState2,
          majorName: majorName2,
        },
        {
          schoolName: schoolName3,
          schoolLevel: schoolLevel3,
          enterSchoolDate: enterSchoolDate3,
          graduationDate: graduationDate3,
          academicState: academicState3,
          majorName: majorName3,
        },
      ],
    };

    console.log(newData);

    axios({
      url: 'http://ec2-13-209-114-196.ap-northeast-2.compute.amazonaws.com:8080/freelancer-profile/academic-ability',
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: `${window.localStorage.accessToken}`,
      },
      data: newData,
    })
      .then(() => {
        console.log(newData);
        setUserSchoolData(newData);
        alert('정보를 수정했습니다.');
      })
      .catch((err) => {
        console.log(err.message);
        if (newData) alert('필드값 다시 사용확인');
      });
  };

  return (
    <form>
      <S.JobUl>
        <S.JobRadioLi left="-0.5rem">
          <S.JobInputLeft
            type="radio"
            value="firstKeyword"
            id="firstKeyword"
            bgColor={educationType === 'firstKeyword' ? '#f16300' : '#f2f2f2'}
            tabletColor={educationType === 'firstKeyword' ? '#f16300' : 'white'}
            onClick={(e) => setEductionType(e.target.value)}
          />
          {Object.entries(SCHOOL_LEVEL).map(
            (arr) =>
              arr.includes(schoolLevel1) && (
                <S.JobLabel
                  key="firstKeyword"
                  color={educationType === 'firstKeyword' ? 'white' : 'black'}
                  htmlFor="firstKeyword"
                >
                  {arr[1]}
                </S.JobLabel>
              ),
          )}
        </S.JobRadioLi>

        <S.JobRadioLi left="-0.5rem">
          <S.JobInput
            type="radio"
            value="secondKeyword"
            id="secondKeyword"
            bgColor={educationType === 'secondKeyword' ? '#f16300' : '#f2f2f2'}
            tabletColor={educationType === 'secondKeyword' ? '#f16300' : 'white'}
            onClick={(e) => setEductionType(e.target.value)}
          />

          {Object.entries(SCHOOL_LEVEL).map(
            (arr) =>
              arr.includes(schoolLevel2) && (
                <S.JobLabel
                  key="secondKeyword"
                  color={educationType === 'secondKeyword' ? 'white' : 'black'}
                  htmlFor="secondKeyword"
                >
                  {arr[1]}
                </S.JobLabel>
              ),
          )}
        </S.JobRadioLi>

        <S.JobRadioLi left="-0.5rem">
          <S.JobInputRight
            type="radio"
            value="thirdKeyword"
            id="thirdKeyword"
            bgColor={educationType === 'thirdKeyword' ? '#f16300' : '#f2f2f2'}
            tabletColor={educationType === 'thirdKeyword' ? '#f16300' : 'white'}
            onClick={(e) => setEductionType(e.target.value)}
          />
          {Object.entries(SCHOOL_LEVEL).map(
            (arr) =>
              arr.includes(schoolLevel3) && (
                <S.JobLabel
                  key="thirdKeyword"
                  color={educationType === 'thirdKeyword' ? 'white' : 'black'}
                  htmlFor="thirdKeyword"
                >
                  {arr[1]}
                </S.JobLabel>
              ),
          )}
        </S.JobRadioLi>
      </S.JobUl>

      {/* ============= firstKeyword  ============= */}
      {educationType === 'firstKeyword' && (
        <div>
          {/* ====== 학교명 ====== */}
          <S.EducationContainer>
            <S.TextLabel>학교명</S.TextLabel>
            <S.ContainerSelectOption>
              <S.IntroInputName
                type="text"
                placeholder="학교명"
                value={schoolName1 || ''}
                onChange={(e) => setSchoolName1(e.target.value)}
              />
              <S.SelectInputName
                name="schoolLevel1"
                value={schoolLevel1 || ''}
                onChange={(e) => setSchoolLevel1(e.target.value)}
              >
                <option value="HIGH_SCHOOL">고등학교</option>
                <option value="COLLEGE">대학(2,3년)</option>
                <option value="UNIVERSITY">대학교(4년)</option>
                <option value="MASTER_DEGREE">대학원(석사)</option>
                <option value="DOCTORAL_DEGREE">대학원(박사)</option>
              </S.SelectInputName>
            </S.ContainerSelectOption>
          </S.EducationContainer>

          {/* ====== 재학기간 ====== */}
          <S.EducationContainer>
            <S.TextLabel>재학기간</S.TextLabel>
            <S.ContainerSelectOption width="130">
              <label htmlFor="enterSchoolDate1">
                <S.IntroInputNameDate
                  id="enterSchoolDate1"
                  type="date"
                  style={{ width: '200px', fontSize: '1rem' }}
                  value={enterSchoolDate1 || ''}
                  onChange={(e) => setEnterSchoolDate1(e.target.value)}
                  required
                />
              </label>

              <S.BetweenInputSpan> ~ </S.BetweenInputSpan>
              <label htmlFor="graduationDate1">
                <S.IntroInputNameDate
                  id="graduationDate1"
                  type="date"
                  style={{ width: '200px', fontSize: '1rem' }}
                  value={graduationDate1 || ''}
                  onChange={(e) => setGraduationDate1(e.target.value)}
                  required
                />
              </label>
              <S.SelectInputName value={academicState1 || ''} onChange={(e) => setAcademicState1(e.target.value)}>
                <option value="IN_SCHOOL">재학</option>
                <option value="LEAVE_OF_ABSENCE">휴학</option>
                <option value="DROP_OUT">중퇴</option>
                <option value="GRADUATION">졸업</option>
                <option value="COMPLETION">수료/이수</option>
              </S.SelectInputName>
            </S.ContainerSelectOption>
          </S.EducationContainer>

          {/* ====== 전공명 ====== */}
          <S.EducationContainer>
            <S.TextLabel>전공명</S.TextLabel>
            <S.IntroInputLarge
              type="text"
              name="intro_name"
              placeholder="
전공명
"
              value={majorName1 || ''}
              onChange={(e) => setMajorName1(e.target.value)}
            />
          </S.EducationContainer>
        </div>
      )}

      {/* ============= secondKeyword  ============= */}
      {educationType === 'secondKeyword' && (
        <div>
          {/* ====== 학교명 ====== */}
          <S.EducationContainer>
            <S.TextLabel>학교명</S.TextLabel>
            <S.ContainerSelectOption>
              <S.IntroInputName
                type="text"
                placeholder="학교명"
                value={schoolName2 || ''}
                onChange={(e) => setSchoolName2(e.target.value)}
              />
              <S.SelectInputName value={schoolLevel2 || ''} onChange={(e) => setSchoolLevel2(e.target.value)}>
                <option value="HIGH_SCHOOL">고등학교</option>
                <option value="COLLEGE">대학(2,3년)</option>
                <option value="UNIVERSITY">대학교(4년)</option>
                <option value="MASTER_DEGREE">대학원(석사)</option>
                <option value="DOCTORAL_DEGREE">대학원(박사)</option>
              </S.SelectInputName>
            </S.ContainerSelectOption>
          </S.EducationContainer>

          {/* ====== 재학기간 ====== */}
          <S.EducationContainer>
            <S.TextLabel>재학기간</S.TextLabel>
            <S.ContainerSelectOption width="130">
              <label htmlFor="enterSchoolDate2">
                <S.IntroInputNameDate
                  id="enterSchoolDate2"
                  type="date"
                  style={{ width: '200px', fontSize: '1rem' }}
                  value={enterSchoolDate2 || ''}
                  onChange={(e) => setEnterSchoolDate2(e.target.value)}
                  required
                />
              </label>

              <S.BetweenInputSpan> ~ </S.BetweenInputSpan>
              <label htmlFor="graduationDate2">
                <S.IntroInputNameDate
                  id="graduationDate2"
                  type="date"
                  style={{ width: '200px', fontSize: '1rem' }}
                  value={graduationDate2 || ''}
                  onChange={(e) => setGraduationDate2(e.target.value)}
                  required
                />
              </label>
              <S.SelectInputName value={academicState2 || ''} onChange={(e) => setAcademicState2(e.target.value)}>
                <option value="IN_SCHOOL">재학</option>
                <option value="LEAVE_OF_ABSENCE">휴학</option>
                <option value="DROP_OUT">중퇴</option>
                <option value="GRADUATION">졸업</option>
                <option value="COMPLETION">수료/이수</option>
              </S.SelectInputName>
            </S.ContainerSelectOption>
          </S.EducationContainer>

          {/* ====== 전공명 ====== */}
          <S.EducationContainer>
            <S.TextLabel>전공명</S.TextLabel>
            <S.IntroInputLarge
              type="text"
              name="intro_name"
              placeholder="
전공명
"
              value={majorName2 || ''}
              onChange={(e) => setMajorName2(e.target.value)}
            />
          </S.EducationContainer>
        </div>
      )}

      {/* ============= thirdKeyword  ============= */}
      {educationType === 'thirdKeyword' && (
        <div>
          {/* ====== 학교명 ====== */}
          <S.EducationContainer>
            <S.TextLabel>학교명</S.TextLabel>
            <S.ContainerSelectOption>
              <S.IntroInputName
                type="text"
                placeholder="학교명"
                value={schoolName3 || ''}
                onChange={(e) => setSchoolName3(e.target.value)}
              />
              <S.SelectInputName value={schoolLevel3 || ''} onChange={(e) => setSchoolLevel3(e.target.value)}>
                <option value="HIGH_SCHOOL">고등학교</option>
                <option value="COLLEGE">대학(2,3년)</option>
                <option value="UNIVERSITY">대학교(4년)</option>
                <option value="MASTER_DEGREE">대학원(석사)</option>
                <option value="DOCTORAL_DEGREE">대학원(박사)</option>
              </S.SelectInputName>
            </S.ContainerSelectOption>
          </S.EducationContainer>

          {/* ====== 재학기간 ====== */}
          <S.EducationContainer>
            <S.TextLabel>재학기간</S.TextLabel>
            <S.ContainerSelectOption width="130">
              <label htmlFor="enterSchoolDate3">
                <S.IntroInputNameDate
                  id="enterSchoolDate3"
                  type="date"
                  style={{ width: '200px', fontSize: '1rem' }}
                  value={enterSchoolDate3 || ''}
                  onChange={(e) => setEnterSchoolDate3(e.target.value)}
                  required
                />
              </label>

              <S.BetweenInputSpan> ~ </S.BetweenInputSpan>
              <label htmlFor="graduationDate3">
                <S.IntroInputNameDate
                  id="graduationDate3"
                  type="date"
                  style={{ width: '200px', fontSize: '1rem' }}
                  value={graduationDate3 || ''}
                  onChange={(e) => setGraduationDate3(e.target.value)}
                  required
                />
              </label>
              <S.SelectInputName value={academicState3 || ''} onChange={(e) => setAcademicState3(e.target.value)}>
                <option value="IN_SCHOOL">재학</option>
                <option value="LEAVE_OF_ABSENCE">휴학</option>
                <option value="DROP_OUT">중퇴</option>
                <option value="GRADUATION">졸업</option>
                <option value="COMPLETION">수료/이수</option>
              </S.SelectInputName>
            </S.ContainerSelectOption>
          </S.EducationContainer>

          {/* ====== 전공명 ====== */}
          <S.EducationContainer>
            <S.TextLabel>전공명</S.TextLabel>
            <S.IntroInputLarge
              type="text"
              name="intro_name"
              placeholder="
전공명
"
              value={majorName3 || ''}
              onChange={(e) => setMajorName3(e.target.value)}
            />
          </S.EducationContainer>
        </div>
      )}

      {/* ============= 저장 ============= */}
      <S.FlexCenter>
        <S.ProfileButton type="button" onClick={(e) => submitAcademicAbility(e)}>
          학력사항 저장
        </S.ProfileButton>
      </S.FlexCenter>
    </form>
  );
};

export default EducationInfo;
