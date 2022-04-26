import * as S from './style';

import Back from 'assets/images/arrowback.png';
import CompanyAccount from 'components/Myboard/Company-Account';

const DashBoardAccount = () => {
  return (
    <>
      <S.SpacebetweenDiv>
        <S.Img src={Back} alt="arrowback" />
        <S.H1>이랜서 계정</S.H1>
      </S.SpacebetweenDiv>
      <CompanyAccount />
    </>
  );
};

export default DashBoardAccount;
