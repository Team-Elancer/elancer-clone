import axios from 'axios';
import { useState } from 'react';

import { IoArrowUpCircleOutline, IoArrowDownCircleOutline } from 'react-icons/io5';

import * as S from './style';

import ModalFreelancerContactModal from 'components/Modal/ModalFreelancerContact';

import useModal from 'hooks/useModal';

import { BaseUrl } from 'utils/config/api';

const ContactQneOnOne = ({ contactData, contactNum, idx, userData }) => {
  const { isShowing, toggle } = useModal();

  const [isEditShowing, isSetEdingShowing] = useState(false);

  const deleteContact = (e) => {
    e.preventDefault();

    const checkConfrim = window.confirm('삭제하시겠습니까?');
    if (checkConfrim) {
      axios({
        method: 'DELETE',
        url: `${BaseUrl}/contact-delete`,
        headers: {
          Authorization: `${window.localStorage.accessToken}`,
        },
        data: {
          contactNum,
        },
      })
        .then((res) => {
          alert('문의가 삭제되었습니다.');
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  return (
    <S.Colordiv>
      <S.FlexDiv>
        <S.DisplayFlexDiv>
          <S.NoAnwser>미답변</S.NoAnwser>
          <S.TitleP>{contactData[idx].title}</S.TitleP>
        </S.DisplayFlexDiv>
        <S.DisplayFlexDiv>
          <S.DateP>{contactData[idx].localDate}</S.DateP>
          <S.ButtonP onClick={toggle}>
            {isShowing ? <IoArrowUpCircleOutline fontSize="32px" /> : <IoArrowDownCircleOutline fontSize="32px" />}
          </S.ButtonP>
        </S.DisplayFlexDiv>
      </S.FlexDiv>
      {isShowing === true && (
        <S.SecondDiv>
          {isEditShowing === true && (
            <ModalFreelancerContactModal
              isSetEdingShowing={isSetEdingShowing}
              contactData={contactData[idx]}
              contactNum={contactNum}
              userData={userData}
            />
          )}
          <S.DisplayFlexDiv>
            <S.BlueSpan>[문의내용]</S.BlueSpan>
            <S.TitleP>{contactData[idx].content}</S.TitleP>
          </S.DisplayFlexDiv>
          <S.BorderDiv />
          <S.FlexEndDiv>
            <S.ButtonDiv color="#7485c9" onClick={() => isSetEdingShowing((prev) => !prev)}>
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

export default ContactQneOnOne;
