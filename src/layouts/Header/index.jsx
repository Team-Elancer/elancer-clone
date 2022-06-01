import { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CompanyHeader from './Company';
import * as S from './style';
import Logo from 'assets/images/elancer_logo.png';
import LogoFreelancer from 'assets/images/freelancer-logo.png';
import Profile from 'assets/images/signin-profile.png';
import MenuBar from 'components/MenuBar';
import MainMenu from 'components/Modal/MainMenu';

const Header = ({ freelancerBoard, MEMBERSHIP_FREELANCER }) => {
  const [checkBool, setCeckBool] = useState(true);

  const changeBool = () => {
    return setCeckBool(false);
  };

  return (
    <>
      {window.localStorage.accessToken === undefined ? (
        <S.Container freelancerBoard={freelancerBoard}>
          {checkBool === false && (
            <>
              <MainMenu setCeckBool={setCeckBool} />
              <MenuBar checkBool={checkBool} setCeckBool={setCeckBool} />
            </>
          )}
          <S.HeaderDiv>
            <Link to="/">
              {window.localStorage.getItem('memberType') === '"FREELANCER"' ? (
                <S.Img src={LogoFreelancer} alt="Logo" />
              ) : (
                <S.Img src={Logo} alt="Logo" />
              )}
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
      ) : (
        <S.Container freelancerBoard={freelancerBoard}>
          {checkBool === false && (
            <>
              <MainMenu setCeckBool={setCeckBool} />
              <MenuBar checkBool={checkBool} setCeckBool={setCeckBool} MEMBERSHIP_FREELANCER={MEMBERSHIP_FREELANCER} />
            </>
          )}
          <S.HeaderDiv>
            <Link to="/">
              {window.localStorage.getItem('memberType') === '"FREELANCER"' ? (
                <S.Img src={LogoFreelancer} alt="Logo" />
              ) : (
                <S.Img src={Logo} alt="Logo" />
              )}
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
      )}
      {window.localStorage.accessToken !== undefined && <CompanyHeader width="830px" />}
    </>
  );
};

export default Header;
