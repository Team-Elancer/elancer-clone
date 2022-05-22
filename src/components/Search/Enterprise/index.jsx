import * as S from './style';
import zoom from 'assets/images/zoom.png';

const EnterpriseSearchBar = () => {
  return (
    <S.Container>
      <S.InputForm>
        <S.Input placeholder="어떤 프로젝트를 찾으세요? " />
        <S.Img src={zoom} alt="zoom" />
      </S.InputForm>
    </S.Container>
  );
};

export default EnterpriseSearchBar;
