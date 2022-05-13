import { Link } from 'react-router-dom';
import * as S from './style';

import BoardCardSpan from 'components/Myboard/CardSpan';

const DashBoardProject = () => {
  return (
    <>
      <S.SpacebetweenDiv>
        <S.H1>프로젝트 관리</S.H1>
        <Link to="/dashboard/projectadd">
          <S.LinkP>프로젝트 등록</S.LinkP>
        </Link>
      </S.SpacebetweenDiv>
      <BoardCardSpan />
      <S.H1 top="4rem" laptoptop="4rem">
        헤드헌팅 리스트 (0)
      </S.H1>
    </>
  );
};

export default DashBoardProject;
