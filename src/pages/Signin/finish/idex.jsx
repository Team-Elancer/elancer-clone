import { useState } from 'react';
import * as S from './style';
import SubmitButton from 'components/Button/SubmitButton';
import InlineBlock from 'components/Inline-Block';
import MenuBar from 'components/MenuBar';
import GridBottom from 'components/Modal/GridBottom';
import MainMenu from 'components/Modal/MainMenu';
import Footer from 'layouts/Footer';
import Header from 'layouts/Header';

const SigninFinish = () => {
  const [checkBool, setCeckBool] = useState(true);
  return (
    <S.Container>
      {checkBool === false && (
        <>
          <MainMenu setCeckBool={setCeckBool} />
          <MenuBar checkBool={checkBool} setCeckBool={setCeckBool} />
        </>
      )}
      <Header checkBool={checkBool} setCeckBool={setCeckBool} />
      <S.SizeDiv>
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
              <SubmitButton text="이랜서 둘러보기" heights="1rem" sides="3rem" />
            </S.ButtonSizeDiv>
          </div>
        </S.FlexDiv>
      </S.SizeDiv>
      <GridBottom />
      <Footer />
    </S.Container>
  );
};

export default SigninFinish;
