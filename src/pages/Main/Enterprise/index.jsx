import * as S from './style';
import GridBottom from 'components/Modal/GridBottom';
import Footer from 'layouts/Footer';
import CompanyHeader from 'layouts/Header/Company';

const MainEnterprise = () => {
  return (
    <S.Container>
      <S.BgDiv>
        <CompanyHeader bgColor="#0000" color="white" />
        <S.CenterDiv>
          <S.H1>
            일하고 싶은만큼 언제 어디서나!
            <br />
            데이터 크라우드 워커 되기
          </S.H1>
          <S.PTag>크라우드 워커 되기</S.PTag>
        </S.CenterDiv>
      </S.BgDiv>
      <Footer toBottom="static" />
      <GridBottom />
    </S.Container>
  );
};

export default MainEnterprise;
