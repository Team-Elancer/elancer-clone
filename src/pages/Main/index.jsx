import useStore from 'zustand';
import * as S from './style';
import programmer from 'assets/images/programmer.png';
import Eblock from 'components/arround-project';
import Blind from 'components/blind';
import ChoiceProject from 'components/choice-project';
import Count from 'components/count';
import Header from 'components/Header';
import MenuBar from 'components/menubar';
import ReFreelancer from 'components/re-freelancer';
import ReProject from 'components/re-project';
import SearchBar from 'components/Search';
import Footer from 'layouts/Footer';

const Main = () => {
  const show = useStore((state) => state.show);

  return (
    <S.Container>
      {/* {show === false && (
        <>
          <Blind />
          <MenuBar />
        </>
      )} */}
      <S.BackImg>
        <Header />
        <SearchBar />
        <S.SecondDiv>
          <S.Img src={programmer} alr="progammer" />
          <S.TextDiv>
            #3월8일
            <br />
            #세계여성의날
            <br />
            #에이다러브레이스
            <br />
          </S.TextDiv>
        </S.SecondDiv>
      </S.BackImg>
      <S.ThirdDiv>
        <Count />
        <Eblock />
        <ReProject />
        <ChoiceProject />
        <ReFreelancer />
      </S.ThirdDiv>
      <Footer />
    </S.Container>
  );
};

export default Main;
