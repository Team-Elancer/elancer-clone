import { Link } from 'react-router-dom';
import * as S from './style';

const OnGoingCard = () => {
  return (
    <S.FrameSummary>
      <S.ContainerSummary>
        <S.SummarySubject>AutoFolio</S.SummarySubject>
        <Link to="/myboard-freelancer/career">
          <S.SummaryContent>이랜서에서 경력서를 손쉽게 공유해보세요</S.SummaryContent>
        </Link>
        <S.ContentExtra>링크 복사, 카카오톡 공유, 문자 보내기</S.ContentExtra>
      </S.ContainerSummary>
      <S.ContainerSummary>
        <S.SummarySubject>업무 가능일 업데이트</S.SummarySubject>
        <Link to="/myboard-freelancer/career">
          <S.SummaryContent>업무 가능일을 업데이트하고 더 많은 프로젝트를 만나세요</S.SummaryContent>
        </Link>
        <S.ContentExtra>링크 복사, 카카오톡 공유, 문자 보내기</S.ContentExtra>
      </S.ContainerSummary>
      <S.ContainerSummary>
        <S.SummarySubject>인터뷰 요청</S.SummarySubject>
        <Link to="/myboard-freelancer/career">
          <S.SummaryContent>기업의 새로운 요청이 있어요!</S.SummaryContent>
        </Link>
        <S.ContentExtra>놓치기 쉬운 프로젝트의 일정 알림을 받을 수 있어요</S.ContentExtra>
      </S.ContainerSummary>
    </S.FrameSummary>
  );
};

export default OnGoingCard;
