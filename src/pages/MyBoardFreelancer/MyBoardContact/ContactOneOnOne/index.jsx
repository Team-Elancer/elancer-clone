import axios from 'axios';
import { useState } from 'react';

import { IoArrowUpCircleOutline, IoArrowDownCircleOutline } from 'react-icons/io5';

import * as S from './style';

import ModalFreelancerContactModal from 'components/Modal/ModalFreelancerContact';

const ContactQneOnOne = ({ ContactData, contactNum, fetchContactData, idx }) => {
  const [contentBool, setContentBool] = useState(false);
  const [putmodalBool, setPutModalBool] = useState(false);

  const deleteContact = (e) => {
    e.preventDefault();

    const checkConfrim = window.confirm('삭제하시겠습니까?');
    if (checkConfrim) {
      axios({
        method: 'DELETE',
        url: 'http://ec2-13-209-114-196.ap-northeast-2.compute.amazonaws.com:8080/contact-delete',
        headers: {
          Authorization: `${window.localStorage.accessToken}`,
        },
        data: {
          contactNum,
        },
      })
        .then((res) => {
          alert('문의가 삭제되었습니다.');
          fetchContactData();
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
          <S.TitleP>{ContactData[idx].title}</S.TitleP>
        </S.DisplayFlexDiv>
        <S.DisplayFlexDiv>
          <S.DateP>{ContactData[idx].localDate}</S.DateP>
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
            <ModalFreelancerContactModal
              setPutModalBool={setPutModalBool}
              ContactData={ContactData[idx]}
              contactNum={contactNum}
              fetchContactData={fetchContactData}
            />
          )}
          <S.DisplayFlexDiv>
            <S.BlueSpan>[문의내용]</S.BlueSpan>
            <S.TitleP>{ContactData[idx].content}</S.TitleP>
          </S.DisplayFlexDiv>
          <S.BorderDiv />
          <S.FlexEndDiv>
            <S.ButtonDiv
              color="#7485c9"
              onClick={() => {
                setPutModalBool(!putmodalBool);
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

export default ContactQneOnOne;
