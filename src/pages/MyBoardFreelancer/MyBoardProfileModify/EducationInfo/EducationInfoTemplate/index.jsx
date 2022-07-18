import * as S from '../../style';

const EducationInfoTemplate = ({ handleEducationState, state, index }) => {
  const { schoolName, schoolLevel, enterSchoolDate, graduationDate, academicState, majorName } = state;

  return (
    <div>
      {/* ====== 학교명 ====== */}
      <S.EducationContainer>
        <S.TextLabel>학교명</S.TextLabel>
        <S.ContainerSelectOption>
          <S.IntroInputName
            type="text"
            placeholder="학교명"
            name="schoolName"
            value={schoolName || ''}
            onChange={(e) => handleEducationState(e, index)}
          />
          <S.SelectInputName
            name="schoolLevel"
            value={schoolLevel || 'HIGH_SCHOOL'}
            onChange={(e) => handleEducationState(e, index)}
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
          <label htmlFor="enterSchoolDate">
            <S.IntroInputNameDate
              id="enterSchoolDate"
              name="enterSchoolDate"
              type="date"
              style={{ width: '200px', fontSize: '1rem' }}
              value={enterSchoolDate || ''}
              onChange={(e) => handleEducationState(e, index)}
              required
            />
          </label>

          <S.BetweenInputSpan> ~ </S.BetweenInputSpan>
          <label htmlFor="graduationDate">
            <S.IntroInputNameDate
              type="date"
              id="graduationDate"
              name="graduationDate"
              style={{ width: '200px', fontSize: '1rem' }}
              value={graduationDate || ''}
              onChange={(e) => handleEducationState(e, index)}
              required
            />
          </label>
          <S.SelectInputName
            name="academicState"
            value={academicState || ''}
            onChange={(e) => handleEducationState(e, index)}
          >
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
          name="majorName"
          placeholder="전공명"
          value={majorName || ''}
          onChange={(e) => handleEducationState(e, index)}
        />
      </S.EducationContainer>
    </div>
  );
};

export default EducationInfoTemplate;
