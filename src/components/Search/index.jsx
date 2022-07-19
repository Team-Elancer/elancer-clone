import { useState } from 'react';

import { FaBars } from 'react-icons/fa';

import { useNavigate } from 'react-router-dom';

import * as S from './style';
import zoom from 'assets/images/zoom.png';

const SearchBar = ({ searchPage, searchValue }) => {
  const [value, setValue] = useState('');
  const navi = useNavigate();

  const submitFunction = (e) => {
    e.preventDefault();

    if (value === '') {
      alert('검색어를 입력해주세요.');
    } else {
      navi(`/search?searchKey=${value}`);
    }
  };

  return (
    <S.Container searchPage={searchPage}>
      <S.FaBarDiv searchPage={searchPage}>
        <FaBars size="25" color="#7485c9" />
      </S.FaBarDiv>
      <S.InputForm
        searchPage={searchPage}
        onSubmit={(e) => {
          submitFunction(e);
        }}
      >
        <S.Input
          searchPage={searchPage}
          placeholder={searchValue || '원하시는 언어를 영어로 검색해주세요.'}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <S.Img
          searchPage={searchPage}
          src={zoom}
          alt="zoom"
          onClick={(e) => {
            submitFunction(e);
          }}
        />
      </S.InputForm>
    </S.Container>
  );
};

export default SearchBar;
