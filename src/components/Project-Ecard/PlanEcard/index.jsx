import { useEffect, useState } from 'react';

import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import ProjectSkeleton from 'components/Skeleton/Project';

import * as S from 'styles/Ecard';

const PlanEcard = ({ Datas }) => {
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
    if (Datas !== undefined) {
      positionSwitch();
      chageWorkShip();
    }
  }, [Datas]);
  return (
    <div>
      {!Datas ? (
        <ProjectSkeleton />
      ) : (
        Datas.map((item) => {
          return (
            <S.EcardDiv key={uuidv4}>
              <S.FirstDiv>
                <S.HeartBackDiv>
                  <IoMdHeartEmpty size="100%" />
                </S.HeartBackDiv>
                <S.EcardUlTag>
                  <S.EcardBlackLiTag>{positionSwitch(item.positionKind)}</S.EcardBlackLiTag>
                  <S.EcardBlackLiTag>{item.projectType === 'TELEWORKING' ? '상주' : '재택'}</S.EcardBlackLiTag>
                  <S.EcardBlackLiTag>{item.projectPeriod === 0 ? 1 : item.projectPeriod}개월</S.EcardBlackLiTag>
                  <S.EcardBlackLiTag>{checkAddress(item.address.mainAddress)}</S.EcardBlackLiTag>
                  <S.EcardBlackLiTag>{item.pay}</S.EcardBlackLiTag>
                  <S.EcardRedLiTag>{chageWorkShip(item.freelancerWorkmanShip)}</S.EcardRedLiTag>
                  {item.skills[0] !== '' &&
                    item.skills.map((skill) => {
                      return <S.EcardRedLiTag key={uuidv4()}>{skill}</S.EcardRedLiTag>;
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
      )}
    </div>
  );
};

export default PlanEcard;
