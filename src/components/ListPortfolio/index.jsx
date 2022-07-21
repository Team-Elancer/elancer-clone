import axios from 'axios';
import { useEffect } from 'react';

import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { Link } from 'react-router-dom';

import ProjectSkeleton from 'components/Skeleton/Project';

import * as S from 'styles/Ecard';

import { BaseUrl } from 'utils/config/api';

const ListPortfolio = ({ Datas }) => {
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
      // window.scrollTo(0, 0);
      positionSwitch();
      chageWorkShip();
    }
  }, [Datas]);

  const keepProject = (id) => {
    console.log(id);
    axios({
      method: 'POST',
      url: `${BaseUrl}/wish-project`,
      headers: {
        Authorization: `${window.localStorage.accessToken}`,
      },
      data: {
        projectNum: id,
      },
    })
      .then((res) => {
        console.log(res);
        alert('찜 성공! -> 마이보드 계정에서 확인하세요');
        window.location.reload();
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div>
      {Datas !== undefined ? (
        Datas.map((item, index) => {
          return (
            <S.EcardDiv key={item.projectNum}>
              <S.FirstDiv>
                <S.HeartBackDiv>
<<<<<<< HEAD
                  <S.HeartDiv>
                    <IoMdHeartEmpty size="100%" />
                  </S.HeartDiv>
=======
                  <S.HeartDiv onClick={() => keepProject(item.projectNum)}>🤍</S.HeartDiv>
>>>>>>> cf5fde895d0120a6a5ed1714ee96cff8f7c1f1ae
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
    </div>
  );
};

export default ListPortfolio;
