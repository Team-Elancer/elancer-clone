import * as S from './style';

import Cancel from 'assets/images/cancel-dark.png';
import SubmitButton from 'components/Button/SubmitButton';
import useCloseOutside from 'hooks/useCloseOutside';

const ProjectInterview = ({ setInterviewModal, data }) => {
  const domNode = useCloseOutside(() => {
    setInterviewModal(true);
  });

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
        <S.CountSpan>인터뷰 요청자 {data.interviewRequestList.length}명</S.CountSpan>
        {data.interviewRequestList.length < 1 && <S.RequesterUl>인터뷰 요청자가 없습니다.</S.RequesterUl>}
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
        <S.CountSpan>지원자 {data.applicantList.length}명</S.CountSpan>
        {data.applicantList.length < 1 && <S.RequesterUl>인터뷰 요청자가 없습니다.</S.RequesterUl>}
        <S.Ul>
          {data.applicantList.map((data) => {
            return (
              <S.Li>
                <S.InputCheck type="checkbox" name="applicant" value="1" />
                <S.Name>{data.name}</S.Name>
              </S.Li>
            );
          })}
        </S.Ul>
      </S.RequesterDiv>
      <S.InterviewButtonDiv>
        <S.Button>인터뷰 요청</S.Button>
      </S.InterviewButtonDiv>
      <S.SecondSubmitDiv>
        <SubmitButton text="인터뷰 요청" heights="0.8rem" sides="1.8rem" />
      </S.SecondSubmitDiv>
    </S.Container>
  );
};

export default ProjectInterview;
