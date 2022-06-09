import * as S from './style';
import zoom from 'assets/images/zoom.png';

const EnterpriseSearchBar = ({ display = 'none', width = '380px' }) => {
  return (
    <S.Container display={display}>
      <S.InputForm width={width}>
        <S.Input placeholder="어떤 프로젝트를 찾으세요? " />
        <S.Img src={zoom} alt="zoom" />
      </S.InputForm>
    </S.Container>
  );
};

export default EnterpriseSearchBar;
