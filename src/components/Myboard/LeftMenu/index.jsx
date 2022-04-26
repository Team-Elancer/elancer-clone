import { Link } from 'react-router-dom';
import * as S from './style';

const LeftMenu = () => {
  return (
    <>
      <S.MenuDiv>
        <S.UlTag>
          <Link to="/dashboard/enterprise">
            <S.MenuLi>나의 현황</S.MenuLi>
          </Link>
          <Link to="/dashboard/profile">
            <S.MenuLi>프로필 관리</S.MenuLi>
          </Link>
          <Link to="/dashboard/project">
            <S.MenuLi>등록한 프로젝트</S.MenuLi>
          </Link>
          <Link to="/dashboard/scrap">
            <S.MenuLi>인재 스크랩</S.MenuLi>
          </Link>
          <Link to="/">
            <S.MenuLi>문의/요청</S.MenuLi>
          </Link>
          <Link to="/dashboard/account">
            <S.MenuLi>이랜서 계정</S.MenuLi>
          </Link>
        </S.UlTag>
      </S.MenuDiv>
      <S.MiddleDiv />
    </>
  );
};

export default LeftMenu;
