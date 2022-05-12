import { Link } from 'react-router-dom';
import * as S from './style';

import OnGoingCard from 'components/Card/OnGoingCard';
import MyBoardProject from 'components/Myboard/CardSpan';
import CompanyMyboard from 'components/Myboard/Comapany-Myboard';

const MyBoardManageProject = () => {
  return (
    <div>
      <S.H1 top="2rem" bottom="4rem" laptoptop="2rem" laptopBottom="4rem">
        클론코딩님 이랜서가 응원해요
      </S.H1>
      <MyBoardProject />
      <OnGoingCard />
      <S.H1 marginTop="5rem" top="2rem" bottom="4rem" laptoptop="2rem" laptopBottom="4rem">
        지원한 프로젝트 리스트 (0)
      </S.H1>
    </div>
  );
};

export default MyBoardManageProject;
