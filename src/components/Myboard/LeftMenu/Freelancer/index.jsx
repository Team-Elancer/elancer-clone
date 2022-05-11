import { Link, useLocation } from 'react-router-dom';
import * as S from './style';

const LeftMenuMyBoard = () => {
  const location = useLocation();

  return (
    <>
      <S.MenuDiv>
        <S.UlTag>
          <Link to="/myboard-freelancer/enterprise">
            <S.MenuLi
              bgColor={
                location.pathname === '/myboard-freelancer' ||
                location.pathname === '/myboard-freelancer/' ||
                location.pathname === '/myboard-freelancer/enterprise'
                  ? '#f2f2f2'
                  : 'white'
              }
            >
              나의 현황
            </S.MenuLi>
          </Link>
          <Link to="/myboard-freelancer/profile">
            <S.MenuLi bgColor={location.pathname === '/myboard-freelancer/profile' ? '#f2f2f2' : 'white'}>
              프로필 관리
            </S.MenuLi>
          </Link>
          <Link to="/myboard-freelancer/project">
            <S.MenuLi bgColor={location.pathname === '/myboard-freelancer/project' ? '#f2f2f2' : 'white'}>
              수주 관리
            </S.MenuLi>
          </Link>
          <Link to="/myboard-freelancer/scrap">
            <S.MenuLi bgColor={location.pathname === '/myboard-freelancer/scrap' ? '#f2f2f2' : 'white'}>
              커리어 관리
            </S.MenuLi>
          </Link>
          <Link to="/myboard-freelancer/contact">
            <S.MenuLi bgColor={location.pathname === '/myboard-freelancer/contact' ? '#f2f2f2' : 'white'}>
              문의/요청
            </S.MenuLi>
          </Link>
          <Link to="/myboard-freelancer/account">
            <S.MenuLi bgColor={location.pathname === '/myboard-freelancer/account' ? '#f2f2f2' : 'white'}>
              이랜서 계정
            </S.MenuLi>
          </Link>
        </S.UlTag>
      </S.MenuDiv>
      <S.MiddleDiv />
    </>
  );
};

export default LeftMenuMyBoard;
