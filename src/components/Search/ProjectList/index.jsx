import { useState } from 'react';
import * as S from './style';
import zoom from 'assets/images/zoom.png';

const ProjectListSearchBar = ({ width = '380px', Array, setArray }) => {
  const [value, SetValue] = useState('');

  const changeValue = (e) => {
    e.preventDefault();
    setArray([...Array, value]);
    SetValue('');
  };

  return (
    <S.Container>
      <S.InputForm
        width={width}
        onSubmit={(e) => {
          changeValue(e);
        }}
      >
        <S.Input
          placeholder="원하시는 스킬을 적은후 엔터를 쳐주세요."
          value={value}
          onChange={(e) => {
            SetValue(e.target.value);
          }}
        />
        <S.Img src={zoom} alt="zoom" />
      </S.InputForm>
    </S.Container>
  );
};

export default ProjectListSearchBar;
