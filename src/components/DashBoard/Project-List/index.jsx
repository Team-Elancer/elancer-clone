import axios from 'axios';
import { useState, useEffect } from 'react';
import * as S from './style';

import ProjectInter from 'components/Modal/ProjectInter';
import ProjectWait from 'components/Modal/ProjectWait';
import { BaseUrl } from 'utils/config/api';

const ProjectList = ({ data, newReloading, setNewReloading, status, finish = 'none' }) => {
  const [interviewModal, setInterviewModal] = useState(true);
  const [waitModal, setWaitModal] = useState(true);
  const [bgColor, setBgColor] = useState('');
  const [waitComponent, setwaitComponent] = useState(false);

  const [newApplicant, setNewApplicant] = useState('');
  const [newInterview, setNewInterview] = useState('');
  const [newTurning, setNewTurning] = useState('');

  const changeBgColor = () => {
    switch (status) {
      case '인터뷰요청 프로젝트':
        setBgColor('#9f7985');
        break;
      case '조율중 프로젝트':
        setBgColor('#b57360');
        break;
      case '진행중 프로젝트':
        setBgColor('#d56b2d');
        setwaitComponent(true);
        break;
      case '완료 프로젝트':
        setBgColor('#f16300');
        setwaitComponent(true);
        break;
      default:
        setBgColor('#8a7fa4');
        break;
    }
  };

  const cancelProject = () => {
    const checkConfrim = window.confirm('삭제하시겠습니까?');
    if (checkConfrim) {
      console.log(data.projectNum);
      axios({
        method: 'DELETE',
        url: `${BaseUrl}/project-delete`,
        headers: {
          Authorization: `${window.localStorage.accessToken}`,
        },
        data: {
          projectNum: data.projectNum,
        },
      })
        .then((res) => {
          alert('프로젝트가 삭제 되었습니다.');
          setNewReloading(false);
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    } else {
      console.log('취소');
    }
  };

  const startProject = () => {
    if (data.headCount !== data.waitFreelancerCount) {
      const checkConfrim = window.confirm('프리랜서 목표인원이 채워지지 않았습니다. 그래도 진행하시겠습니까?');
      if (checkConfrim) {
        axios({
          method: 'POST',
          url: `${BaseUrl}/start-project`,
          headers: {
            Authorization: `${window.localStorage.accessToken}`,
          },
          data: {
            projectNum: data.projectNum,
          },
        })
          .then((res) => {
            alert('프로젝트가 진행중으로 변경되었습니다.');
            setNewReloading(false);
          })
          .catch((err) => {
            alert(err.response.data.message);
          });
      } else {
        console.log('취소');
      }
    } else {
      axios({
        method: 'POST',
        url: `${BaseUrl}/start-project`,
        headers: {
          Authorization: `${window.localStorage.accessToken}`,
        },
        data: {
          projectNum: data.projectNum,
        },
      })
        .then((res) => {
          alert('프로젝트가 진행중으로 변경되었습니다.');
          setNewReloading(false);
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    }
  };

  const endProject = () => {
    const checkConfrim = window.confirm('프로젝트를 완료하시겠습니까?');
    if (checkConfrim) {
      axios({
        method: 'POST',
        url: `${BaseUrl}/finish-project`,
        headers: {
          Authorization: `${window.localStorage.accessToken}`,
        },
        data: {
          projectNum: data.projectNum,
        },
      })
        .then((res) => {
          alert('프로젝트가 완료 되었습니다.');
          setNewReloading(false);
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    } else {
      console.log('취소');
    }
  };

  useEffect(() => {
    changeBgColor();
    if (newApplicant === '') {
      setNewApplicant(data.applyFreelancerList);
      setNewInterview(data.interviewFreelancerList);
    }
    if (newTurning === '') {
      setNewTurning(data.waitFreelancerCount);
    }
  }, [data]);

  console.log(data);
  return (
    <S.Container>
      <S.ColorDiv>
        {interviewModal === false && (
          <ProjectInter
            newReloading={newReloading}
            setNewReloading={setNewReloading}
            Datas={data}
            setInterviewModal={setInterviewModal}
          />
        )}
        {waitModal === false && (
          <ProjectWait
            newReloading={newReloading}
            setNewReloading={setNewReloading}
            Datas={data}
            setWaitModal={setWaitModal}
          />
        )}
        <S.BetweenDiv>
          <S.SpanTag bgColor={bgColor}>{status}</S.SpanTag>
          <S.SpanTag
            spanTag={status === '완료 프로젝트' && 'none'}
            bgColor="#3c3c3c"
            cursor="pointer"
            onClick={cancelProject}
          >
            등록 취소
          </S.SpanTag>
        </S.BetweenDiv>
        <S.StartProject start={data.waitFreelancerList !== undefined ? 'flex' : 'none'}>
          <S.SpanTag bgColor="#f16300" cursor="pointer" onClick={startProject}>
            프로젝트 시작
          </S.SpanTag>
        </S.StartProject>
        <S.StartProject start={finish}>
          <S.SpanTag bgColor="#f16300" cursor="pointer" onClick={endProject}>
            프로젝트 완료
          </S.SpanTag>
        </S.StartProject>
        <S.Title>{data.projectName}</S.Title>
        <S.FlexDiv>
          <S.ProjectSpan bgColor="#6b9bff">
            {data.positionKind}/{data.demandCareer} {data.headCount}명
          </S.ProjectSpan>
          <S.ProjectSpan bgColor="#6b9bff">
            {data.projectStateDate} ~ {data.projectEndDate}
          </S.ProjectSpan>
          <S.ProjectSpan bgColor="#6b9bff">
            월단가: {data.minMoney}~{data.maxMoney}만원
          </S.ProjectSpan>
        </S.FlexDiv>
        <S.UlTag>
          <S.RelativeLi>
            <S.BorderTopDiv type="dotted" color="#f16300" laptopLeft="0.75rem" />
            <S.Circlediv color="#f16300" left="-0.8rem" />
            <S.PTag left="-1.45rem" laptopLeft="-1.75rem">
              지원서
              <br />
              접수중
            </S.PTag>
          </S.RelativeLi>
          <S.RelativeLi>
            <S.BorderTopDiv type="dotted" color="#f16300" left="2.88rem" laptopLeft="7.6rem" />
            <S.Circlediv color="#f16300" left="2.1rem" laptopLeft="6rem" />
            <S.PTag left="1.45rem" laptopLeft="5.1rem">
              이력서
              <br />
              검토중
            </S.PTag>
          </S.RelativeLi>
          <S.RelativeLi>
            <S.BorderTopDiv
              type={
                data.interviewFreelancerCount > 0 || data.waitFreelancerCount > 0 || data.processingFreelancerCount > 0
                  ? 'dotted'
                  : 'solid'
              }
              color={
                data.interviewFreelancerCount > 0 || data.waitFreelancerCount > 0 || data.processingFreelancerCount > 0
                  ? '#f16300'
                  : '#e1e1e1'
              }
              left="5.75rem"
              laptopLeft="14.3rem"
            />
            <S.Circlediv
              color={
                data.interviewFreelancerCount > 0 || data.waitFreelancerCount > 0 || data.processingFreelancerCount > 0
                  ? '#f16300'
                  : '#e1e1e1'
              }
              left="4.95rem"
              laptopLeft="12.7rem"
            />
            <S.PTag left="4.45rem" laptopLeft="11.8rem">
              인터뷰
              <br />
              요청
            </S.PTag>
          </S.RelativeLi>
          <S.RelativeLi>
            <S.BorderTopDiv
              type={
                (data.interviewFreelancerList !== undefined &&
                  data.interviewFreelancerList.map((a) => a.interviewStatus !== 'WAITING') === true) ||
                data.waitFreelancerCount > 0 ||
                data.processingFreelancerCount > 0
                  ? 'dotted'
                  : 'solid'
              }
              color={
                (data.interviewFreelancerList !== undefined &&
                  data.interviewFreelancerList.map((a) => a.interviewStatus !== 'WAITING') === true) ||
                data.waitFreelancerCount > 0 ||
                data.processingFreelancerCount > 0
                  ? '#f16300'
                  : '#e1e1e1'
              }
              left="8.6rem"
              laptopLeft="20.1rem"
            />
            <S.Circlediv
              color={
                (data.interviewFreelancerList !== undefined &&
                  data.interviewFreelancerList.map((a) => a.interviewStatus !== 'WAITING') === true) ||
                data.waitFreelancerCount > 0 ||
                data.processingFreelancerCount > 0
                  ? '#f16300'
                  : '#e1e1e1'
              }
              left="7.8rem"
              laptopLeft="18.5rem"
            />
            <S.PTag left="7.35rem" laptopLeft="17.7rem">
              인터뷰
              <br />
              결과
              <br />
              대기중
            </S.PTag>
          </S.RelativeLi>
          <S.RelativeLi>
            <S.BorderTopDiv
              type={data.waitFreelancerCount > 0 || data.processingFreelancerCount > 0 ? 'dotted' : 'solid'}
              color={data.waitFreelancerCount > 0 || data.processingFreelancerCount > 0 ? '#f16300' : '#e1e1e1'}
              left="11.5rem"
              laptopLeft="26.8rem"
            />
            <S.Circlediv
              color={data.waitFreelancerCount > 0 || data.processingFreelancerCount > 0 ? '#f16300' : '#e1e1e1'}
              left="10.65rem"
              laptopLeft="25.2rem"
            />
            <S.PTag left="10.1rem" laptopLeft="24.4rem">
              투입
              <br />
              준비중
            </S.PTag>
          </S.RelativeLi>
          <S.RelativeLi>
            <S.BorderTopDiv
              type={waitComponent === true ? 'dotted' : 'solid'}
              color={waitComponent === true ? '#f16300' : '#e1e1e1'}
              left="14.4rem"
              laptopLeft="33.5rem"
            />
            <S.Circlediv color={waitComponent === true ? '#f16300' : '#e1e1e1'} left="13.55rem" laptopLeft="32rem" />
            <S.PTag left="12.9rem" laptopLeft="31.1rem">
              진행중
            </S.PTag>
          </S.RelativeLi>
          <S.RelativeLi>
            <S.Circlediv
              color={status === '완료 프로젝트' ? '#f16300' : '#e1e1e1'}
              left="16.45rem"
              laptopLeft="38.6rem"
            />
            <S.PTag left="15.9rem" laptopLeft="37.8rem">
              완료
            </S.PTag>
          </S.RelativeLi>
        </S.UlTag>
        <S.BetweenDiv top="1rem">
          <S.DayPTag>프로젝트를 {data.createdDate}에 등록하였습니다.</S.DayPTag>
          <S.FlexDiv>
            <S.ProjectSpan
              display={data.applyFreelancerList !== undefined ? 'block' : 'none'}
              bgColor="#ff6b6b"
              onClick={() => {
                setInterviewModal(false);
              }}
            >
              지원자 {newApplicant === undefined ? 0 : newApplicant.length}
            </S.ProjectSpan>
            <S.ProjectSpan
              display={data.interviewFreelancerList !== undefined ? 'block' : 'none'}
              bgColor="#ff6b6b"
              onClick={() => {
                setInterviewModal(false);
              }}
            >
              인터뷰요청자 {newInterview === undefined ? 0 : newInterview.length}
            </S.ProjectSpan>
            <S.ProjectSpan
              display={data.waitFreelancerList !== undefined ? 'block' : 'none'}
              bgColor="#ff6b6b"
              onClick={() => {
                setWaitModal(false);
              }}
            >
              수락한 지원자 {newTurning === undefined ? 0 : newTurning}
            </S.ProjectSpan>
          </S.FlexDiv>
        </S.BetweenDiv>
      </S.ColorDiv>
    </S.Container>
  );
};

export default ProjectList;
