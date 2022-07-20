import { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, useLocation, useParams } from 'react-router-dom';

import * as S from './style';

import Logo from 'assets/images/elancer_logo.png';
import Profile from 'assets/images/signin-profile.png';

import MenuBar from 'components/MenuBar';
import MainMenu from 'components/Modal/MainMenu';

import { BaseUrl, CLIENT_FREELANCER } from 'utils/config/api';

const CompanyHeader = ({ margin, width, bgColor, color, logo }) => {
  const [checkBool, setCeckBool] = useState(true);
  const location = useLocation();
  const { id } = useParams();

  const [Datas, setDatas] = useState('');

  const FetchData = async () => {
    try {
      const res = await CLIENT_FREELANCER('/enterprise-thumbnail');
      const Data = await res.data;
      setDatas(Data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const changeBool = () => {
    return setCeckBool(false);
  };

  useEffect(() => {
    FetchData();
  }, []);

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
          <div>
            <Link to="/enterprise">
              <S.BigText>엔터프라이즈</S.BigText>
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
        <S.Menu>
          <S.Span onClick={changeBool}>
            <FaBars size="100%" color="gray" />
          </S.Span>
          <S.Span>
            <S.Image src={Datas?.thumbnail || Profile} alt="profile" />
          </S.Span>
        </S.Menu>
      </S.HeaderDiv>
    </S.Container>
  );
};

export default CompanyHeader;
