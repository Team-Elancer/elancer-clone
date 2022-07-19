import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import MoreButton from 'components/Button/MoreButton';
import ProjectSkeleton from 'components/Skeleton/Project';

import * as S from 'styles/Ecard';

import { FILTERED_DATA, CLIENT_FREELANCER } from 'utils/config/api';

const SearchProjectList = ({ searchValue }) => {
  const [Datas, setDatas] = useState('');
  const [nextPage, setNextPage] = useState('');
  const [Page, setPage] = useState(0);

  const fetchData = async () => {
    try {
      if (window.localStorage.accessToken) {
        const res = await CLIENT_FREELANCER(`/project-list?searchKey=${searchValue}`);
        const data = await res.data;
        setDatas(data.projectBoxResponses);
        setNextPage(data.hasNext);
      } else {
        const res = await FILTERED_DATA(`/project-list?searchKey=${searchValue}`);
        const data = await res.data;
        setDatas(data.projectBoxResponses);
        setNextPage(data.hasNext);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const MoreButtonFunction = () => {
    if (nextPage) {
      setPage((preView) => preView + 1);
    } else {
      alert('데이터가 더 없습니다.');
    }
  };

  const MoreData = useCallback(async () => {
    try {
      const res = await CLIENT_FREELANCER(`/project-list?searchKey=${searchValue}&page=${Page}`);
      const data = await res.data;
      setDatas((prevData) => [...prevData, ...data.projectBoxResponses]);
      setNextPage(data.hasNext);
    } catch (error) {
      console.log(error.message);
    }
  }, [Page]);

  const positionSwitch = (item) => {
    switch (item) {
      case 'PUBLISHER':
        return '퍼블리셔';
      case 'DESIGNER':
        return '디자이너';
      case 'PLANNER':
        return '기획자';

      case 'CROWD_WORKER':
        return '클라우드 워커';
      case 'ETC':
        return '기타';
      default:
        return '개발자';
    }
  };

  const chageWorkShip = (item) => {
    switch (item) {
      case 'MIDDLE':
        return '중급';

      case 'SENIOR':
        return '고급';

      default:
        return '초급';
    }
  };
  const checkAddress = (data) => {
    const addressArray = [];
    addressArray.push(data.split(' '));
    if (addressArray[0][0] === '우편번호') {
      return '재택';
    }
    const selectArray = addressArray[0].filter((a, i) => i < 2);
    return selectArray.join('|');
  };

  useEffect(() => {
    if (Page > 0) {
      MoreData();
    }
  }, [MoreData]);

  useEffect(() => {
    fetchData();
  }, [searchValue]);

  return (
    <div>
      <S.SubTitle>이랜서가 보증하는 IT 파트너스 39만명</S.SubTitle>
      <S.Title>{searchValue} 관련 프로젝트</S.Title>
      {Datas !== '' ? (
        Datas.map((item, index) => {
          return (
            <S.EcardDiv key={item.projectNum}>
              <S.FirstDiv>
                <S.HeartBackDiv>
                  <S.HeartDiv>🤍</S.HeartDiv>
                </S.HeartBackDiv>
                <S.EcardUlTag>
                  <S.EcardBlackLiTag>{positionSwitch(item.positionKind)}</S.EcardBlackLiTag>
                  <S.EcardBlackLiTag>{item.projectType === 'TELEWORKING' ? '재택' : '상주'}</S.EcardBlackLiTag>
                  <S.EcardBlackLiTag>{item.projectPeriod === 0 ? 1 : item.projectPeriod}개월</S.EcardBlackLiTag>
                  <S.EcardBlackLiTag>{checkAddress(item.address.mainAddress)}</S.EcardBlackLiTag>
                  <S.EcardBlackLiTag>{item.pay}</S.EcardBlackLiTag>
                  <S.EcardRedLiTag>{chageWorkShip(item.freelancerWorkmanShip)}</S.EcardRedLiTag>
                  {item.skills &&
                    item.skills.map((skill) => {
                      return skill && <S.EcardRedLiTag key={skill}>{skill}</S.EcardRedLiTag>;
                    })}
                </S.EcardUlTag>
                <Link to={`/project/${item.projectNum}`}>
                  <S.HoneTag>{item.projectName}</S.HoneTag>
                  <S.Ptag>{item.content}</S.Ptag>
                  <S.SubDiv>
                    <S.BigSpan>
                      <S.NumberTag>0명</S.NumberTag>
                      <S.TextpTag>이찜했습니다!</S.TextpTag>
                    </S.BigSpan>
                    <S.DaySpan>마감{item.endDays}일전</S.DaySpan>
                  </S.SubDiv>
                </Link>
              </S.FirstDiv>
            </S.EcardDiv>
          );
        })
      ) : (
        <div>
          <ProjectSkeleton />
          <ProjectSkeleton />
          <ProjectSkeleton />
        </div>
      )}
      <MoreButton MoreButtonFunction={MoreButtonFunction} />
    </div>
  );
};

export default SearchProjectList;
