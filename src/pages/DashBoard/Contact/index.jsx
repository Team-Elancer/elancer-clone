import axios from 'axios';
import { useEffect, useState } from 'react';

import { CgFileDocument } from 'react-icons/cg';
import { FaUserAlt } from 'react-icons/fa';
import { IoMdDesktop } from 'react-icons/io';
import { IoArrowUpCircleOutline, IoArrowDownCircleOutline } from 'react-icons/io5';

import { useOutletContext } from 'react-router-dom';

import * as S from './style';
import Search from 'assets/images/search_big.png';
import ContactPutModal from 'components/Modal/ContactPut';
import ContactModal from 'components/Modal/DashBoardContact';
import MyContactSkeleton from 'components/Skeleton/Contact';
import { BaseUrl } from 'utils/config/api';

const DashboardContact = () => {
  const [modalBool, setModalBool] = useState(false);
  const [reLoading, setReLoading] = useState(false);
  const [newArray, setNewArray] = useState([]);
  const [Datas, setDatas, axiosUrl, setaxiosUrl, fetchData] = useOutletContext();

  useEffect(() => {
    setaxiosUrl('/contacts');
    setNewArray(Datas);
    if (Datas === '' || reLoading === true) {
      fetchData();
      setReLoading(false);
    }
  }, [Datas, reLoading, axiosUrl]);

  return (
    <S.Container>
      {modalBool === true && <ContactModal setModalBool={setModalBool} setReLoading={setReLoading} />}
      <S.FlexDiv top="2.2rem">
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
          <S.WhiteEcardDiv>
            <S.IconDiv color="#f16300">
              <IoMdDesktop size="100%" />
            </S.IconDiv>
            <S.Title top="1rem" color="#f16300">
              프로젝트
            </S.Title>
            <S.H3 color="	#4B4B4B">프로젝트에 관한 궁금증을 풀어드립니다.</S.H3>
          </S.WhiteEcardDiv>
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
      <S.BorderDiv display="none" />
      <S.H1 top="3rem" size="2.4rem">
        나의 문의/요청 ({Datas.length})
      </S.H1>
      {newArray.length > 0 ? (
        newArray.map((data) => {
          return (
            <MyContact
              key={data.num}
              ContactData={Datas}
              modalBool={modalBool}
              setModalBool={setModalBool}
              setReLoading={setReLoading}
              title={data.title}
              content={data.content}
              Date={data.localDate}
              index={data.num}
            />
          );
        })
      ) : (
        <MyContactSkeleton />
      )}
      <S.BorderDiv display="none" />
    </S.Container>
  );
};

const MyContact = ({ ContactData, title, content, Date, index, setReLoading }) => {
  const [contentBool, setContentBool] = useState(false);
  const [putmodalBool, setPutModalBool] = useState(false);

  const deleteContact = (e) => {
    e.preventDefault();
    console.log(index);
    const checkConfrim = window.confirm('해당 문의를 삭제하시겠습니까?');
    if (checkConfrim) {
      axios({
        method: 'DELETE',
        url: `${BaseUrl}/contact-delete`,
        headers: {
          Authorization: `${window.localStorage.accessToken}`,
        },
        data: {
          contactNum: index,
        },
      })
        .then((res) => {
          setReLoading(true);
          alert('문의가 삭제되었습니다.');
        })
        .catch((err) => {
          alert(err.response.data.errorMessage);
        });
    } else {
      console.log('취소');
    }
  };

  return (
    <S.Colordiv>
      <S.FlexDiv>
        <S.DisplayFlexDiv>
          <S.NoAnwser>미답변</S.NoAnwser>
          <S.TitleP>{ContactData.length > 1 ? title : ''}</S.TitleP>
        </S.DisplayFlexDiv>
        <S.DisplayFlexDiv>
          <S.DateP>{Date}</S.DateP>
          <S.ButtonP
            onClick={(e) => {
              e.preventDefault();
              setContentBool(!contentBool);
            }}
          >
            {contentBool ? <IoArrowUpCircleOutline fontSize="32px" /> : <IoArrowDownCircleOutline fontSize="32px" />}
          </S.ButtonP>
        </S.DisplayFlexDiv>
      </S.FlexDiv>
      {contentBool === true && (
        <S.SecondDiv>
          {putmodalBool === true && (
            <ContactPutModal
              setReLoading={setReLoading}
              setPutModalBool={setPutModalBool}
              NumTitle={title}
              NumContent={content}
              index={index}
            />
          )}
          <S.DisplayFlexDiv>
            <S.BlueSpan>[문의내용]</S.BlueSpan>
            <S.TitleP>{ContactData.length > 1 ? content : ''}</S.TitleP>
          </S.DisplayFlexDiv>
          <S.BorderDiv />
          <S.FlexEndDiv>
            <S.ButtonDiv
              color="#7485c9"
              onClick={() => {
                setPutModalBool(!putmodalBool);
                window.scrollTo(0, 0);
              }}
            >
              수정
            </S.ButtonDiv>
            <S.ButtonDiv color="#b7b7b7" onClick={deleteContact}>
              삭제
            </S.ButtonDiv>
          </S.FlexEndDiv>
        </S.SecondDiv>
      )}
    </S.Colordiv>
  );
};

export default DashboardContact;
