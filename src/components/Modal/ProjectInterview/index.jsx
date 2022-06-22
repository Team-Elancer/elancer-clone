import axios from 'axios';
import { useEffect, useState } from 'react';
import * as S from './style';

import Cancel from 'assets/images/cancel-dark.png';
import SubmitButton from 'components/Button/SubmitButton';
import useCloseOutside from 'hooks/useCloseOutside';

const ProjectInterview = ({ setInterviewModal, Datas, newReloading, setNewReloading }) => {
  const [checkedInputs, setCheckedInputs] = useState('');
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

  const addApplicant = () => {
    const newData = checkedInputs.join();
    console.log(newData);
    axios({
      method: 'POST',
      url: 'http://ec2-13-209-114-196.ap-northeast-2.compute.amazonaws.com:8080/interview-project',
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
        setNewReloading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    setNewArray(Datas);
    console.log('리로딩');
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
        <S.CountSpan>인터뷰 요청자 {Datas.interviewRequestList.length}명</S.CountSpan>
        {Datas && Datas.interviewRequestList.length < 1 ? (
          <S.RequesterUl>인터뷰 요청자가 없습니다.</S.RequesterUl>
        ) : null}
        {newArray.length === undefined &&
          newArray.interviewRequestList.map((data) => {
            return (
              <S.Li>
                <S.InputCheck type="checkbox" name="applicant" id={data.num} value={data.num} />
                <S.Name>{data.name}</S.Name>
              </S.Li>
            );
          })}
      </S.RequesterDiv>
      <S.FirstSubmitDiv border="1px">
        <S.InfoPTag>※ 인터뷰 요청자 중 수락한 프리랜서에 대해서만, 경력기술서를 받아 보실 수 있습니다.</S.InfoPTag>
        <S.MobileButonDiv>
          <S.Button>지원자 투입</S.Button>
          <S.PaddingLeftDiv>
            <S.Button>인터뷰 취소</S.Button>
          </S.PaddingLeftDiv>
        </S.MobileButonDiv>
        <S.ButtonDiv>
          <SubmitButton text="지원자 투입" heights="0.8rem" sides="1.8rem" />
          <S.PaddingLeftDiv>
            <SubmitButton text="인터뷰 취소" heights="0.8rem" sides="1.8rem" />
          </S.PaddingLeftDiv>
        </S.ButtonDiv>
      </S.FirstSubmitDiv>
      <S.RequesterDiv>
        <S.CountSpan>지원자 {Datas.applicantList.length}명</S.CountSpan>
        {Datas.applicantList.length < 1 && <S.RequesterUl>인터뷰 요청자가 없습니다.</S.RequesterUl>}
        <S.Ul>
          {newArray.length === undefined &&
            newArray.applicantList.map((data) => {
              return (
                <S.Li key={data.num}>
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
                  <S.Name>{data.name}</S.Name>
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

export default ProjectInterview;
