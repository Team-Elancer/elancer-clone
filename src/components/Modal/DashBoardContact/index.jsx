import * as S from './style';
import Cancel from 'assets/images/cancel-dark.png';
import SubmitButton from 'components/Button/SubmitButton';

const ContactModal = ({ setModalBool }) => {
  return (
    <S.Container>
      <S.FlexDiv>
        <S.Img
          src={Cancel}
          alt="cancel"
          onClick={() => {
            setModalBool(false);
          }}
        />
        <S.H1>1:1 문의/요청</S.H1>
      </S.FlexDiv>
      <S.FlexInputDiv top="0.3rem">
        <S.H2 right="6rem">성명</S.H2>
        <S.Input />
      </S.FlexInputDiv>
      <S.FlexInputDiv top="0.8rem">
        <S.H2 right="5.2rem">휴대폰</S.H2>
        <S.Input />
      </S.FlexInputDiv>
      <S.FlexInputDiv top="0.8rem">
        <S.H2 right="5.2rem">이메일</S.H2>
        <S.Input />
      </S.FlexInputDiv>
      <S.FlexInputDiv top="0.8rem">
        <S.H2 right="6rem">제목</S.H2>
        <S.Input placeholder="제목입니다." />
      </S.FlexInputDiv>
      <S.FlexInputDiv top="0.9rem">
        <S.H2 width="100px" top="-2rem">
          문의내용
        </S.H2>
        <S.Textarea placeholder="문의내용을 입력해주세요." />
      </S.FlexInputDiv>
      <S.BorderDiv>
        <S.ButtonDiv>
          <SubmitButton text="문의하기" heights="0.8rem" marginTop="1rem" />
        </S.ButtonDiv>
      </S.BorderDiv>
    </S.Container>
  );
};

export default ContactModal;
