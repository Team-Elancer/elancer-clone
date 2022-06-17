import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import * as S from './style';
import Logo from 'assets/images/freelancer-logo.png';
import Profile from 'assets/images/signin-profile.png';
import MenuBar from 'components/MenuBar';
import MainMenu from 'components/Modal/MainMenu';

const FreelancerHeader = ({ width, bgColor = 'white', color = 'black', logo }) => {
  const [checkBool, setCeckBool] = useState(true);
  const location = useLocation();

  const changeBool = () => {
    return setCeckBool(false);
  };

  return (
    <S.Container bgColor={bgColor} color={color}>
      {checkBool === false && (
        <>
          <MainMenu setCeckBool={setCeckBool} />
          <MenuBar checkBool={checkBool} setCeckBool={setCeckBool} />
        </>
      )}
      <S.HeaderDiv width={width}>
        <S.FlexDiv>
          <Link to="/">
            <S.Img src={location.pathname === '/freelancer' ? logo : Logo} alt="Logo" />
          </Link>
          <div>
            <Link to="/freelancer">
              <S.BigText>프리랜서</S.BigText>
            </Link>
          </div>
        </S.FlexDiv>
        <S.Text>
          <Link to="/partner-list">
            <S.ThreeTag>프리랜서 보기</S.ThreeTag>
          </Link>
          <S.ThreeTag>|</S.ThreeTag>
          <Link to="/project-list">
            <S.ThreeTag>프로젝트 보기</S.ThreeTag>
          </Link>
        </S.Text>
        <S.Menu onClick={changeBool}>
          <S.Span>
            <FaBars size="16" color="gray" />
          </S.Span>
          <S.Span>
            <S.Image src={Profile} alt="profile" />
          </S.Span>
        </S.Menu>
      </S.HeaderDiv>
    </S.Container>
  );
};

export default FreelancerHeader;
