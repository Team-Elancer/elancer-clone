import * as S from './style';

import Cancel from 'assets/images/cancel-dark.png';
import SubmitButton from 'components/Button/SubmitButton';
import useCloseOutside from 'hooks/useCloseOutside';

const ProjectInterview = ({ setInterviewModal }) => {
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
        <S.CountSpan>인터뷰 요청자 0명</S.CountSpan>
        <S.RequesterUl>인터뷰 요청자가 없습니다.</S.RequesterUl>
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
        <S.CountSpan>지원자 0명</S.CountSpan>
        <S.RequesterUl>인터뷰 요청자가 없습니다.</S.RequesterUl>
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
