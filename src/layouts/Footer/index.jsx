import * as S from './style';
import Logo from 'assets/images/footer-logo.png';

const Footer = ({ position }) => {
  const liItem = [
    { id: 1, name: '(주)encer', site: 'https://encer.vercel.app/' },
    { id: 2, name: '이용약관', site: 'https://encer.vercel.app/' },
    { id: 3, name: '개인정보처리방침', site: 'https://encer.vercel.app/' },
  ];

  const firstTag = ['(주)encer', '대표이사 | encer', '주소 | Korea', '전화 | 02-1234', '팩스 | 02-4569-1234'];

  const secondTag = [
    '사업자번호 | 11111-22222',
    '직업소개사업 등록번호 | 제1233-41234-123123',
    '개인정보보호적책 책임자 | encer',
  ];

  return (
    <S.Container position={position}>
      <S.SecondDiv>
        <S.ThirdDiv>
          <S.FourthDiv>
            <S.MarginBottomP>
              <S.Img src={Logo} alt="footer-logo" />
              <br />
              <S.Span>Copyright © 2023 encer All Rights Reserved.</S.Span>
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
