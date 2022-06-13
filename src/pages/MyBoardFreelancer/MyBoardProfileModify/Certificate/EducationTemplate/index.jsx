import * as S from '../../style';

const EducationTemplate = ({ onDeleteTemplate, handleStateChange, state, index }) => {
  const { educationTitle, educationOrganization, educationStartDate, educationEndDate } = state;

  return (
    <S.FrameCareerContainer style={{ borderBottom: '1px solid black' }}>
      <S.EducationContainer>
        <S.TextLabel>교육명</S.TextLabel>
        <S.ContainerSelectOption width="300">
          <S.IntroInputName
            type="text"
            placeholder="교육명"
            name="educationTitle"
            onChange={(e) => handleStateChange(e, index, 'EDUCATION_STATE')}
            value={educationTitle || ''}
            required
          />
          <S.IntroInputName
            type="text"
            placeholder="교육기관 입력하세요"
            name="educationOrganization"
            value={educationOrganization || ''}
            onChange={(e) => handleStateChange(e, index, 'EDUCATION_STATE')}
            required
          />

          <S.RemoveButton onClick={() => onDeleteTemplate(index, 'EDUCATION_STATE')}>X</S.RemoveButton>
        </S.ContainerSelectOption>
      </S.EducationContainer>
      <S.EducationContainer>
        <S.TextLabel>교육기관</S.TextLabel>
        <S.ContainerSelectOption width="130">
          <label htmlFor="educationStartDate">
            <S.IntroInputNameDate
              name="educationStartDate"
              type="date"
              style={{ width: '200px', fontSize: '1rem' }}
              value={educationStartDate || ''}
              onChange={(e) => handleStateChange(e, index, 'EDUCATION_STATE')}
              required
            />
          </label>
          <S.BetweenInputSpan> ~ </S.BetweenInputSpan>
          <label htmlFor="educationEndDate">
            <S.IntroInputNameDate
              name="educationEndDate"
              type="date"
              style={{ width: '200px', fontSize: '1rem' }}
              value={educationEndDate || ''}
              onChange={(e) => handleStateChange(e, index, 'EDUCATION_STATE')}
              required
            />
          </label>
        </S.ContainerSelectOption>
      </S.EducationContainer>
    </S.FrameCareerContainer>
  );
};

export default EducationTemplate;
