import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as S from './style';

const LeftMenu = () => {
  const lcation = useLocation();
  console.log(lcation.pathname === '/dashboard/enterprise');

  useEffect(() => {}, [lcation]);

  return (
    <>
      <S.MenuDiv>
        <S.UlTag>
          <Link to="/dashboard/enterprise">
            <S.MenuLi bgColor={lcation.pathname === '/dashboard/enterprise' ? '#f2f2f2' : 'white'}>나의 현황</S.MenuLi>
          </Link>
          <Link to="/dashboard/profile">
            <S.MenuLi bgColor={lcation.pathname === '/dashboard/profile' ? '#f2f2f2' : 'white'}>프로필 관리</S.MenuLi>
          </Link>
          <Link to="/dashboard/project">
            <S.MenuLi bgColor={lcation.pathname === '/dashboard/project' ? '#f2f2f2' : 'white'}>
              등록한 프로젝트
            </S.MenuLi>
          </Link>
          <Link to="/dashboard/scrap">
            <S.MenuLi bgColor={lcation.pathname === '/dashboard/scrap' ? '#f2f2f2' : 'white'}>인재 스크랩</S.MenuLi>
          </Link>
          <Link to="/dashboard/contact">
            <S.MenuLi bgColor={lcation.pathname === '/dashboard/contact' ? '#f2f2f2' : 'white'}>문의/요청</S.MenuLi>
          </Link>
          <Link to="/dashboard/account">
            <S.MenuLi bgColor={lcation.pathname === '/dashboard/account' ? '#f2f2f2' : 'white'}>이랜서 계정</S.MenuLi>
          </Link>
        </S.UlTag>
      </S.MenuDiv>
      <S.MiddleDiv />
    </>
  );
};

export default LeftMenu;
