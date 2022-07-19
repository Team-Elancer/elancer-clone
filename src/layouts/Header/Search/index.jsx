import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import * as S from '../Freelancer/style';
import Logo from 'assets/images/elancer_logo.png';
import Profile from 'assets/images/signin-profile.png';
import MenuBar from 'components/MenuBar';
import MainMenu from 'components/Modal/MainMenu';
import SearchBar from 'components/Search';

const SearchHeader = ({ bgColor = 'white', color = 'black', projectList, searchPage, searchValue }) => {
  const [checkBool, setCeckBool] = useState(true);
  const location = useLocation();

  const changeBool = () => {
    return setCeckBool(false);
  };

  return (
    <S.Container bgColor={bgColor} color={color} searchPage={searchPage}>
      {checkBool === false && (
        <>
          <MainMenu setCeckBool={setCeckBool} />
          <MenuBar checkBool={checkBool} setCeckBool={setCeckBool} />
        </>
      )}
      <S.HeaderDiv projectList={projectList}>
        <S.FlexDiv>
          <Link to="/">
            <S.Img src={Logo} alt="Logo" />
          </Link>
        </S.FlexDiv>

        {/*  =========== search bar =========== */}
        <S.Text projectList={projectList}>
          <SearchBar searchPage={searchPage} searchValue={searchValue} />
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

export default SearchHeader;
