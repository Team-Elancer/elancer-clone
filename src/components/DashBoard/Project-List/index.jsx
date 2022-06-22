import { useState, useEffect } from 'react';
import * as S from './style';

import Loading from 'components/Loading';
import ProjectInterview from 'components/Modal/ProjectInterview';

const ProjectList = ({ data, setHello, newReloading, setNewReloading }) => {
  const [interviewModal, setInterviewModal] = useState(true);

  return (
    <S.Container>
      <S.ColorDiv>
        {interviewModal === false && (
          <ProjectInterview
            setHello={setHello}
            newReloading={newReloading}
            setNewReloading={setNewReloading}
            Datas={data}
            setInterviewModal={setInterviewModal}
          />
        )}
        <S.BetweenDiv>
          <S.SpanTag bgColor="#8a7fa4">지원현황 프로젝트</S.SpanTag>
          <S.SpanTag bgColor="#3c3c3c" cursor="pointer">
            등록 취소
          </S.SpanTag>
        </S.BetweenDiv>
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
            <S.BorderTopDiv type="solid" color="#e1e1e1" left="2.88rem" laptopLeft="7.6rem" />
            <S.Circlediv color="#e1e1e1" left="2.1rem" laptopLeft="6rem" />
            <S.PTag left="1.45rem" laptopLeft="5.1rem">
              이력서
              <br />
              검토중
            </S.PTag>
          </S.RelativeLi>
          <S.RelativeLi>
            <S.BorderTopDiv type="solid" color="#e1e1e1" left="5.75rem" laptopLeft="14.3rem" />
            <S.Circlediv color="#e1e1e1" left="4.95rem" laptopLeft="12.7rem" />
            <S.PTag left="4.45rem" laptopLeft="11.8rem">
              인터뷰
              <br />
              요청
            </S.PTag>
          </S.RelativeLi>
          <S.RelativeLi>
            <S.BorderTopDiv type="solid" color="#e1e1e1" left="8.6rem" laptopLeft="20.1rem" />
            <S.Circlediv color="#e1e1e1" left="7.8rem" laptopLeft="18.5rem" />
            <S.PTag left="7.35rem" laptopLeft="17.7rem">
              인터뷰
              <br />
              결과
              <br />
              대기중
            </S.PTag>
          </S.RelativeLi>
          <S.RelativeLi>
            <S.BorderTopDiv type="solid" color="#e1e1e1" left="11.5rem" laptopLeft="26.8rem" />
            <S.Circlediv color="#e1e1e1" left="10.65rem" laptopLeft="25.2rem" />
            <S.PTag left="10.1rem" laptopLeft="24.4rem">
              투입
              <br />
              준비중
            </S.PTag>
          </S.RelativeLi>
          <S.RelativeLi>
            <S.BorderTopDiv type="solid" color="#e1e1e1" left="14.4rem" laptopLeft="33.5rem" />
            <S.Circlediv color="#e1e1e1" left="13.55rem" laptopLeft="32rem" />
            <S.PTag left="12.9rem" laptopLeft="31.1rem">
              진행중
            </S.PTag>
          </S.RelativeLi>
          <S.RelativeLi>
            <S.Circlediv color="#e1e1e1" left="16.45rem" laptopLeft="38.6rem" />
            <S.PTag left="15.9rem" laptopLeft="37.8rem">
              완료
            </S.PTag>
          </S.RelativeLi>
        </S.UlTag>
        <S.BetweenDiv top="1rem">
          <S.DayPTag>프로젝트를 {data.createdDate}에 등록하였습니다.</S.DayPTag>
          <S.FlexDiv>
            <S.ProjectSpan
              bgColor="#ff6b6b"
              onClick={() => {
                setInterviewModal(false);
              }}
            >
              지원자 {data.applicantList.length}
            </S.ProjectSpan>
            <S.ProjectSpan
              bgColor="#ff6b6b"
              onClick={() => {
                setInterviewModal(false);
              }}
            >
              인터뷰요청자 {data.interviewRequestList.length}
            </S.ProjectSpan>
          </S.FlexDiv>
        </S.BetweenDiv>
      </S.ColorDiv>
    </S.Container>
  );
};

export default ProjectList;
