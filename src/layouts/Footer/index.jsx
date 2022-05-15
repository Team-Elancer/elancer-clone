import * as S from './style';
import Logo from 'assets/images/footer-logo.png';

const Footer = ({ toBottom = 'absolute' }) => {
  const liItem = [
    { id: 1, name: '(주)이랜서', site: 'https://www.elancer.co.kr/company-main' },
    { id: 2, name: '이용약관', site: 'https://www.elancer.co.kr/terms' },
    { id: 3, name: '개인정보처리방침', site: 'https://www.elancer.co.kr/policy' },
  ];

  const firstTag = [
    '(주)이랜서',
    '대표이사 | 박우진',
    '주소 | 서울 강남구 테헤란로 410.금강타워 11층',
    '전화 | 02-545-0042',
    '팩스 | 02-6008-2059',
  ];

  const secondTag = [
    '사업자번호 | 209-81-25311',
    '직업소개사업 등록번호 | 제2004-3220081-11-500078',
    '개인정보보호적책 책임자 | 송상권',
  ];

  return (
    <S.Container toBottom={toBottom}>
      <S.SecondDiv>
        <S.ThirdDiv>
          <S.FourthDiv>
            <S.MarginBottomP>
              <S.Img src={Logo} alt="footer-logo" />
              <br />
              <S.Span>Copyright © 2000 - 2022 ELANCER All Rights Reserved.</S.Span>
            </S.MarginBottomP>
            <S.UlTag>
              {liItem.map((item) => (
                <S.Atag href={item.site} key={item.id}>
                  <S.LiTag>{item.name}</S.LiTag>
                </S.Atag>
              ))}
            </S.UlTag>
          </S.FourthDiv>
          <S.Fifth>
            <p>
              {firstTag.map((item) => (
                <span key={item}>
                  {item}
                  <br />
                </span>
              ))}
            </p>
            <S.Ptag>
              {secondTag.map((item) => (
                <span key={item}>
                  {item}
                  <br />
                </span>
              ))}
            </S.Ptag>
          </S.Fifth>
        </S.ThirdDiv>
      </S.SecondDiv>
    </S.Container>
  );
};

export default Footer;
