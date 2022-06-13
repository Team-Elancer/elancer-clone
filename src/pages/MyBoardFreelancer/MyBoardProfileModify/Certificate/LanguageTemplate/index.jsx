import * as S from '../../style';

const LanguageTemplate = ({ onDeleteTemplate, handleStateChange, state, index }) => {
  const { languageName, languageAbility } = state;

  return (
    <S.FrameCareerContainer>
      <S.EducationContainer>
        <S.TextLabel>외국어명</S.TextLabel>
        <S.ContainerSelectOption width="300">
          <S.IntroInputName
            type="text"
            placeholder="외국어명"
            name="languageName"
            value={languageName || ''}
            onChange={(e) => handleStateChange(e, index, 'LANGUAGE_STATE')}
            required
          />

          <S.SelectInputName
            name="languageAbility"
            value={languageAbility || 'MIDDLE'}
            onChange={(e) => handleStateChange(e, index, 'LANGUAGE_STATE')}
            required
          >
            <option value="SEMI">일상회화 가능</option>
            <option value="MIDDLE">비즈니스 회화가능</option>
            <option value="NATIVE">원어민 수준</option>
          </S.SelectInputName>
          <S.RemoveButton onClick={() => onDeleteTemplate(index, 'LANGUAGE_STATE')}>X</S.RemoveButton>
        </S.ContainerSelectOption>
      </S.EducationContainer>
    </S.FrameCareerContainer>
  );
};

export default LanguageTemplate;
