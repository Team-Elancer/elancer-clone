import { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, useLocation, useParams } from 'react-router-dom';
import * as S from './style';
import Logo from 'assets/images/elancer_logo.png';
import BlackLogo from 'assets/images/freelancer-black.png';
import WhiteLogo from 'assets/images/freelancer.png';
import Profile from 'assets/images/signin-profile.png';
import MenuBar from 'components/MenuBar';
import MainMenu from 'components/Modal/MainMenu';

import { CLIENT_FREELANCER } from 'utils/config/api';

const FreelancerHeader = ({ width, bgColor = '#0000', color = 'black', logo, projectList, freelancerUserData }) => {
  const [checkBool, setCeckBool] = useState(true);
  const { id } = useParams();
  const location = useLocation();

  const [freelancerThumbnailPath, setFreelancerThumbnailPath] = useState(null);
  console.log(freelancerThumbnailPath, 'freelancerThumbnailPath');

  useEffect(() => {
    if (window.localStorage.memberType === '"FREELANCER"') {
      getFreelancerData();
    }
  }, []);

  const getFreelancerData = async () => {
    const { data } = await CLIENT_FREELANCER('/freelancer');
    console.log(data.thumbnailPath);

    setFreelancerThumbnailPath(data.thumbnailPath);
  };

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
      <S.HeaderDiv width={width} projectList={projectList}>
        <S.FlexDiv>
          <Link to="/">
            <S.Img
              src={
                location.pathname === '/freelancer' ||
                // location.pathname === '/enterprise' ||
                location.pathname === `/project/${id}` ||
                location.pathname === '/project-list'
                  ? logo
                  : Logo
              }
              alt="Logo"
            />
          </Link>
          <div>
            <Link to="/freelancer">
              <S.LogoImage
                src={
                  location.pathname === '/freelancer' ||
                  location.pathname === '/project-list' ||
                  location.pathname === `/project/${id}`
                    ? WhiteLogo
                    : BlackLogo
                }
                alt="Logo"
              />
            </Link>
          </div>
        </S.FlexDiv>
        <S.Text projectList={projectList}>
          <Link to="/partner-list">
            <S.ThreeTag>프리랜서 보기</S.ThreeTag>
          </Link>
          <S.ThreeTag>|</S.ThreeTag>
          <Link to="/project-list">
            <S.ThreeTag projectList={projectList}>프로젝트 보기</S.ThreeTag>
          </Link>
        </S.Text>
        <S.Menu onClick={changeBool}>
          <S.ContainerFabars>
            <FaBars size="16" color="gray" />
          </S.ContainerFabars>
          <S.Span>
            {freelancerThumbnailPath ? (
              <S.Image src={freelancerThumbnailPath} alt="profile" />
            ) : (
              <S.Image src={Profile} alt="profile" />
            )}
          </S.Span>
        </S.Menu>
      </S.HeaderDiv>
    </S.Container>
  );
};

export default FreelancerHeader;
