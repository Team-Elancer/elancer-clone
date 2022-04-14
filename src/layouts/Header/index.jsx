import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import * as S from './style';
import Logo from 'assets/images/elancer_logo.png';
import Profile from 'assets/images/signin-profile.png';

const Header = ({ checkBool, setCeckBool }) => {
  const changeBool = () => {
    return setCeckBool(false);
  };

  return (
    <S.HeaderDiv>
      <Link to="/">
        <S.Img src={Logo} alt="Logo" />
      </Link>
      <S.Text>
        <Link to="/partner-list">
          <S.ThreeTag>프리랜서 보기</S.ThreeTag>
        </Link>
        <S.ThreeTag>|</S.ThreeTag>
        <Link to="/project-list">
          <S.ThreeTag>프로젝트 보기</S.ThreeTag>
        </Link>
      </S.Text>
      <S.Menu>
        <S.Span onClick={changeBool}>
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
