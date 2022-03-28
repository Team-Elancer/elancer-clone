import { FaBars } from 'react-icons/fa';

import * as S from './style';
import zoom from 'assets/images/zoom.png';

const SearchBar = () => {
  return (
    <S.Container>
      <FaBars size="25" color="#7485c9" />
      <S.InputForm>
        <S.Input
          placeholder="어떤 프로젝트를 찾으세요? 
    "
        />
        <S.Img src={zoom} alt="zoom" />
      </S.InputForm>
    </S.Container>
  );
};

export default SearchBar;
