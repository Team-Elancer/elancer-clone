import { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, useLocation, useParams } from 'react-router-dom';
import CompanyHeader from './Company';
import FreelancerHeader from './Freelancer';

import * as S from './style';

import Logo from 'assets/images/elancer_logo.png';

import Profile from 'assets/images/signin-profile.png';
import MenuBar from 'components/MenuBar';
import MainMenu from 'components/Modal/MainMenu';

const Header = ({ width, margin = '10px', bgColor = '#0000', color = 'black', logo }) => {
  const [checkBool, setCeckBool] = useState(true);
  const location = useLocation();
  const { id } = useParams();

  const changeBool = () => {
    return setCeckBool(false);
  };
  return (
    <>
      {window.localStorage.accessToken === undefined && (
        <S.Container bgColor={bgColor} color={color}>
          {checkBool === false && (
            <>
              <MainMenu setCeckBool={setCeckBool} />
              <MenuBar checkBool={checkBool} setCeckBool={setCeckBool} />
            </>
          )}
          <S.HeaderDiv margin={margin}>
            <Link to="/">
              <S.Img
                src={
                  location.pathname === '/enterprise' ||
                  location.pathname === `/project/${id}` ||
                  location.pathname === '/project-list'
                    ? logo
                    : Logo
                }
                alt="Logo"
              />
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

      {window.localStorage.memberType === '"FREELANCER"' && <FreelancerHeader width="830px" logo={logo} />}
      {window.localStorage.memberType === '"ENTERPRISE"' && (
        <CompanyHeader width="830px" margin={margin} bgColor={bgColor} logo={logo} color={color} />
      )}
    </>
  );
};

export default Header;
