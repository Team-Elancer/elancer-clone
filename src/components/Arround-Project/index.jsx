import { Link } from 'react-router-dom';

import * as S from './style';

import asp from 'assets/images/asp.png';
import design from 'assets/images/design.png';
import etc from 'assets/images/etc.png';
import java from 'assets/images/java.png';
import mobile from 'assets/images/mobile.png';
import php from 'assets/images/php.png';
import plan from 'assets/images/plan.png';
import pub from 'assets/images/pub.png';

const Eblock = () => {
  return (
    <S.Container>
      <S.H1>프로젝트 둘러보기</S.H1>
      <S.FirstDiv>
        <Link to="/project-list?position=DEVELOPER&skill=java">
          <S.IconDiv color="#7485c9">
            <S.Img src={java} alt="java" />
            <S.TextSpan>JAVA</S.TextSpan>
          </S.IconDiv>
        </Link>
        <Link to="/project-list?position=DEVELOPER&skill=ASP.NET">
          <S.IconDiv color="#9d7985">
            <S.Img src={asp} alt="ASP" />
            <S.TextSpan>ASP.NET</S.TextSpan>
          </S.IconDiv>
        </Link>
        <Link to="/project-list?position=DEVELOPER&skill=PHP">
          <S.IconDiv color="#d56b2d">
            <S.Img src={php} alt="PHP" />
            <S.TextSpan>PHP</S.TextSpan>
          </S.IconDiv>
        </Link>
        <Link to="/project-list?position=DEVELOPER&skill=IOS•Android">
          <S.IconDiv color="#f16300">
            <S.Img src={mobile} alt="IOS•Android" />
            <S.TextSpan>IOS•Android</S.TextSpan>
          </S.IconDiv>
        </Link>
      </S.FirstDiv>
      <S.FirstDiv>
        <Link to="/project-list?position=PUBLISHER">
          <S.IconDiv color="#7485c9">
            <S.Img src={pub} alt="퍼블리싱" />
            <S.TextSpan>퍼블리싱</S.TextSpan>
          </S.IconDiv>
        </Link>
        <Link to="/project-list?position=DESIGNER">
          <S.IconDiv color="#9d7985">
            <S.Img src={design} alt="디자인" />
            <S.TextSpan>디자인</S.TextSpan>
          </S.IconDiv>
        </Link>
        <Link to="/project-list?position=PLANNER">
          <S.IconDiv color="#d56b2d">
            <S.Img src={plan} alt="java" />
            <S.TextSpan>기획</S.TextSpan>
          </S.IconDiv>
        </Link>
        <Link to="/project-list?position=ETC">
          <S.IconDiv color="#f16300">
            <S.Img src={etc} alt="java" />
            <S.TextSpan>기타 </S.TextSpan>
          </S.IconDiv>
        </Link>
      </S.FirstDiv>
    </S.Container>
  );
};

export default Eblock;
