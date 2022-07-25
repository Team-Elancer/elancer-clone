import axios from 'axios';
import { useState, useEffect } from 'react';

import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import * as S from './style';

import left from 'assets/images/bt-left.png';
import right from 'assets/images/bt-right.png';
import companyLogo from 'assets/images/company-logo_1.png';
import SkeletonReProject from 'components/Skeleton/ReProject';
import { BaseUrl, FILTERED_DATA, CLIENT_FREELANCER } from 'utils/config/api';

const ReProject = ({ color = 'black', title = '추천 프로젝트' }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [Datas, setDatas] = useState('');

  const token = window.localStorage.accessToken;
  const member = window.localStorage.memberType;

  const fetchData = async () => {
    try {
      if (token && member === '"FREELANCER"') {
        const { data } = await CLIENT_FREELANCER(`/recommend-project`);
        setDatas(data);
      }
      if (!token || member === '"ENTERPRISE"') {
        const { data } = await FILTERED_DATA(`/recommend-project`);
        setDatas(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleClick = (alt) => {
    if (alt === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 1);
    } else {
      setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 0);
    }
  };

  const checkColor = (data) => {
    if (data === 'BLACK') {
      return '#181818';
    }
    if (data === 'BLUE') {
      return '#7485c9';
    }
    if (data === 'INDIGO') {
      return '#8a7fa4';
    }
    if (data === 'ROSSYBROWN') {
      return '#9d7985';
    }
    if (data === 'BROWN') {
      return '#b57360';
    }
    if (data === 'CHOCOLATE') {
      return '#d56b2d';
    }
    if (data === 'ORANGE') {
      return '#f16300';
    }
    return '#FFFFFF';
  };

  const checkCareer = (data) => {
    if (data === 'JUNIOR') {
      return '초급';
    }
    if (data === 'MIDDLE') {
      return '중급';
    }
    return '고급';
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

  const checkPay = (data) => {
    if (data.length > 5) {
      const fontNumber = data.substr(0, 4);
      const numArray = fontNumber.split('');
      return fontNumber.padStart(4, ',');
    }
    return data;
  };

  useEffect(() => {
    fetchData();
  }, []);

  const keepProject = (id) => {
    if (token && member === '"FREELANCER"') {
      axios({
        method: 'POST',
        url: `${BaseUrl}/wish-project`,
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          Authorization: `${window.localStorage.accessToken}`,
        },
        data: {
          projectNum: id,
        },
      })
        .then((res) => {
          alert('찜 성공! -> 마이보드 계정에서 확인하세요');
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      alert('프리랜서 아이디로 로그인하세요.');
    }
  };

  const deleteProject = (id) => {
    if (token && member === '"FREELANCER"') {
      axios({
        method: 'DELETE',
        url: `${BaseUrl}/wish-project`,
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          Authorization: `${window.localStorage.accessToken}`,
        },
        data: {
          projectNum: id,
        },
      })
        .then((res) => {
          alert('해제 되었습니다.');
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      alert('프리랜서 아이디로 로그인하세요.');
    }
  };

  return (
    <S.Container>
      <S.FirstDiv>
        <S.H1 color={color}>{title}</S.H1>
        <S.ButtonDiv>
          <S.Img src={left} alt="left" direction="left" onClick={() => handleClick('left')} />
          <S.Img src={right} alt="right" direction="right" onClick={() => handleClick('right')} />
        </S.ButtonDiv>
      </S.FirstDiv>
      {!Datas ? (
        <SkeletonReProject />
      ) : (
        <S.SecondDiv>
          {Datas.map((data, index) => {
            return (
              <S.ProjectDiv key={`data.projectName${index + 1}`} slideIndex={slideIndex}>
                <S.UpDiv bgColor={checkColor(data.projectBackGround)}>
                  <S.DivTag>
                    <S.SpanTag>
                      {data.positionKind === 'DEVELOPER' && '개발자'}
                      {data.positionKind === 'PUBLISHER' && '퍼블리셔'}
                      {data.positionKind === 'DESIGNER' && '디자이너'}
                      {data.positionKind === 'PLANNER' && '기획자'}
                      {data.positionKind === 'ETC' && '기타'} {data.projectType === 'WORKING' ? '상주' : '재택'}{' '}
                      프로그램
                    </S.SpanTag>
                    <S.HeartBackDiv>
                      {data.wishState ? (
                        <IoMdHeart onClick={() => deleteProject(data.projectNum)} size="100%" />
                      ) : (
                        <IoMdHeartEmpty onClick={() => keepProject(data.projectNum)} size="100%" />
                      )}
                    </S.HeartBackDiv>
                  </S.DivTag>
                  <Link to={`/project/${data.projectNum}`}>
                    <S.BackImg url={data?.enterpriseLogo || companyLogo} />
                  </Link>
                </S.UpDiv>
                <S.DownDiv>
                  <S.DownSmallDiv>
                    <S.BigSpan>
                      <S.MiniSpan>마감{data.endDays}일전</S.MiniSpan>
                      {data.skills.map((data) => {
                        return data && <S.MiniSecond key={uuidv4()}>{data}</S.MiniSecond>;
                      })}
                    </S.BigSpan>
                    <Link to={`/project/${data.projectNum}`}>
                      <S.hiddenP>
                        <S.TextaTag>{data.projectName}</S.TextaTag>
                      </S.hiddenP>
                    </Link>
                    <S.Ptag>
                      {checkCareer(data.freelancerWorkmanShip)} / {data.projectPeriod}개월 /{' '}
                      {checkAddress(data.address.mainAddress)} / {checkPay(data.pay)}
                      {data.pay !== '비공개' && data.pay !== '협의가능' ? '만원' : ''}
                    </S.Ptag>
                  </S.DownSmallDiv>
                </S.DownDiv>
              </S.ProjectDiv>
            );
          })}
        </S.SecondDiv>
      )}
    </S.Container>
  );
};

export default ReProject;
