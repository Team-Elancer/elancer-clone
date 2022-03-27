import { FaBars } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import * as S from './style';
import Logo from 'assets/images/elancer_logo.png';
import Profile from 'assets/images/profile.png';

const Header = () => {
  return (
    <S.HeaderDiv>
      <S.Img src={Logo} alt="Logo" />
      <S.Text>
        <Link to="/list-partner">
          <S.ThreeTag>프리랜서 보기</S.ThreeTag>
        </Link>
        <S.ThreeTag>|</S.ThreeTag>
        <S.ThreeTag>프로젝트 보기</S.ThreeTag>
      </S.Text>
      <S.Menu>
        <S.Span>
          <FaBars size="16" color="gray" />
        </S.Span>
        <S.Span>
          <S.Image src={Profile} alt="profile" />
        </S.Span>
      </S.Menu>
    </S.HeaderDiv>
  );
};

export default Header;
