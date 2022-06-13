import styled from 'styled-components';

import * as S from '../../style';

const LicenseTemplate = ({ onDeleteTemplate, handleStateChange, state, index }) => {
  const { licenseTitle, licenseIssuer, acquisitionDate } = state;

  return (
    <S.FrameCareerContainer style={{ borderBottom: '1px solid black' }}>
      <S.EducationContainer>
        <S.TextLabel>자격증명</S.TextLabel>
        <S.ContainerSelectOption width="300">
          <S.IntroInputName
            type="text"
            placeholder="자격증명"
            name="licenseTitle"
            onChange={(e) => handleStateChange(e, index, 'LICENSE_STATE')}
            value={licenseTitle || ''}
            required
          />
          <S.IntroInputName
            type="text"
            placeholder="발행처를 입력하세요"
            name="licenseIssuer"
            value={licenseIssuer || ''}
            onChange={(e) => handleStateChange(e, index, 'LICENSE_STATE')}
            required
          />

          <S.RemoveButton onClick={() => onDeleteTemplate(index, 'LICENSE_STATE')}>X</S.RemoveButton>
        </S.ContainerSelectOption>
      </S.EducationContainer>
      <S.EducationContainer>
        <S.TextLabel>취득일</S.TextLabel>
        <S.ContainerSelectOption width="130">
          <label htmlFor="acquisitionDate">
            <S.IntroInputNameDate
              name="acquisitionDate"
              type="date"
              style={{ width: '200px', fontSize: '1rem' }}
              value={acquisitionDate || ''}
              onChange={(e) => handleStateChange(e, index, 'LICENSE_STATE')}
              required
            />
          </label>
        </S.ContainerSelectOption>
      </S.EducationContainer>
    </S.FrameCareerContainer>
  );
};

export default LicenseTemplate;
