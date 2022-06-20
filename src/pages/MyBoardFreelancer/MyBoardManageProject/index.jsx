import { useOutletContext } from 'react-router-dom';

import * as S from './style';

import OnGoingCard from 'components/Card/OnGoingCard';
import BoardCardSpan from 'components/Myboard/CardSpan';

const MyBoardManageProject = () => {
  const [userData, setUserData, detailProfileData, setDetailProfileData] = useOutletContext();

  return (
    <div>
      <S.H1 top="2rem" bottom="4rem" laptoptop="2rem" laptopBottom="4rem">
        {userData.name} 님 이랜서가 응원해요
      </S.H1>
      <BoardCardSpan />
      <OnGoingCard />
      <S.H1 marginTop="5rem" top="2rem" bottom="4rem" laptoptop="2rem" laptopBottom="4rem">
        지원한 프로젝트 리스트 (0)
      </S.H1>
    </div>
  );
};

export default MyBoardManageProject;
