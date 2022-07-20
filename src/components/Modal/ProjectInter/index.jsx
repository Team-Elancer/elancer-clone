import axios from 'axios';
import { useEffect, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';
import * as S from './style';

import Cancel from 'assets/images/cancel-dark.png';
import SubmitButton from 'components/Button/SubmitButton';
import useCloseOutside from 'hooks/useCloseOutside';
import { BaseUrl } from 'utils/config/api';

const ProjectInter = ({ setInterviewModal, Datas, newReloading, setNewReloading }) => {
  const [checkedInputs, setCheckedInputs] = useState('');
  const [checkedInterview, setCheckedInterview] = useState('');
  const [newArray, setNewArray] = useState([]);

  const domNode = useCloseOutside(() => {
    setInterviewModal(true);
  });

  const changeHandler = (e) => {
    const num = Number(e.target.id);
    if (e.currentTarget.checked) {
      setCheckedInputs([...checkedInputs, num]);
    } else {
      // 체크 해제
      setCheckedInputs(checkedInputs.filter((a) => a !== num));
    }
  };

  const changeInterview = (e) => {
    const num = Number(e.target.id);
    if (e.currentTarget.checked) {
      setCheckedInterview([...checkedInterview, num]);
    } else {
      // 체크 해제
      setCheckedInterview(checkedInterview.filter((a) => a !== num));
    }
  };

  const addApplicant = () => {
    const newData = checkedInputs.join();
    const checkUuplicate = newArray.interviewFreelancerList.map((a) => a.num);
    if (checkUuplicate.includes(Number(newData))) {
      alert('이미 있는 지원자입니다.');
    } else {
      axios({
        method: 'POST',
        url: `${BaseUrl}/interview-project`,
        headers: {
          Authorization: `${window.localStorage.accessToken}`,
        },
        data: {
          projectNum: Datas.projectNum,
          freelancerNum: newData,
        },
      })
        .then((res) => {
          alert('인터뷰요청이 완료되었습니다.');
          setInterviewModal(true);
          setNewReloading(false);
        })
        .catch((error) => {
          alert(error.response.data.errorMessage);
          console.log(error);
        });
    }
  };

  const addWaitList = () => {
    const newData = checkedInterview.join();
    axios({
      method: 'POST',
      url: `${BaseUrl}/wait-project`,
      headers: {
        Authorization: `${window.localStorage.accessToken}`,
      },
      data: {
        projectNum: Datas.projectNum,
        freelancerNum: newData,
      },
    })
      .then((res) => {
        alert('프리랜서 투입이 완료되었습니다.');
        setNewReloading(false);
      })
      .catch((error) => {
        alert(error.response.data.errorMessage);
        console.log(error);
      });
  };

  const deleteInterview = () => {
    const newData = checkedInterview.join();
    axios({
      method: 'DELETE',
      url: `${BaseUrl}/reject-interview-project`,
      headers: {
        Authorization: `${window.localStorage.accessToken}`,
      },
      data: {
        projectNum: Datas.projectNum,
        freelancerNum: newData,
      },
    })
      .then((res) => {
        alert('인터뷰를 취소했습니다.');
        setNewReloading(false);
      })
      .catch((err) => {
        alert(err.response.data.errorMessage);
        console.log(err.message);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setNewArray(Datas);
  }, [Datas, newReloading]);

  return (
    <S.Container ref={domNode}>
      <S.FlexDiv>
        <S.Img
          src={Cancel}
          alt="cancel"
          onClick={() => {
            setInterviewModal(true);
          }}
        />
        <S.Title>프로젝트 지원,인터뷰 요청자</S.Title>
      </S.FlexDiv>
      <S.RequesterDiv>
        <S.CountSpan>인터뷰 요청자 {Datas.interviewFreelancerList.length}명</S.CountSpan>
        {Datas && Datas.interviewFreelancerList.length < 1 ? (
          <S.RequesterUl>인터뷰 요청자가 없습니다.</S.RequesterUl>
        ) : null}
        {newArray.length === undefined &&
          newArray.interviewFreelancerList.map((data) => {
            return (
              <S.Li key={uuidv4()}>
                <S.InputCheck
                  type="checkbox"
                  name="applicant"
                  id={data.num}
                  value={data.num}
                  onChange={(e) => changeInterview(e)}
                />
                <S.ViewBlock color={data.interviewStatus === 'WAITING' ? '#f2f2f2' : '#eb6100'}>
                  {data.interviewStatus === 'WAITING' ? '요청' : '수락'}
                </S.ViewBlock>
                <S.Name>
                  {data.name}[{data.positionType}] 경력{data.careerYear}년 {data.phone}
                </S.Name>
              </S.Li>
            );
          })}
      </S.RequesterDiv>
      <S.FirstSubmitDiv border="1px">
        <S.InfoPTag>※ 인터뷰 요청자 중 수락한 프리랜서에 대해서만, 경력기술서를 받아 보실 수 있습니다.</S.InfoPTag>
        <S.MobileButonDiv>
          <S.Button onClick={addWaitList}>지원자 투입</S.Button>
          <S.PaddingLeftDiv>
            <S.Button onClick={deleteInterview}>인터뷰 취소</S.Button>
          </S.PaddingLeftDiv>
        </S.MobileButonDiv>
        <S.ButtonDiv>
          <SubmitButton text="지원자 투입" heights="0.8rem" sides="1.8rem" click={addWaitList} />
          <S.PaddingLeftDiv>
            <SubmitButton text="인터뷰 취소" heights="0.8rem" sides="1.8rem" click={deleteInterview} />
          </S.PaddingLeftDiv>
        </S.ButtonDiv>
      </S.FirstSubmitDiv>
      <S.RequesterDiv>
        <S.CountSpan>지원자 {Datas.applyFreelancerList && Datas.applyFreelancerList.length}명</S.CountSpan>
        {Datas.applyFreelancerList.length < 1 && <S.RequesterUl>인터뷰 요청자가 없습니다.</S.RequesterUl>}
        <S.Ul>
          {newArray.length === undefined &&
            newArray.applyFreelancerList.map((data) => {
              return (
                <S.Li key={uuidv4()}>
                  <S.InputCheck
                    type="checkbox"
                    name="applicant"
                    id={data.num}
                    checked={checkedInputs !== undefined && checkedInputs.includes(data.num) ? true : null}
                    value={data.num}
                    onChange={(e) => {
                      changeHandler(e);
                    }}
                  />
                  <S.Name>
                    {data.name}[{data.positionType}] 경력{data.careerYear}년
                  </S.Name>
                </S.Li>
              );
            })}
        </S.Ul>
      </S.RequesterDiv>
      <S.InterviewButtonDiv>
        <S.Button onClick={addApplicant}>인터뷰 요청</S.Button>
      </S.InterviewButtonDiv>
      <S.SecondSubmitDiv>
        <SubmitButton text="인터뷰 요청" heights="0.8rem" sides="1.8rem" click={addApplicant} />
      </S.SecondSubmitDiv>
    </S.Container>
  );
};

export default ProjectInter;
