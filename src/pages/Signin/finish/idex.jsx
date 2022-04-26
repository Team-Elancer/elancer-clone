import { Link } from 'react-router-dom';
import * as S from './style';
import SubmitButton from 'components/Button/SubmitButton';
import InlineBlock from 'components/Inline-Block';

const SigninFinish = () => {
  return (
    <>
      <InlineBlock h1="회원가입" text="회원선택" pages="3 / 3" />
      <S.FlexDiv>
        <div>
          <S.H1>
            함께 나눌수록 더욱 커지는 가치, <br />
            이랜서의 회원이 되신 것을 환영합니다!
          </S.H1>
          <S.Ptag>
            조종혁(kek112)님은 이랜서의 가족이 되었습니다. <br />
            이랜서가 열어가는 IT전문가 세상에서 회원님의 시간이 더욱 빛나길 바랍니다.
          </S.Ptag>
          <S.ButtonSizeDiv>
            <Link to="/">
              <SubmitButton text="이랜서 둘러보기" heights="1rem" sides="3rem" />
            </Link>
          </S.ButtonSizeDiv>
        </div>
      </S.FlexDiv>
    </>
  );
};

export default SigninFinish;
