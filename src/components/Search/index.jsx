import { FaBars } from 'react-icons/fa';

import * as S from './style';
import zoom from 'assets/images/zoom.png';

const SearchBar = () => {
  return (
    <S.Container>
      <S.FaBarDiv>
        <FaBars size="25" color="#7485c9" />
      </S.FaBarDiv>
      <S.InputForm>
        <S.Input
          placeholder="원하시는 언어를 영어로 검색해주세요. 
    "
        />
        <S.Img src={zoom} alt="zoom" />
      </S.InputForm>
    </S.Container>
  );
};

export default SearchBar;
