import { useEffect, useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';

import ProjectFinish from './Finish';
import ProjectInterview from './Interview';
import ProjectMain from './Main';
import ProjectParticipate from './Participate';
import ProjectProceeding from './Proceeding';
import * as S from './style';
import ProjectTuning from './Tuning';

import BoardCardSpan from 'components/Myboard/CardSpan';

const DashBoardProject = () => {
  const [changeList, setChangeList] = useState('');
  const [newReloading, setNewReloading] = useState(true);
  const [newArray, setNewArray] = useState([]);
  const [newAxiosUrl, setNewAxiosUrl] = useState('/enterprise-project');

  const [Datas, setDatas, axiosUrl, setaxiosUrl, fetchData] = useOutletContext();

  useEffect(() => {
    setaxiosUrl(newAxiosUrl);
    setNewArray(Datas);
    if (Datas === '' || newReloading === false) {
      fetchData();
      setNewReloading(true);
    }
  }, [newAxiosUrl, Datas, newReloading]);

  return (
    <>
      <S.SpacebetweenDiv>
        <S.H1>프로젝트 관리</S.H1>
        <Link to="/dashboard/projectadd">
          <S.LinkP>프로젝트 등록</S.LinkP>
        </Link>
      </S.SpacebetweenDiv>
      <BoardCardSpan setChangeList={setChangeList} />
      {changeList === '' && (
        <ProjectMain Datas={newArray} newReloading={newReloading} setNewReloading={setNewReloading} />
      )}
      {changeList === '지원현황' && (
        <ProjectParticipate
          Datas={newArray}
          setNewAxiosUrl={setNewAxiosUrl}
          newAxiosUrl={newAxiosUrl}
          setNewReloading={setNewReloading}
          newReloading={newReloading}
        />
      )}
      {changeList === '인터뷰요청' && (
        <ProjectInterview
          Datas={newArray}
          setNewAxiosUrl={setNewAxiosUrl}
          newAxiosUrl={newAxiosUrl}
          setNewReloading={setNewReloading}
          newReloading={newReloading}
        />
      )}
      {changeList === '조율중' && (
        <ProjectTuning
          Datas={newArray}
          setNewAxiosUrl={setNewAxiosUrl}
          newAxiosUrl={newAxiosUrl}
          setNewReloading={setNewReloading}
          newReloading={newReloading}
        />
      )}
      {changeList === '진행중' && <ProjectProceeding Datas={newArray} />}
      {changeList === '완료프로젝트' && <ProjectFinish Datas={newArray} />}
    </>
  );
};

export default DashBoardProject;
