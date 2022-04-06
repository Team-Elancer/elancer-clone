import { useState } from 'react';
import * as S from './style';
import InlineBlock from 'components/Inline-Block';
import MenuBar from 'components/MenuBar';
import GridBottom from 'components/Modal/GridBottom';
import MainMenu from 'components/Modal/MainMenu';
import Footer from 'layouts/Footer';
import Header from 'layouts/Header';

const SigninFreeLancer = () => {
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
        <InlineBlock />
      </S.SizeDiv>
      <Footer />
      <GridBottom />
    </S.Container>
  );
};

export default SigninFreeLancer;
