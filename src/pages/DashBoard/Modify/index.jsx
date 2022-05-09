import { Link } from 'react-router-dom';
import * as S from './style';
import Back from 'assets/images/arrowback.png';

const DashBoardModify = () => {
  return (
    <S.Container>
      <S.SpacebetweenDiv>
        <Link to="/dashboard/profile">
          <S.Img src={Back} alt="arrowback" />
        </Link>
        <S.H1>프로필 작성</S.H1>
        <S.Save>저장</S.Save>
      </S.SpacebetweenDiv>

      <S.SpanTag display="none" right="6em">
        프로필 제목
      </S.SpanTag>
      <S.ProfileDiv>
        <S.ProfileInput placeholder="프로필 제목을 입력해주세요." />
      </S.ProfileDiv>
      <S.Title>사업정보 *</S.Title>
      <S.ColorDiv>
        <S.MarginAutoDiv>
          <S.InputDiv>
            <S.BlockDiv>
              <div>
                <S.SpanTag right="2rem">주요 사업내용</S.SpanTag>
              </div>
              <S.InputTag size="14.5rem" laptopSize="19rem" placeholder="주요 사업내용" />
            </S.BlockDiv>
            <S.ErrorMessage />
            <S.CapsMessage />
          </S.InputDiv>
          <S.InputDiv>
            <S.BlockDiv>
              <div>
                <S.SpanTag right="3rem" star="none">
                  연간 매출액
                </S.SpanTag>
              </div>
              <S.InputTag size="14.5rem" laptopSize="19rem" placeholder="연간 매출액" />
            </S.BlockDiv>
            <S.CapsMessage />
          </S.InputDiv>
          <S.InputDiv>
            <S.BlockDiv>
              <div>
                <S.SpanTag right="1.3rem">사업자등록번호</S.SpanTag>
              </div>
              <S.InputTag size="14.5rem" laptopSize="38rem" placeholder="주요 사업내용" />
            </S.BlockDiv>
            <S.CapsMessage />
          </S.InputDiv>
        </S.MarginAutoDiv>
      </S.ColorDiv>
    </S.Container>
  );
};

export default DashBoardModify;
