import { Link } from 'react-router-dom';
import * as S from './style';
import SubmitButton from 'components/Button/SubmitButton';
import InlineBlock from 'components/Inline-Block';

const SignUpFinish = () => {
  const memberName = JSON.parse(localStorage.getItem('name'));
  const memberID = JSON.parse(localStorage.getItem('id'));

  return (
    <>
      <InlineBlock h1="회원가입" text="회원선택" pages="3 / 3" />
      <S.FlexDiv>
        <div>
          <S.H1>
            함께 나눌수록 더욱 커지는 가치, <br />
            Encer의 회원이 되신 것을 환영합니다!
          </S.H1>

          <S.Ptag>
            {memberName} ({memberID}) 님은 Encer의 가족이 되었습니다. <br />
            Encer가 열어가는 IT전문가 세상에서 회원님의 시간이 더욱 빛나길 바랍니다.
          </S.Ptag>

          <S.ButtonSizeDiv>
            <Link to={window.localStorage.memberType === '"ENTERPRISE"' ? '/enterprise' : '/freelancer'}>
              <SubmitButton text="둘러보기" heights="1rem" sides="3rem" />
            </Link>
          </S.ButtonSizeDiv>
        </div>
      </S.FlexDiv>
    </>
  );
};

export default SignUpFinish;
