import { useState } from 'react';
import { CgFileDocument } from 'react-icons/cg';
import { FaUserAlt } from 'react-icons/fa';
import { IoMdDesktop } from 'react-icons/io';
import { Link } from 'react-router-dom';
import * as S from './style';
import Search from 'assets/images/search_big.png';
import ContactModal from 'components/Modal/DashBoardContact';

const MyBoardContact = () => {
  const [modalBool, setModalBool] = useState(false);

  return (
    <S.Container>
      {modalBool === true && <ContactModal setModalBool={setModalBool} />}
      <S.FlexDiv>
        <S.H1 size="2.4rem">문의/요청</S.H1>
        <S.H1
          size="1.4rem"
          cursor="pointer"
          onClick={() => {
            setModalBool(!modalBool);
          }}
        >
          문의하기
        </S.H1>
      </S.FlexDiv>
      <S.OverflowDiv>
        <S.WidthDiv>
          <S.EcardDiv mobileRight="1.5rem" tabletRight="1rem">
            <S.H2>문의 카테고리를 선택해주세요.</S.H2>
            <S.H3 color="#a5a5a5">원하시는 종류의 문의 카테고리를 선택해주세요</S.H3>
          </S.EcardDiv>
          <Link to="/contact-faq">
            <S.WhiteEcardDiv>
              <S.IconDiv color="#f16300">
                <IoMdDesktop size="100%" />
              </S.IconDiv>
              <S.Title top="1rem" color="#f16300">
                프로젝트
              </S.Title>
              <S.H3 color="	#4B4B4B">프로젝트에 관한 궁금증을 풀어드립니다.</S.H3>
            </S.WhiteEcardDiv>
          </Link>
          <S.EcardDiv mobileRight="1.5rem" tabletRight="1rem">
            <S.IconDiv mobileTop="0.3rem" top="0.2rem">
              <CgFileDocument size="100%" />
            </S.IconDiv>
            <S.Title top="1rem">이력정보</S.Title>
            <S.H4 top="0.9rem">이력정보에 관한 궁금증을 풀어드립니다.</S.H4>
          </S.EcardDiv>
          <S.EcardDiv>
            <S.IconDiv mobileTop="0.8rem" top="0.6rem">
              <FaUserAlt size="75%" />
            </S.IconDiv>
            <S.Title top="1.2rem">회원정보 수정</S.Title>
            <S.H4 top="0.9rem">회원정보 수정에 관한 궁금증을 풀어드립니다.</S.H4>
          </S.EcardDiv>
        </S.WidthDiv>
      </S.OverflowDiv>
      <S.H1 size="2.4rem">원하는 질문을 검색해보세요.</S.H1>
      <S.RelativeDiv>
        <S.InputDiv>
          <S.Img src={Search} alt="search" />
          <S.Form>
            <S.Select>
              <option value="1">전체</option>
              <option value="2">프로젝트</option>
              <option value="3">1:1 문의</option>
            </S.Select>
            <S.LineDiv />
            <S.Input placeholder="질문을 입력해주세요" />
          </S.Form>
        </S.InputDiv>
      </S.RelativeDiv>
      <S.H1 top="3rem" size="2.4rem">
        프로젝트 문의 (0)
      </S.H1>
      <S.BorderDiv />
      <S.H1 top="3rem" size="2.4rem">
        나의 문의/요청 (0)
      </S.H1>
      <S.BorderDiv />
    </S.Container>
  );
};

export default MyBoardContact;
